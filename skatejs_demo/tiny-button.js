skate('tiny-button', {
  created: function (elem) {
    var content = elem.textContent;
    elem.innerHTML = `
      <button>${content}</button>
    `;
    console.log('render');
  },
  events: {
    click: function (e) {
    }
  },
  properties: {
    disabled: skate.properties.boolean({
      attribute: true,
      initial: function () {
        console.log('init');
      },
      set (elem, data) {
        elem.querySelector('button').disabled = data.newValue;
        console.log("disabled");
      }
    }),
  }
});
