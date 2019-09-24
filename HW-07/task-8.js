// Задание 8
// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать,
//     после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.
// Каждый созданный div:
// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
// < div id = "controls" >
//     <input type="number" min="0" max="100" step="1" />
//     <button type="button" data-action="render">Создать</button>
//     <button type="button" data-action="destroy">Очистить</button>
// </div >
//     <div id="boxes"></div>
const boxes = document.querySelector('#boxes');
const create = document.querySelector('button[data-action="render"]');
const destroy = document.querySelector('button[data-action="destroy"]');
const amount = document.querySelector('#controls > input');

amount.addEventListener('input', handlerAmount);
let inputValue;
function handlerAmount(event) {
    inputValue = event.currentTarget.value;
    if (inputValue > 100) {
        inputValue = 100;
        amount.value = 100;
    }
}

create.addEventListener('click', createBoxes);
function createBoxes() {
    for (let i = 0; i < inputValue; i++) {
        const div = document.createElement('div');
        div.style.backgroundColor = 'rgb(' + divColor().join(',') + ')';
        let sizeStr = boxSizesCreator(i);
        div.style.height = sizeStr;
        div.style.width = sizeStr;
        boxes.appendChild(div);
    }
}

destroy.addEventListener('click', deleteCollection);
function deleteCollection() {
    boxes.innerHTML = null;
    amount.value = null;
}

function divColor() {
    const r = Math.floor(Math.random() * 254);
    const g = Math.floor(Math.random() * 254);
    const b = Math.floor(Math.random() * 254);
    return [r, g, b];
}

function boxSizesCreator(n) {
    const initialSize = 30;
    return (initialSize + n * 10) + 'px';
}