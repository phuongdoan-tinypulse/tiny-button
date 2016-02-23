skate('tiny-button', {
  created: function (elem) {
    $(elem).addClass('tiny-button');
    elem.innerHTML = tinyButton(elem).template(elem.textContent);
  },
  attached: function (elem) {
    if (elem.textContent.trim() === "Click me 1000") {
      console.log((new Date()) - window.startTime);
    }
  },
  events: {
    click: function (e) {
      if (this.isSpinning()) {
        this.unspin().enable();
      } else {
        this.spin().disable();
      }
    }
  },
  prototype: {
    spin: function () {
      tinyButton(this).spin();
      return this;
    },
    unspin: function () {
      tinyButton(this).unspin();
      return this;
    },
    isSpinning: function () {
      return tinyButton(this).isSpinning();
    },
    disable: function () {
      tinyButton(this).disable();
      return this;
    },
    enable: function () {
      tinyButton(this).enable();
      return this;
    },
    isDisabled: function () {
      return tinyButton(this).isDisabled();
    }
  }
});
