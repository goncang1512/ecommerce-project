function sayAi() {
  const input = document.querySelector(".input").value;

  if (input.trim() === "") {
    const noText = document.querySelector(".hasil");

    noText.innerHTML = "Masukkan teks terlebih dahulu";
    setTimeout(() => {
      noText.innerHTML = "";
    }, 3000);
    const utterance = new SpeechSynthesisUtterance(input);

    utterance.lang = "id-ID";
    utterance.text = "Masukkan teks terlebih dahulu";

    window.speechSynthesis.speak(utterance);
  } else {
    const utterance = new SpeechSynthesisUtterance(input);

    utterance.lang = "id-ID";
    utterance.text = input;

    window.speechSynthesis.speak(utterance);
  }

  document.querySelector(".input").value = "";
}

const button = document.querySelector(".button");

button.addEventListener("click", () => {
  sayAi();
});

const searchInput = document.querySelector(".input");
searchInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    sayAi();
  }
});

const cart = [];

const menuList = document.querySelector(".navbar-list");
const menuToggle = document.querySelector(".checkbox");

menuToggle.addEventListener("click", () => {
  menuList.classList.toggle("slide");
});
