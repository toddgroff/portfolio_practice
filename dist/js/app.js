// The namespace for this application
var app = {};

app.showInfo = function () {
  $(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
  });

  //Function to the css rule
  function checkSize() {
    console.log($('.contact-button'));
    if ($('.contact-button').css('visbility') === 'visible') {
    // if ($('.portfolio').css('width') == '100%' ) {
      $('.grid-item').attr('href', 'javascript:void(0)');
    }
  }
}


  //
  // if ($(info).is(':focus')) {
  //   $('.icon-info-1').on('click', function (e) {
  //     e.preventDefault();
  //     alert('focused');
  //     $(info).focusout();
  //     alert('blurred');
  //   }
  // } else {
  //   $('.icon-info-1').on('click', function (e) {
  //     e.preventDefault();
  //   });
  // }

// }


    // } else {
    //   $(info).focus();
    // }
  // });

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

app.showInfo();

app.smoothScroll();

//# sourceMappingURL=app.js.map