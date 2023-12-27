const dropdowns = document.querySelectorAll('.dropdown');


dropdowns.forEach(dropdown => {
  const dropdownBtn = dropdown.querySelector('.dropdown__btn');
  const dropdownContent = dropdown.querySelector('.dropdown__content');
  dropdownBtn.addEventListener('click', (e) => {
    dropdown.classList.toggle('dropdown--active');

   if(dropdown.classList.contains('dropdown--active')) {
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + 'px';
   } else {
    dropdownContent.style.maxHeight = null;
   }
   
  });

});
