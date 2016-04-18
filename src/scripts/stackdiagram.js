(function(){

  let isTriggered = false;
  let el = $('.stack-diagram');
  let topEl = $('.stack-diagram__top');
  let midEl = $('.stack-diagram__middle');
  let btmEl = $('.stack-diagram__bottom');

  let topElPos = -34;
  let btmElPos = 63;
  let menuIsTriggered = false;

  $(window).on('scroll', function(e) {
    if((window.scrollY||window.pageYOffset) >= $('.container--dark-background').height()-100 && !menuIsTriggered) {
      menuIsTriggered = true;
      $('.container__menu').addClass('container__menu--fixed')
      $('container__menu--bg').addClass('animate');
    } else if((window.scrollY||window.pageYOffset) < $('.container--dark-background').height()-100 && menuIsTriggered) {
      menuIsTriggered = false;
      $('.container__menu').removeClass('container__menu--fixed');
      $('container__menu--bg').removeClass('animate');
    }

    if(el.length && ((window.scrollY||window.pageYOffset)+window.outerHeight >= el.offset().top+450 && !isTriggered)) {
      isTriggered = true;

      topEl.addClass('animate');
      btmEl.addClass('animate');

      setTimeout(function() {
        $('.stack-diagram__top-info').removeClass('hide');

        setTimeout(function() {
          $('.stack-diagram__middle-info').removeClass('hide');

          setTimeout(function() {
            $('.stack-diagram__bottom-info').removeClass('hide');
          }, 500)

        }, 500)
      }, 750)
    }
  });

})();
