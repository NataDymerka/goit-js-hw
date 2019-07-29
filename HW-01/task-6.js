let total = 0;
let input = prompt('Введите число', '');
if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
    do {
        input = prompt('Введите число', '');
        total = total + Number(input);
    } while (input !== null);
    alert(`Общая сумма чисел равна ${total}`);
}
