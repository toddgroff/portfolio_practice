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
