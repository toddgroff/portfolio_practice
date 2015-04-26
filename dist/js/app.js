// The namespace for this application
var app = {};

app.showInitialPage = function () {
  document.body.insertAdjacentHTML(
    'beforeend',
    '<h2>TODO: Remove example.js</h2>' +
    '<p>And change init.js to do whatevz you need</p>');
};

app.smoothScroll = function (jQuery) {
  jQuery.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') {
        defaults.selector = options;
      }

      options = jQuery.extend(defaults, options);
      return jQuery(options.selector).click(function (e) {
        var jumpobj = jQuery(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = jQuery(target).offset().top;
        jQuery('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };
}(jQuery);


jQuery(function(){
  jQuery.mark.jump();
});

app.smoothScroll();

//# sourceMappingURL=app.js.map