// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input(событие
//  input), подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// < input type = "text" placeholder = "Ваше имя?" id = "name-input" />
//     <h1>Привет, <span id="name-output">незнакомец</span>!</h1>

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', handleInputChange);

function handleInputChange(event) {
    nameOutput.textContent = event.currentTarget.value;
    if (event.currentTarget.value == '') {
        nameOutput.textContent = 'незнакомец';
    }

}