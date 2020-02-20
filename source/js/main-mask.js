/*eslint-disable*/

'use strict';

(function () {
  var maskedInputs = document.querySelectorAll('input[data-mask]');

  var setMask = function (input) {
    Array.prototype.forEach.call(maskedInputs, function (input) {
      var maskOption = {
        mask: input.getAttribute('data-mask')
      };
      IMask(input, maskOption);
    });
  }

  setMask();
})();
