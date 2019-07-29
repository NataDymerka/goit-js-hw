const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
let userPassword = prompt('Введите ваш пароль', 'password');
if (userPassword === '' || userPassword === null) {
    message === 'Отменено пользователем!'
    alert(message);
} else if (userPassword === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!'
    alert(message);
} else {
    message = 'Доступ запрещен, неверный пароль!';
    alert(message);
}
