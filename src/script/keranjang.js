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
  const container = document.querySelector(".menu-cart");
  container.innerHTML = "";

  cart.forEach((item) => {
    const productHTML = `
         <div class="w-full bg-red-500 flex justify-evenly">
            <p>1</p>
            <img src=${item.image} alt="" class="w-12"/>
            <div>${item.title}</div>
            <p>jumlah</p>
            <p>${item.price}</p>
         </div>
      `;
    container.insertAdjacentHTML("beforeend", productHTML);
  });
}

var kembaliButton = document.getElementById("kembaliButton");
kembaliButton.addEventListener("click", function () {
  history.back();
});
