'use strict'

const credits = 23580;
let pricePerDroid = 3000;
let totalPrice;
let creditsLeft;
let droidAmount = prompt('Сколько дроидов хотите купить?', '');
if (droidAmount === '' || droidAmount === null) {
    console.log('Отменено пользователем!');
} else {
    totalPrice = droidAmount * pricePerDroid;
    if (totalPrice <= credits) {
        creditsLeft = credits - totalPrice;
        console.log(`Вы купили дроидов: ${droidAmount}, на счету осталось: ${creditsLeft} кредитов`);
    } else {
        console.log('Недостаточно средств на счету!');
    }
}