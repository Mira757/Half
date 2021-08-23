$( document ).ready(function() {
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
  
});