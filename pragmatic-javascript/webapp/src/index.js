
import { Customer } from './customer.js';
import './default.css';
import kitten from './superschattige-kitten.jpg';

let jp = new Customer();
document.querySelector('#btn-klik-hier').addEventListener('click', () => {
    console.log('halloooo');

    jp.buy();
});

let kittenEl = document.createElement('img');
kittenEl.setAttribute('src', kitten);
document.body.appendChild(kittenEl);