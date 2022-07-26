import tabs from'./modules/tabs';
import modalMod, {openModal} from './modules/modalMod';
import timer from'./modules/timer';
import cards from'./modules/cards';
import calculator from'./modules/calculator';
import forms from'./modules/forms';
import slider from'./modules/slider';

window.addEventListener('DOMContentLoaded', () => {

    const modalTimer = setTimeout(() => openModal('.modal', modalTimer), 30000);

    tabs('.tabheader__item','.tabcontent','.tabheader__items','tabheader__item_active');
    modalMod('[data-modal]', '.modal', modalTimer);
    timer('.timer', '2020-06-11');
    cards();
    calculator();
    forms('form', modalTimer);
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        slide: '.offer__slide',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner'
    });

});