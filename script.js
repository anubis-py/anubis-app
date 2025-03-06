'use strict';

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
    for (let i = 0, len = elements.length; i < len; i++){
        elements[i].addEventListener(eventType, callback, );
    }
}

/**
 * navbar toggle for mobile
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav-active");
}


addEventOnElements(navTogglers, "click", toggleNavbar); 

/**
 * header active header window down to 100px
 */
const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    if ( window.scrollY > 100){
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});


/**
 * slider
 */

const sliders = document.querySelectorAll("[data-slider]");
const initSlider = function (currentSlider) {
 const sliderContainer = currentSlider.querySelector("[data-slider-container]");
 const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
 const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

 let currentSlidePos = 0;

 const moveSliderItem = function (){
    sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].

    offsetLeft}px)`;
 }

/**
 * next slide
 */
 const sildeNext = function () {
    const slideEnd = currentSlidePos > sliderContainer.childElementCount - 1;
    if (slideEnd) {
        currentSlidePos = 0;
    } else {
        currentSlidePos++;
    }

    moveSliderItem();
 }

 sliderNextBtn.addEventListener("click", sildeNext);

 /**
 * next slide
 */
 const sildePrev = function () {
    
    if (currentSlidePos < 0) {
        currentSlidePos = sliderContainer.childElementCount - 1;
        
    } else {
        currentSlidePos--;
    }

    moveSliderItem();
 }

 sliderPrevBtn.addEventListener("click", sildePrev);

 const dontHaveExtrItem = sliderContainer.childElementCount < 0;
 if (dontHaveExtrItem) {
    sliderNextBtn.style.display = "none";
    sliderPrevBtn.style.display = "none";
 }
}
for (let i = 0, len = sliders.length; i < len; i++) {initSlider(sliders[i]);}

/**
 * accordion
 */

const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion) {

    const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]"); 
    const expandAccordion = function () {
        if (lastActiveAccordion && lastActiveAccordion === currentAccordion){
            lastActiveAccordion.classList.remove("expanded");
        }

        currentAccordion.classList.toggle("expanded");
        lastActiveAccordion = currentAccordion;
    }

    accordionBtn.addEventListener("click", expandAccordion);

}

for(let i = 0, len = accordions.length; i < len; i++) { initAccordion(accordions[i]);}











