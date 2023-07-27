const url = "https://fakestoreapi.com/products";
let productsData = {};

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    productsData = data;
    renderProducts(productsData);
  })
  .catch((error) => console.log(error));

function renderProducts(cart) {
  const container = document.querySelector(".keranjang-pesanan");
  container.innerHTML = "";

  cart.forEach((item) => {
    const productHTML = `
    <div class="w-full">
      <div class="delete-cart justify-between items-center px-5 py-2 bg-green-600">
        <input type="checkbox" class="input-check-mobile w-5 h-5 outline-0" />
        <div class="delete-mobile">
          <button class="py-1 px-4 text-green-600 rounded-lg bg-white hover:bg-stone-200">Checkout</button>
          <button class="py-1 px-4 text-white rounded-lg bg-red-500 hover:bg-red-600">Hapus</button>
        </div>
      </div>
      <div class="delete-deks justify-end px-5 py-2 bg-green-600 gap-5">
        <button class="py-1 px-4 text-green-600 rounded-lg bg-white hover:bg-stone-200">Checkout</button>
        <button class="py-1 px-4 text-white rounded-lg bg-red-500 hover:bg-red-600">Hapus</button>
      </div>
      <div
      class="keranjang-self flex w-full justify-evenly items-center h-28 text-white bg-green-600 " key=${item.id} data-key="${item.id}
      >
        <p class="chekbox-container"><input type="checkbox"  class="cart-checkbox w-5 h-5 outline-0" /></p>
        <p>
          <img
            src=${item.image}
            alt=""
            class="h-24 w-24 object-cover"
          />
        </p>
        <p class="cart-title text-sm">${item.title}</p>
        <p>$ ${item.price}</p>
        <div class="flex gap-1 md:flex-row flex-col">
          <span class="w-7 h-7 bg-white text-black text-base hover:bg-stone-300 cursor-pointer text-center rounded-full flex justify-center items-center" onclick="increaseQuantity(this)" >+
          </span>
          <span class="w-7 h-7 flex justify-center items-center text-white text-xl text-center quantity-display">1
          </span>
          <span class="w-7 h-7 bg-white text-black text-base hover:bg-stone-300 cursor-pointer text-center rounded-full flex justify-center items-center" onclick="decreaseQuantity(this)" >-
          </span>
        </div>
        <p>$ ${item.price}</p>
      </div>
    </div>
      `;
    container.insertAdjacentHTML("beforeend", productHTML);
  });

  const checkboxMobile = container.querySelectorAll(".input-check-mobile");
  checkboxMobile.forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckMobile);
  });

  const checkboxes = container.querySelectorAll(".cart-checkbox");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", handleCheckboxChange);
  });
}

// tambah dan kurang pesanan
const maxQuantity = 10;

function decreaseQuantity(span) {
  const quantityDisplay = span.previousElementSibling;
  let quantity = parseInt(quantityDisplay.innerText);
  if (quantity > 1) {
    quantity--;
    quantityDisplay.innerText = quantity;
  }
}

function increaseQuantity(span) {
  const quantityDisplay = span.nextElementSibling;
  let quantity = parseInt(quantityDisplay.innerText);

  if (quantity < maxQuantity) {
    quantity++;
    quantityDisplay.innerText = quantity;
  }
}
// akhir tambah dan kurang pesanan

function handleCheckMobile(event) {
  const checkbox = event.target;
  const deleteCart = checkbox.closest(".delete-cart");
  const deleteButton = deleteCart.querySelector(".delete-mobile");
  if (checkbox.checked) {
    deleteButton.style.display = "inline-block";
  } else {
    deleteButton.style.display = "none";
  }
}

function handleCheckboxChange(event) {
  const checkbox = event.target;
  const deleteDeks = checkbox.closest(".keranjang-self").previousElementSibling;
  if (checkbox.checked) {
    deleteDeks.style.display = "flex";
  } else {
    deleteDeks.style.display = "none";
  }
}

var kembaliButton = document.getElementById("kembaliButton");
kembaliButton.addEventListener("click", function () {
  history.back();
});
