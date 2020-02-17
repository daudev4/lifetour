'use strict';

(function () {

  var Slider = function (mainElement) {
    var self = this;
    this.body = mainElement.querySelector('.slider__body');
    this.list = this.body.querySelector('.slider__list');
    this.listWidth = parseFloat(this.list.scrollWidth);
    this.items = this.list.querySelectorAll('.slider__item');
    this.itemWidth = parseFloat(this.items[1].offsetWidth);
    this.controls = mainElement.querySelector('.slider__controls');
    this.controls.classList.remove('.slider__controls_hidden');
    this.controlLeft = this.controls.querySelector('.slider__control_left');
    this.controlRight = this.controls.querySelector('.slider__control_right');
    this.controlRight.onclick = function () {
      self.slideScroll(self.list, self.controlRight, self.itemWidth);
    };
    this.controlLeft.onclick = function () {
      self.slideScroll(self.list, self.controlLeft, self.itemWidth);
    };
  };

  Slider.prototype.slideScroll = function (element, control, step) {
    element.scrollLeft += control === this.controlLeft ? -step : +step;
  };

  var sliderElements = document.querySelectorAll('.slider');
  var sliders = [];
  Array.prototype.forEach.call(sliderElements, function (element) {
    sliders.push(new Slider(element));
  });
})();
