## Module-slider

![](https://github.com/PesukarhuTG/module-slider01/blob/master/img/preview.JPG)
A simlpe slider looks like carusel with current and total numbers of slides<br>
[Preview html page ►](https://pesukarhutg.github.io/module-slider01/)

### Usage
In **script.js** you should set:

    import slider01 from './modules/slider01';

    window.addEventListener('DOMContentLoaded', () => {

        slider01({
            slide: '.offer__slide',   //wrap-container for slide
            nextArrow: '.offer__slider-next',   // selector of arrow "next"
            prevArrow: '.offer__slider-prev',   selector of arrow "preview"
            currentCounter: '#current',   //selector of current counter
            totalCounter: '#total'   //selector of total counter
        });
    });

### Install
    npm install
    npm install webpack webpack-cli --save-dev
    npx webpack
