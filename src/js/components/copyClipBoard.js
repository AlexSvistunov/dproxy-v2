const guideBoxBtns = document.querySelectorAll('.guide-box__btn');
guideBoxBtns.forEach(guideBoxBtn => {
  guideBoxBtn.addEventListener('click', (e) => {
    const text = guideBoxBtn.closest('.guide-box__inner').querySelector('.guide-box__field').querySelector('.guide-box__text').textContent;
    e.stopPropagation();
    var textArea = document.createElement('textarea');
    textArea.value = 'http://api.dproxy.co' + text;
    document.body.appendChild(textArea);
    textArea.select();

    try {
      document.execCommand('copy');
      showNotification('Text copied to clipboard', 2000);
    } catch (err) {
      console.error('Unable to copy text to clipboard', err);
    }

    document.body.removeChild(textArea);
  });
});

const guideApiContents = document.querySelectorAll('.guide-api__content');
console.log(guideApiContents);

guideApiContents.forEach(guideApiContent => {
  guideApiContent.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});

function showNotification(message, duration) {
  let notification = document.createElement('div');
  notification.innerText = message;
  notification.style.position = 'fixed';
  notification.style.top = '10px';
  notification.style.right = '10px';
  notification.style.padding = '10px';
  notification.style.background = 'var(--brand-color, linear-gradient(47deg, #0A6FCC -44.41%, rgba(59, 237, 77, 0.75) 124.33%))';
  notification.style.color = '#fff';
  notification.style.borderRadius = '5px';
  document.body.appendChild(notification);

  setTimeout(function() {
    document.body.removeChild(notification);
  }, duration);
}

