'use strict';

(function () {

  var WINDOW_WIDTH_TABLET = 768;

  var slideScroll = function (element, direction, step) {
    if (window.innerWidth >= WINDOW_WIDTH_TABLET && element.classList.contains('training__instructors-list')) {
      step *= 2;
    }
    step = (direction === 'right') ? step : -step;
    element.scrollBy({top: 0, left: step, behavior: 'smooth'});
  };

  var initSlider = function (mainElement) {
    var body = mainElement.querySelector('.slider__body');
    var list = body.querySelector('.slider__list');
    var items = list.querySelectorAll('.slider__item');
    var itemWidth = parseFloat(items[1].offsetWidth);
    var controls = mainElement.querySelector('.slider__controls');
    var controlLeft = controls.querySelector('.slider__control_left');
    var controlRight = controls.querySelector('.slider__control_right');

    var onControlRightClick = function (evt) {
      evt.preventDefault();
      slideScroll(list, 'right', itemWidth);
    };

    var onControlLeftClick = function (evt) {
      evt.preventDefault();
      slideScroll(list, 'left', itemWidth);
    };

    controls.classList.remove('slider__controls_hidden');
    controlRight.addEventListener('click', onControlRightClick);
    controlLeft.addEventListener('click', onControlLeftClick);
  };

  var sliderElements = document.querySelectorAll('.slider');

  Array.prototype.forEach.call(sliderElements, function (element) {
    initSlider(element);
  });
})();
