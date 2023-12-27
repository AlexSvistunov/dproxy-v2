const locationBtns = document.querySelectorAll('.location__btn');
const locationContents = document.querySelectorAll('.location-state');

locationBtns.forEach(locationBtn => {
  locationBtn.addEventListener('click', (e) => {
    const currentT = e.currentTarget;
    const data = currentT.dataset.tab;

    locationBtns.forEach(el => {
      el.classList.remove('active');
      currentT.classList.add('active');
    });


    locationContents.forEach(locationContent => {
      locationContent.classList.remove('active');
      if(locationContent.dataset.target === data) {
        locationContent.classList.add('active');
      }
    });
  });
});

