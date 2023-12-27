const burgerMenu = document.querySelector('.burger-menu');
const navMenu = document.querySelector('.header__nav');
const navBackBtn = document.querySelector('.nav-header__btn');

burgerMenu.addEventListener('click', () => {
  navMenu.classList.add('nav--active');
});

navBackBtn.addEventListener('click', () => {
  navMenu.classList.remove('nav--active');
});
