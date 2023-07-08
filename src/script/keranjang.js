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
    <div
    class="keranjang-self flex w-full justify-evenly items-center h-28 text-white bg-green-600"
    >
      <p><input type="checkbox" id="${item.id}" class="cart-checkbox w-5 h-5 outline-0" /></p>
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
      `;
    container.insertAdjacentHTML("beforeend", productHTML);
  });
}

var kembaliButton = document.getElementById("kembaliButton");
kembaliButton.addEventListener("click", function () {
  history.back();
});

// Temukan semua elemen checkbox
