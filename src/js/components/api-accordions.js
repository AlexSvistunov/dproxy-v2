const guideBoxes = document.querySelectorAll('.guide-api__box');
guideBoxes.forEach(guideBox => {
  guideBox.addEventListener('click', () => {
  const innerContent = guideBox.querySelector('.guide-api__content');
   if(guideBox.querySelector('.guide-api__content')) {
    guideBox.classList.toggle('box--active');
    if(guideBox.classList.contains('box--active')) {
      guideBox.style.maxHeight = guideBox.scrollHeight + 'px';
      innerContent.setAttribute('aria-hidden', 'false');
      guideBox.setAttribute('aria-expanded', 'true');
    } else {
      guideBox.style.maxHeight = null;
      innerContent.setAttribute('aria-hidden', 'true');
      guideBox.setAttribute('aria-expanded', 'false');
    }
   }
  });
});

