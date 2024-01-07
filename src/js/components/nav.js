const navLink = document.querySelectorAll('.header__nav-list a');
const path = window.location.pathname;

navLink.forEach(link => {
  const href = link.getAttribute('href');

  // Проверка для корневого пути
  const comparePath = (path === '/' || path === '') ? '/' : path.slice(1);

  // Убедитесь, что href начинается с корневого слеша
  const compareHref = (href === '/') ? href : href.slice(1);

  if (compareHref === comparePath) {
    link.classList.add('nav--active');
  }
});
