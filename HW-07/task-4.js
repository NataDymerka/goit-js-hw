// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение
//  счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика.
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
//     < div id = "counter" >
//         <button type="button" data-action="decrement">-1</button>
//         <span id="value">0</span>
//         <button type="button" data-action="increment">+1</button>
// </div >

let counterValue = 0;

const increment = () => valueRefresh(counterValue += 1);
const decrement = () => valueRefresh(counterValue -= 1);

const valueRefresh = value =>
    document.querySelector('#value').textContent = `${value}`;

const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);