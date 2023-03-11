const sunBtn = document.querySelector("#sun");
const moonBtn = document.querySelector("#moon");
const mobileBtn = document.querySelector("#mobile-btn");
const burgerBtn = document.querySelector("#burger-btn");
const headerModal = document.querySelector(".header__modal");
const modalX = document.querySelector("#x");

sunBtn.addEventListener("click", () => {
  document.body.classList.remove("dark");

  sunBtn.classList.add("theme-active");
  moonBtn.classList.remove("theme-active");
});

moonBtn.addEventListener("click", () => {
  document.body.classList.add("dark");

  moonBtn.classList.add("theme-active");
  sunBtn.classList.remove("theme-active");
});

mobileBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  mobileBtn.classList.toggle("theme-dark");
});

burgerBtn.addEventListener("click", () => {
  headerModal.classList.add("move-right");
});

modalX.addEventListener("click", () => {
  headerModal.classList.remove("move-right");
});
