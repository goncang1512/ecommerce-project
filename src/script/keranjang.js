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
  const container = document.querySelector(".keranjang-pesanan ");
  container.innerHTML = "";

  cart.forEach((item) => {
    const productHTML = `
    <div class="w-full">
      <div class="delete-cart justify-between items-center px-5 py-2 bg-green-600">
        <input type="checkbox"  class="input-check-mobile w-5 h-5 outline-0" />
        <button class="delete-mobile text-white hover:text-slate-800">Hapus</button>
      </div>
      <div class="delete-deks justify-between px-5 py-2 bg-green-600">
        <button class="button-hapus-deks text-white">Hapus</button>
      </div>
      <div
      class="keranjang-self flex w-full justify-evenly items-center h-28 text-white bg-green-600"
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
        <p>1</p>
        <p>$ ${item.price}</p>
      </div>
    </div>
      `;
    container.insertAdjacentHTML("beforeend", productHTML);
  });

  deleteCart();
}

function deleteCart() {
  const checkbox = document.querySelector(".cart-checkbox");
  checkbox.addEventListener("change", deleteBar);

  function deleteBar() {
    const deleteCartDiv = document.querySelector(".delete-deks");
    const containerItem = document.querySelector(".keranjang-self");

    if (checkbox.checked) {
      deleteCartDiv.style.display = "flex";
      containerItem.style.borderTopLeftRadius = "0";
      containerItem.style.borderTopRightRadius = "0";
    } else {
      deleteCartDiv.style.display = "none";
      containerItem.style.borderTopLeftRadius = "5px";
      containerItem.style.borderTopRightRadius = "5px";
    }
  }

  const checkMobile = document.querySelector(".input-check-mobile");
  checkMobile.addEventListener("change", deleteMobile);

  function deleteMobile() {
    const deleteMobile = document.querySelector(".delete-mobile");

    if (checkMobile.checked) {
      deleteMobile.style.display = "flex";
    } else {
      deleteMobile.style.display = "none";
    }
  }
}

var kembaliButton = document.getElementById("kembaliButton");
kembaliButton.addEventListener("click", function () {
  history.back();
});
