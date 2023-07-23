const url = "https://fakestoreapi.com/products";
let productsData = [];

// Mengambil data produk dari API
fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    productsData = data;
    renderProducts(data);
  })
  .catch((error) => console.log(error));

// Fungsi untuk merender produk
function renderProducts(products) {
  const container = document.querySelector(".container-card");
  container.innerHTML = "";

  products.forEach((product) => {
    const productHTML = `
      <div class="md:rounded-lg rounded-0 flex justify-center flex-col md:w-80 w-2/4 bg-zinc-50 md:shadow-xl border border-green-600" key="${product.id}">
        <div class="card-top">
          <figure class="flex justify-center">
            <img
              class="h-72 p-2.5 position-center"
              src=${product.image}
              alt="Shoes"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">${product.title}</h2>
            <p class="card-text" id="productDescription">
              ${product.description}
            </p>
          </div>
        </div>
        <div class="card-actions justify-end items-center">
          <p class="card-price">$ ${product.price}</p>
          <button class="btn btn-primary js-add-to-cart" data-product-id="${product.id}">Buy Now</button>
        </div>
      </div>`;

    container.insertAdjacentHTML("beforeend", productHTML);
  });

  document.querySelectorAll(".js-add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = button.dataset.productId;

      let matchingItem;

      cart.forEach((item) => {
        if (productId === item.productId) {
          matchingItem = item;
        }
      });

      if (matchingItem) {
        matchingItem.quantity += 1;
      } else {
        cart.push({
          productId: productId,
          quantity: 1,
        });
      }

      let cartQuantity = 0;

      cart.forEach((item) => {
        cartQuantity += item.quantity;
      });

      localStorage.setItem("jumlah", cartQuantity);
      const jumalahCart = localStorage.getItem("jumlah");

      const quantitycart = document.querySelector(".jumlah-keranjang");
      quantitycart.innerHTML = `
        <p
        class="amount-order absolute flex items-center justify-center rounded-full bg-red-500 text-white"
      >
        ${jumalahCart}
      </p>`;

      const buttonKeranjang = document.querySelector(".button-keranjang");

      buttonKeranjang.addEventListener("click", () => {
        cart.splice(0, cart.length);
        localStorage.clear();
        quantitycart.innerHTML = "";
      });

      localStorage.setItem("jumlah", cartQuantity);
    });
  });

  // Menambahkan event listener pada deskripsi produk
  const productDescriptions = document.querySelectorAll(".card-text");
  productDescriptions.forEach((description) => {
    description.addEventListener("click", function () {
      this.classList.toggle("expanded");
      const cardBody = this.closest(".card-body");
      cardBody.classList.toggle("ixpanded");
    });
  });

  if (products.length === 0) {
    const container = document.querySelector(".container-card");
    container.innerHTML =
      '<p class="flex items-start justify-center pt-10 text-white h-screen text-3xl text-center">NOT FOUND</p>';

    const utterance = new SpeechSynthesisUtterance("not found");

    utterance.lang = "en-EN";
    utterance.text = "not found";

    window.speechSynthesis.speak(utterance);
  }
}

// Search sesuai dengan apa yang di input dalam searchInput
function searchProducts() {
  const searchInput = document.getElementById("searchInput").value;
  const filteredProducts = productsData.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );
  renderProducts(filteredProducts);
  document.getElementById("searchInput").value = "";
}

// Tombol Search
const searchButton = document.getElementById("searchButton");
searchButton.addEventListener("click", searchProducts);

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    searchProducts();
  }
});
