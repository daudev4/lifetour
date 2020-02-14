'use strict';

(function () {

  var Slider = function (selector) {
    this.mainElement = document.querySelector(selector);
    this.body = this.mainElement.querySelector('.slider__body');
    this.list = this.body.querySelector('.slider__list');
    this.listWidth = parseFloat(getComputedStyle(this.list).width);
    this.listDefaultPosition = 0;
    this.items = this.list.querySelectorAll('.slider__item');
    this.itemWidth = parseFloat(getComputedStyle(this.items[0]).width);
    this.controls = this.mainElement.querySelector('.slider__controls');
    this.controlLeft = this.controls.querySelector('.slider__control_left');
    this.controlRight = this.controls.querySelector('.slider__control_right');
    this.step = this.itemWidth / this.listWidth * 100;
  };

  Slider.prototype.setDefault = function () {
    this.body.classList.add('.slider__body_no-scroll');
    this.controls.classList.remove('.slider__controls_hidden');
    this.controlLeft.disabled = true;
    this.controlRight.disabled = false;
    this.list.style.transform = 'translate(' + this.listDefaultPosition + ')';
  };

})();
