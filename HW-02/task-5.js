const maxLength = 40;
let result;
function formatString(string) {
    if (string.length < maxLength) {
        return string;
    } else {
        result = string.slice(0, maxLength);
        console.log(result.length);
        return (`${result}...`);
    }
}

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
);
