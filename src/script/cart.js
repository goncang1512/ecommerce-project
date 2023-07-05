const cart = [];

const menuList = document.querySelector(".navbar-list");
const menuToggle = document.querySelector(".checkbox");

menuToggle.addEventListener("click", () => {
  menuList.classList.toggle("slide");
});
