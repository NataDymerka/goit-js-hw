// Задание 6
// Напиши скрипт, который бы при потере фокуса на инпуте,
//     проверял его содержимое на правильное количество символов.

// < input
// type = "text"
// id = "validation-input"
// data - length="6"
// placeholder = "Введи 6 символов"
//     />
//     Сколько символов должно быть в инпуте, указывается в его атрибуте
// data - length.
// Если введено подходящее количество, то outline инпута становится
// зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid.

// #validation - input.valid {
//     outline: 3px solid #4caf50;
// }
// #validation - input.invalid {
//     outline: 3px solid #f44336;
// }
const input = document.querySelector('#validation-input');

input.addEventListener('blur', handlerFocusChange);

function handlerFocusChange(event) {
    input.classList.remove('valid', 'invalid');
    if (event.currentTarget.value.length == input.getAttribute("data-length")) {
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }
}
