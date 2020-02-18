'use strict';

(function () {

  var WINDOW_WIDTH_TABLET = 768;

  var slideScroll = function (root, direction, step) {
    if (window.innerWidth >= WINDOW_WIDTH_TABLET && root.classList.contains('training__instructors-body')) {
      step *= 2;
    }

    step = (direction === 'right') ? step : -step;
    root.scrollBy({top: 0, left: step, behavior: 'smooth'});
  };

  var fadeItems = function (root, targets) {
    if ('IntersectionObserver' in window && root.classList.contains('slider__body_faded')) {
      var options = {
        root: root,
        rootMargin: '0px',
        threshold: [0.9]
      };

      var callback = function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio >= 0.9) {
            entry.target.classList.remove('slider__item_faded');
          } else {
            entry.target.classList.add('slider__item_faded');
          }
        });
      };

      var observer = new IntersectionObserver(callback, options);

      Array.prototype.forEach.call(targets, function (target) {
        observer.observe(target);
      });
    }
    return;
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
      slideScroll(body, 'right', itemWidth);
    };

    var onControlLeftClick = function (evt) {
      evt.preventDefault();
      slideScroll(body, 'left', itemWidth);
    };

    fadeItems(body, items);

    controls.classList.remove('slider__controls_hidden');
    controlRight.addEventListener('click', onControlRightClick);
    controlLeft.addEventListener('click', onControlLeftClick);
  };

  var sliderElements = document.querySelectorAll('.slider');

  Array.prototype.forEach.call(sliderElements, function (element) {
    initSlider(element);
  });
})();
