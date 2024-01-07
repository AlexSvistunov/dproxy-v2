let elementsToFix1 = document.querySelectorAll('.guide-content__field-json, .guide-content__header');

elementsToFix1.forEach(function (element) {
    element.innerHTML = element.innerHTML.replace(/«/g, '"').replace(/»/g, '"');
});
