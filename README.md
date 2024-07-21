# **Dproxy - mobile proxy website v2.0.**
with a beautiful design and lots of interactive elements. This is a complete redesign of the first version
[View the project LIVE on the customer's ready-made hosting](https://dproxy.co/ru/): https://dproxy.co/ru/

[View the project LIVE from my git repository(outdated version, since the customer ordered edits)](https://alexsvistunov.github.io/dproxy-v2/):

## Tech stack:
HTML, SCSS, JS, GULP

## Imlemented features:

+ Gradient border

+ Language switcher

+ Multilanguage implementation(eng and ru versions)

+ Tabs with content switching

+ Tabs in tabs

+ Copy to clipboard and custom alert

+ Burger menu

+ Gallery

+ Downloading public offertory file


## Problems faced:

+ There is no implementation of gradient border styling in CSS

+ Multilingualism of the website

+ Adaptive line break with br


## Problem solving:
+ The problem of gradient borders was solved by absolute positioning of pseudo elements and z-index
```html
<!-- Using the example of the button (go on telegram button) -->

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

<!-- Please pay attention to z-index: -1, it is required -->

```

+ Multilingualism was solved by using two different url /eng, /ru. 
That is, when the toggle to change language is pressed, the user goes to another directory

+ Transferring of text was solved with br, but the point is that br doesn't adapt. I had to adapt via JS =)

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

**Other repositories related to this project**

The first version dproxy v1.0 github
https://github.com/AlexSvistunov/dproxy

The first version (live)
https://alexsvistunov.github.io/dproxy/


<hr>

### Author: Alex Svistunov


