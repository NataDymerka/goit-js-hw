const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

const themeControl = document.querySelector('#theme-switch-control');
const body = document.querySelector('body');

themeControl.addEventListener('change', handlerControl);
document.addEventListener('DOMContentLoaded', loadedHandler);

function loadedHandler() {
    const themeStyle = localStorage.getItem('theme');
    if (themeStyle == 'dark-theme') {
        body.classList.add(Theme.DARK);
        themeControl.checked = true;
    } else {
        body.classList.add(Theme.LIGHT);
    }
};

function handlerControl() {
    body.classList.toggle(Theme.DARK);
    body.classList.toggle(Theme.LIGHT);
    if (body.classList.contains(Theme.LIGHT)) {
        localStorage.setItem('theme', 'light-theme');
    } else {
        localStorage.setItem('theme', 'dark-theme');
    }
}