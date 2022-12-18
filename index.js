const links = document.querySelectorAll(".navigation__link");
const closeNav = () => {
  setTimeout(() => document.querySelector(".navigation__button").click(), 500);
};
links.forEach((link) => link.addEventListener("click", closeNav));

const form = document.querySelector(".form");
const formSubmitHandler = (e) => {
  e.preventDefault();
  const html =
    '<div class="u-margin-bottom-medium"><h2 class="heading-secondary" id="book">Thank you!</h2></div>';
  form.innerHTML = html;
};
form.addEventListener("submit", formSubmitHandler);

const popup = document.querySelector(".popup");
const closePopup = () => {
  document.querySelector(".popup__close").click();
};
popup.addEventListener("click", closePopup);
