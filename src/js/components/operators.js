const operatorsBtns = document.querySelectorAll('[data-operator-russia]');
const operatorsContents = document.querySelectorAll('.operators-content--ru');



operatorsBtns.forEach(operatorsBtn => {
  operatorsBtn.addEventListener('click', (e) => {
    const currentBtn = e.currentTarget;
    const data = currentBtn.dataset.target;
    operatorsBtns.forEach(el => {
      el.classList.remove('operators__button--active');
    });

    currentBtn.classList.add('operators__button--active');

    operatorsContents.forEach(operatorsContent => {
      operatorsContent.classList.remove('operators-content--active');
      if(data === operatorsContent.id) {
        operatorsContent.classList.add('operators-content--active');
      }
    });



  });
});


const operatorsBtnsT = document.querySelectorAll('[data-operator-thai]');
const operatorsContentsT = document.querySelectorAll('.operators-content--thai');


operatorsBtnsT.forEach(operatorsBtnT => {
  operatorsBtnT.addEventListener('click', (e) => {
    const currentBtn = e.currentTarget;
    const data = currentBtn.dataset.target;
    operatorsBtnsT.forEach(el => {
      el.classList.remove('operators__button--active');
    });

    currentBtn.classList.add('operators__button--active');

    operatorsContentsT.forEach(operatorsContentT => {
      operatorsContentT.classList.remove('operators-content--active');
      if(data === operatorsContentT.id) {
        operatorsContentT.classList.add('operators-content--active');
      }
    });



  });
});
