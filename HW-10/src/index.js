import './theme';
import menu from './menu.json';
import menuItemTemplate from './template.hbs';
import './styles.css';

const menuList = document.querySelector('#menu');
function buildMenuList(menu) {
    const markup = menu.map(menuItem => menuItemTemplate(menuItem)).join('');
    return markup;
}
const markup = buildMenuList(menu);
menuList.insertAdjacentHTML('afterbegin', markup);