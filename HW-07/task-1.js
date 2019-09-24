// Задание 1
//     Напиши скрипт, который выполнит следующие операции.
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//     Получится 'В списке 3 категории.'.
// Для каждого элемента li.item в списке ul.list, найдет и выведет в консоль текст заголовка
// элемента(теге h2) и количество элементов в категории(всех вложенных в него элементов li).
// Например для первой категории получится:
// Категория: Животные
// Количество элементов: 4

const categories = document.querySelectorAll('.item');
console.log(categories);

const categoriesNumber = categories.length;
console.log(`В списке ${categoriesNumber} категории`);

function MyPrint(item) {
    console.log(
        `Категория: ${item.querySelector('h2').textContent}
Количество элементов: ${item.querySelectorAll('li').length}`);
};
categories.forEach(MyPrint);