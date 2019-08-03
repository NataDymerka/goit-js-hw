let input;
const numbers = [];
let total = 0;
let number;
while (input !== null) {
    input = prompt('Введите число', '');
    if (isNaN(input) || input == '') {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        if (input !== null) {
            numbers.push(input);
        }
    }
}
if (numbers.length == 0) {
    alert('Чисел не введено');
} else {
    for (number of numbers) {
        total += Number(number);
    }
    console.log(`Общая сумма чисел: ${total}`);
}


