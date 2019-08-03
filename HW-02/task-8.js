const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
const minLoginLength = 4;
const maxLoginLength = 16;

const isLoginValid = function (login) {
    return login.length >= minLoginLength && login.length <= maxLoginLength;
};

const isLoginUnique = function (logins, login) {
    return !logins.includes(login);
};

const addLogin = function (allLogins, login) {
    if (isLoginValid(login)) {
        if (isLoginUnique(allLogins, login)) {
            allLogins.push(login);
            return console.log('Логин успешно добавлен');
        } else {
            return console.log('Такой логин уже используется!');
        }
    } else {
        return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    }
}
addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'