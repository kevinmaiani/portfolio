// function mouselog(event) {
//     if(screen.width >600)
//         document.querySelector('#content').classList.toggle('remove-visible');
//   }

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      // $('.venobox').venobox();

      particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
    });

    var scroll_start = 0;
   var startchange = $('.hero-container');
   var offset = startchange.offset();
    if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > 150) {
          $(".navbarMain").css({
            'background-color'  : 'rgba(0,0,0,0.9)',
            'transition' : '500ms ease'
         }); 
       } else {
          $('.navbarMain').css('background-color', 'transparent');
       }
   });
    }
  });
