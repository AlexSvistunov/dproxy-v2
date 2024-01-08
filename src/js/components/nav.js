const navLink = document.querySelectorAll('.header__nav-list a');
const path = window.location.pathname;

navLink.forEach(link => {
  const href = link.getAttribute('href');
  const comparePath = (path.length === 1) ? path : path.slice(1);

  if (href === comparePath) {
    link.classList.add('nav--active');
  }
});

