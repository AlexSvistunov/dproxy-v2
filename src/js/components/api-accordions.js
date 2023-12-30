const guideBoxes = document.querySelectorAll('.guide-api__box');
guideBoxes.forEach(guideBox => {
  guideBox.addEventListener('click', () => {
    guideBox.classList.toggle('box--active');
    if(guideBox.classList.contains('box--active')) {
      guideBox.style.maxHeight = guideBox.scrollHeight + 'px';
    } else {
      guideBox.style.maxHeight = null;
    }
  });
});

