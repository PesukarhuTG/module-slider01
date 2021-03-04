## Module-slider

![](https://github.com/PesukarhuTG/module-slider01/blob/master/img/preview.JPG)
A simlpe slider looks like carusel with current and total numbers of slides<br>
[Preview html page ►](https://pesukarhutg.github.io/module-slider01/)

### Usage

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

In script.js you should set:
- "slide" - wrap-container for slide;
- "nextArrow" - selector of arrow "next";
- "prevArrow" - selector of arrow "preview";
- "currentCounter" - selector of current counter;
- "totalCounter" - selector of total counter

### Install
    npm install
