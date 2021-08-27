$( document ).ready(function() {

  //Filtro animado
  $('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');
  
    $('.main-btn-preto').removeClass('active');
    $(this).addClass('active');
  
    if(type == 'camisetas-btn') {
      eachBoxes('camisetas', boxes);
    } else if(type == 'moletons-btn') {
      eachBoxes('moletons', boxes);
    } else if(type == 'bones-btn') {
      eachBoxes('bones', boxes);
    } else {
      eachBoxes('all', boxes);
    }
  
  });
  
    function eachBoxes(type, boxes) {
  
    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
    }

    //Debouce = verificar onde o scroll está para ativar a animação
    debounce = function(func, wait, immediate) {
      var timeout;
      return function() {
          var context = this, args = arguments;
          var later = function() {
              timeout = null;
              if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
      };
  };
  
  
  (function(){
      var $target = $('.animeleft'),
              animationClass = 'anime1',
              offset = $(window).height() * 17/16;
  
      function animeScrollleft() {
          var documentTop = $(document).scrollTop();
  
          $target.each(function(){
              var itemTop = $(this).offset().top;
              if (documentTop > itemTop - offset) {
                  $(this).addClass(animationClass);
              } else {
                  $(this).removeClass(animationClass);
              }
          });
      }
  
      animeScrollleft();
  
      $(document).scroll(debounce(function(){
          animeScrollleft();
      }, 0));
  })();

  (function(){
    var $target = $('.animemiddle'),
            animationClass = 'anime2',
            offset = $(window).height() * 17/16;

    function animeScrollleft() {
        var documentTop = $(document).scrollTop();

        $target.each(function(){
            var itemTop = $(this).offset().top;
            if (documentTop > itemTop - offset) {
                $(this).addClass(animationClass);
            } else {
                $(this).removeClass(animationClass);
            }
        });
    }

    animeScrollleft();

    $(document).scroll(debounce(function(){
        animeScrollleft();
    }, 0));
})();

(function(){
  var $target = $('.animeright'),
          animationClass = 'anime3',
          offset = $(window).height() * 17/16;

  function animeScrollleft() {
      var documentTop = $(document).scrollTop();

      $target.each(function(){
          var itemTop = $(this).offset().top;
          if (documentTop > itemTop - offset) {
              $(this).addClass(animationClass);
          } else {
              $(this).removeClass(animationClass);
          }
      });
  }

  animeScrollleft();

  $(document).scroll(debounce(function(){
      animeScrollleft();
  }, 0));
})();
  
});