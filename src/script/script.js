const menuList = document.querySelector(".navbar-menu");
const menuToggle = document.querySelector(".checkbox");

menuToggle.addEventListener("click", () => {
  menuList.classList.toggle("slide");
});
