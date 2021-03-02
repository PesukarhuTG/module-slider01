import slider01 from './modules/slider01';

window.addEventListener('DOMContentLoaded', () => {

    slider01({
        slide: '.offer__slide',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        currentCounter: '#current',
        totalCounter: '#total'
    });
});