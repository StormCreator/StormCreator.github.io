/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/modules/animation.js":
/*!*************************************!*\
  !*** ./src/js/modules/animation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function animation(){
    const titles = document.querySelectorAll('.title'),
            subtitles = document.querySelectorAll('.subtitle'),
            services = document.querySelectorAll('.service');


           

    titles.forEach(item => {
        item.classList.add('wow');
        setTimeout(() => {
            item.classList.add('animate__animated', 'animate__fadeInUp');
            item.style.setProperty('--animate-duration', '1.2s');
        }, 0.5);
        

    });
    subtitles.forEach(item => {
        item.classList.add('wow', 'animate__animated', 'animate__fadeInUp');
        item.style.setProperty('--animate-delay', '.5s');
        item.style.setProperty('--animate-duration', '1.2s');
    });
    {
        let duration = 1.2;
        services.forEach(service => {
            service.classList.add('wow', 'animate__animated', 'animate__fadeInUp');
            service.style.setProperty('--animate-duration', `${duration}s`);
            duration += 0.3;
        });
    }
  
}

/* harmony default export */ __webpack_exports__["default"] = (animation);

/***/ }),

/***/ "./src/js/modules/coaches.js":
/*!***********************************!*\
  !*** ./src/js/modules/coaches.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function coaches(){
    const coachesNumber = document.querySelectorAll('.coach__number');
    coachesNumber.forEach((coach, i) => {
        coach.innerHTML = `0${i+1}`;
    });
}

/* harmony default export */ __webpack_exports__["default"] = (coaches);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function hamburger(){
    const hamburgerBtn = document.querySelector('.hamburger-btn__burger'),
            menu = document.querySelector('.header__navigation'),
            headerLinks = document.querySelectorAll('.header__link');
    let isOpen = false;

    hamburgerBtn.addEventListener('click', () => {
        if(!isOpen){
            hamburgerBtn.classList.add('open');
            menu.classList.add('mobile-menu');
            isOpen = true;
        }
        else{
            hamburgerBtn.classList.remove('open');
            menu.classList.remove('mobile-menu');
            isOpen = false;
        }
    });

    headerLinks.forEach(link => {
        link.addEventListener('click', () => {
            if(isOpen){
                hamburgerBtn.classList.remove('open');
                menu.classList.remove('mobile-menu');
                isOpen = false;
            }
        });
    });
}

/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/modules/scrolling.js":
/*!*************************************!*\
  !*** ./src/js/modules/scrolling.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function scrolling(){
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()
            
            const blockID = anchor.getAttribute('href').substr(1)
            
            document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
            })
        })
    }

    // $(window).scroll(function(){
    //     if($(this).scrollTop() > 1600){
    //         $('.pageup').fadeIn();
    //     }else
    //         $('.pageup').fadeOut();
    // });
}

/* harmony default export */ __webpack_exports__["default"] = (scrolling);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function slider(){


    $(".slider").on("init", function(event, slick){
        $(".slick-count").text(`${parseInt(slick.currentSlide + 1)} of ${slick.slideCount/2}`);
    });

    $(".slider").on("afterChange", function(event, slick, currentSlide){
        if(currentSlide == 2){
            $(".slick-count").text(`${parseInt(slick.currentSlide)} of ${slick.slideCount/2}`);
        }else{
            $(".slick-count").text(`${parseInt((slick.currentSlide/2) + 1)} of ${slick.slideCount/2}`);
        }
    });


    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerMode: true,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true,
                    dots: true,
                    dotsClass: "mydots",
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    centerMode: true,
                    dots: true,
                    dotsClass: "mydots",
                }
            }
        ]
    });

    $('.slick-next').on('click', function() {
        $('.slider').slick('slickNext');
    });
    $('.slick-prev').on('click', function() {
        $('.slider').slick('slickPrev');
    });
}

/* harmony default export */ __webpack_exports__["default"] = (slider);

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/hamburger */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/animation */ "./src/js/modules/animation.js");
/* harmony import */ var _modules_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrolling */ "./src/js/modules/scrolling.js");
/* harmony import */ var _modules_coaches__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/coaches */ "./src/js/modules/coaches.js");






$(document).ready(function () {

    Object(_modules_hamburger__WEBPACK_IMPORTED_MODULE_0__["default"])();
    Object(_modules_coaches__WEBPACK_IMPORTED_MODULE_4__["default"])();
    Object(_modules_slider__WEBPACK_IMPORTED_MODULE_1__["default"])();
    new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 100
    }).init();
    Object(_modules_animation__WEBPACK_IMPORTED_MODULE_2__["default"])();
    Object(_modules_scrolling__WEBPACK_IMPORTED_MODULE_3__["default"])();
});





/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map