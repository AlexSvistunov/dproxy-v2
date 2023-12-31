const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {
  const dropdownBtn = dropdown.querySelector('.dropdown__btn');
  const dropdownContent = dropdown.querySelector('.dropdown__content');
  dropdownBtn.addEventListener('click', (e) => {
    dropdown.classList.toggle('dropdown--active');

   if(dropdown.classList.contains('dropdown--active')) {
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
    dropdownContent.setAttribute('aria-hidden', false);
    dropdownBtn.setAttribute('aria-expanded', true);
   } else {
    dropdownContent.style.maxHeight = null;
    dropdownContent.setAttribute('aria-hidden', true);
    dropdownBtn.setAttribute('aria-expanded', false);
   }

  });

});
