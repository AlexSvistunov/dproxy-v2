const switchToggles = document.querySelectorAll('.switch-toggle');

switchToggles.forEach(switchToggle => {
  switchToggle.addEventListener('click', () =>{
    switchToggle.classList.toggle('switch-toggle--eng');
    if(switchToggle.classList.contains('switch-toggle--eng')) {
      switchToggle.setAttribute('aria-checked', 'true');
    } else {
      switchToggle.setAttribute('aria-checked', 'false');
    }
  });

});

