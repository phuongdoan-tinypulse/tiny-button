skate('need-tooltip', {
  type: skateTypes.attribute,
  created: function (elem) {
    var content = elem.textContent;
    elem.tooltip = $('<span class="tooltip">' + $(elem).data('tooltip') + '</span>');
    elem.tooltip.appendTo(elem);
  },
  events: {
    mouseenter: function (e) {
      $(this.tooltip).stop(true,true).fadeIn(200);
    },
    mouseleave: function (e) {
      $(this.tooltip).stop(true,true).fadeOut(200);
    }
  }
});
