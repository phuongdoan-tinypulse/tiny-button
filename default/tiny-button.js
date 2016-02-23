// require jquery

window.tinyButton = function (elem) {
  return {
    template: function (text) {
      return `
<button>
  <span class="spinner">
    <i class="fa fa-spinner"></i>
  </span>
  ${text}
</button>
      `;
    },

    spin: function () {
      elem.setAttribute('spin', '');
      return this;
    },

    unspin: function () {
      elem.removeAttribute('spin');
      return this;
    },

    isSpinning: function () {
      return elem.hasAttribute('spin');
    },

    disable: function () {
      elem.setAttribute('disabled', '');
      return this;
    },

    enable: function () {
      elem.removeAttribute('disabled');
      return this;
    },

    isDisabled: function () {
      return elem.hasAttribute('disabled');
    }
  }
};
