// Задание 7
// Напиши скрипт, который реагирует на изменение значения
// input#font - size - slider(событие input) и обновляет инлайн - стиль
// span#text обновляя его свойство font - size.
// В результате при перетаскивании ползунка будет меняться размет
// текста.

// < input id = "font-size-slider" type = "range" />
//     <br />
//     <span id="text">Абракадабра!</span>

const slider = document.querySelector('#font-size-slider');
const text = document.querySelector('span#text');
// console.log(text);
let fontSizeValue;
slider.addEventListener('input', sliderChange);

function sliderChange() {
    fontSizeValue = slider.value / 2 + 1;
    text.style.fontSize = `${fontSizeValue}px`;
    // console.log(fontSizeValue);
}