function addLineBreakOnResize() {
  let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (screenWidth < 768) {
      let titleText = document.querySelector('.hero__title-text');
      if (titleText && titleText.innerHTML.indexOf('парсинг') !== -1) {
          titleText.innerHTML = titleText.innerHTML.replace('парсинг данных,', 'парсинг данных<br>');
      }
  }
}

window.onload = addLineBreakOnResize;
window.onresize = addLineBreakOnResize;
