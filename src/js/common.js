jQuery(document).ready(function ($) {

  $('[data-fancybox]').fancybox({
    baseClass: 'fancybox-custom-layout',
    margin: 0
  });

  // section actions enents
  var act = $('.js-fade');

  act.click(function () {
    if(!$(this).hasClass('active')) {
      $(this).addClass('active');
      // class cross manipulate
      $('.cross__verl').removeClass('rotate');
      $(this).children('.cross').children('.cross__verl').addClass('rotate');
      // class action__title hide
      $(this).children('.actions__title').fadeOut(500);
      var numb = $(this).data('numb');

      // class tip action
      $(this).siblings('.tip').fadeOut(500);
      $('[data-accord="' + numb + '"]').fadeIn(700);

      $(this).siblings('.js-fade').removeClass('active');
      $(this).siblings('.js-fade').children('.cross').children('.cross__verl').removeAttr('style');
      $(this).siblings('.js-fade').children('.actions__title').fadeIn(700);

    } else {
      act.removeClass('active');
      act.children('.cross').children('.cross__verl').removeClass('rotate');
      act.children('.cross').children('.cross__verl').removeAttr('style');
      act.siblings('.tip').fadeOut(500);
      act.children('.actions__title').fadeIn(700);
    }

  });


});
