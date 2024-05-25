# **Dproxy - проект мобильных прокси с красивым дизайном и множеством интерактивных элементов. Это полный редизайн первой версии.**

[Посмотреть проект LIVE на готовом хостинге заказчика](https://dproxy.co/ru/): https://dproxy.co/ru/

[Посмотреть проект LIVE с моего репозитория git(устаревшая версия, так  как заказчик заказывал правки)](https://alexsvistunov.github.io/dproxy-v2/):

## Технологии:
HTML, SCSS, JS, GULP


## Реализованные фичи:

+ Gradient border

+ Переключатель языка

+ Мультиязычность(английская и русская версии)

+ Табы с переключением контента

+ Табы в табах

+ Копирование в буфер обмена и alert об этом

+ Бургер-меню

+ Просмотр фотографий(небольшая галерея, но без прокрутки, как модалаьное окно)
Скачивание файла публичной офферты



## Проблемы, с которыми столкнулся:

В CSS нет реализации стилизации градиентных границ

Мультиязычность сайта

Адаптивный перенос строки с br


## Решение проблем:
+ Проблему градиентных границ решил при помощи абсолютного позиционирования псевдоэлементов и z-index
```html
<!-- На примере кнопки написать перейти в телеграм -->

.work__link {
    position: relative;
    display: block;
    max-width: 276px;
    width: 100%;
    padding: 19px 30px;
    min-height: 62px;
    background: var(--bg-color);
    border-radius: 8px;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 20px;
    box-shadow: 0 2.5px 9.375px -3px #004770;
}

.work__link::before {
    position: absolute;
    content: "";
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(47deg, #0a6fcc -44.41%, rgba(59, 237, 77, .75) 124.33%);
    border-radius: 8px;
    z-index: -1;
}

<!-- Прошу обратить внимание на z-index: -1, он обязателен -->

```

+ Мультиязычность была решена при помощи двух разных url /eng, /ru. 
То есть когда нажимается toggle смены языка, пользователь заходит на другую директорию

+ Перенос определенного текста был решен с помощью br, но суть в том, что br не адаптируется. Пришлось адаптировать через JS =)

```JS
function addLineBreakOnResize() {
  let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  if (screenWidth < 416) {
    let titleText = document.querySelector('.hero__title-text');
    if (titleText && titleText.innerHTML.indexOf('парсинг') !== -1) {
      titleText.innerHTML = titleText.innerHTML.replace(/<br>/g, '');
      titleText.innerHTML = titleText.innerHTML.replace('парсинг данных,', 'парсинг данных, <br>');
    }
  }
}

window.onload = addLineBreakOnResize;
window.onresize = addLineBreakOnResize;
```
<hr>

**Другие репозитории с этим проектом**

https://github.com/AlexSvistunov/dproxy-v2-refresh-eng

https://github.com/AlexSvistunov/dproxy-v2-refresh

<hr>

### Автор: Alex Svistunov


