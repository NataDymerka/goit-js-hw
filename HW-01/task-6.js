let total = 0;
let input;
while (input !== null) {
    input = prompt('Введите число', '');
    if (isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        total = total + Number(input);
    }
}
alert(`Общая сумма чисел равна ${total}`);
