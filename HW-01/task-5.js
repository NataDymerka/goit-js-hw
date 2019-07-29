let country = prompt('Введите страну доставки');
let deliveryPrice;
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
            deliveryPrice = chinaDeliveryPrice;
            alert(`Доставка в ${china} будет стоить ${deliveryPrice} кредитов`);
            break;
        case chile.toLowerCase():
            deliveryPrice = chileDeliveryPrice;
            alert(`Доставка в ${chile} будет стоить ${deliveryPrice} кредитов`)
            break;
        case australia.toLowerCase():
            deliveryPrice = australiaDeliveryPrice;
            alert(`Доставка в ${australia} будет стоить ${deliveryPrice} кредитов`)
            break;
        case india.toLowerCase():
            deliveryPrice = indiaDeliveryPrice;
            alert(`Доставка в ${india} будет стоить ${deliveryPrice} кредитов`)
            break;
        case jamaica.toLowerCase():
            deliveryPrice = jamaicaDeliveryPrice;
            alert(`Доставка в ${jamaica} будет стоить ${deliveryPrice} кредитов`)
            break;
        default:
            alert('В вашей стране доставка не доступна');
    }
} else {
    alert('Отменено пользователем!');
}