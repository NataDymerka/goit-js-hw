let country = prompt('Введите страну доставки');
let chinaDeliveryPrice = 100;
let chileDeliveryPrice = 250;
let australiaDeliveryPrice = 170;
let indiaDeliveryPrice = 80;
let jamaicaDeliveryPrice = 120;
const china = 'Китай';
const chile = 'Чили';
const india = 'Индия';
const australia = 'Австралия';
const jamaica = 'Ямайка';
if (country !== null) {
    switch (country.toLowerCase()) {
        case china.toLowerCase():
            alert(`Доставка в ${china} будет стоить ${chinaDeliveryPrice} кредитов`);
            break;
        case chile.toLowerCase():
            alert(`Доставка в ${chile} будет стоить ${chileDeliveryPrice} кредитов`);
            break;
        case australia.toLowerCase():
            alert(`Доставка в ${australia} будет стоить ${australiaDeliveryPrice} кредитов`);
            break;
        case india.toLowerCase():
            alert(`Доставка в ${india} будет стоить ${indiaDeliveryPrice} кредитов`);
            break;
        case jamaica.toLowerCase():
            alert(`Доставка в ${jamaica} будет стоить ${jamaicaDeliveryPrice} кредитов`);
            break;
        default:
            alert('В вашей стране доставка не доступна');
    }
} else {
    alert('Отменено пользователем!');
}