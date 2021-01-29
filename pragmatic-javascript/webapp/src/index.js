
// import { Customer } from './customer.js';
import './default.css';
import kitten from './superschattige-kitten.jpg';

document.querySelector('#btn-klik-hier').addEventListener('click', () => {
    let jp = new Customer();

    console.log('halloooo');

    jp.buy();
});

let kittenEl = document.createElement('img');
kittenEl.setAttribute('src', kitten);
document.body.appendChild(kittenEl);