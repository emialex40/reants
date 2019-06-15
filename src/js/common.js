jQuery(document).ready(function($) {

    $('.modal__form').submit(function () {

        var titleForm = $(this).siblings('h4').text(),
            titleBottom = $(this).siblings('p').text(),
            hideText = titleForm + ' ' + titleBottom;

        $('.hidden_js').val(hideText);
        var formData = $(this).serialize();

        $.ajax({
            url: 'send.php',
            type: 'POST',
            data: formData,
            success: function () {
                alert('Ваше сообщение отправлено!');
                setTimeout(function () {
                   location.reload();
                }, 500);
            },
            error: function () {
                alert('Ошибка отправки данных!');
            }
        })
    });

    $('.js-over').click(function(event) {
        event.preventDefault();
        $(this).addClass('overlay');
        $('.js-over').not(this).removeClass('overlay');
        var alt = $(this).children().children().attr('alt');
        $('.cart__img-choose span').text(alt);
    });

    // humburger
    var line = $('.humb__line');

    var navMob = $('.mobile-menu');

    function closeNav() {
        navMob.animate({
                right: -594
            },
            600
        );
        line.removeClass('animate');
    }

    //mobile menu
    var closeMob = $('.mobile-menu__close');

    closeMob.click(function() {
        closeNav();
    });

    $('.humb').on('click', function() {
        line.toggleClass('animate');
        if (line.hasClass('animate')) {
            navMob.animate({
                    right: 0
                },
                600
            );
        } else {
            closeNav();
        }
    });

    //additionary slider
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        center: false,
        margin: 10,
        URLhashListener: true,
        autoplayHoverPause: false,
        startPosition: 'URLHash'
    });

    //fancybox additionary
    $().fancybox({
        selector: '.owl-item:not(.cloned) a',
        loop: true,
        hash: false
    });

    // carts and callback modal
    var callback1 = $('.js-callback1'),
        callback2 = $('.js-callback2'),
        callback3 = $('.js-callback3'),
        callback4 = $('.js-callback4'),
        callback5 = $('.js-callback5'),
        callback6 = $('.js-callback6'),
        modalCall1 = $('.js-mod1'),
        modalCall2 = $('.js-mod2'),
        modalCall3 = $('.js-mod3'),
        modalCall4 = $('.js-mod4'),
        modalCall5 = $('.js-mod5'),
        modalCall6 = $('.js-mod6'),
        cart = $('.js-cart'),
        close = $('.js-close'),
        flag = false,
        layout = $('#layout');

    //carts and callback
    function openAll(elem) {
        layout.fadeIn(300);
        elem.fadeIn(400);
        $('body').addClass('fix-padding');
    }

    function closeAll(elem) {
        $('body').removeClass('fix-padding');
        elem.fadeOut(400);
    }

    cart.on('click', function() {
        var title = $(this).siblings('.catalog__title').children().text();
        title = title.toLowerCase();
        callback2.children('.modal__body').children('.modal__form-body').children('.modal__desc strong').text(title);
        layout.fadeIn(300);
        $('[data-name="' + title + '"]').fadeIn(400);
    });

    callback1.on('click', function() {
        openAll(modalCall1);
    });

    var el;
    callback2.click(function() {
        var takeData = $(this).parent().parent().parent().parent().data('name');
        el = takeData;
        $('.op-cart').css('display', 'none');
        $('.modal__desc--change').children('strong').text(el);
        $('#callback2').fadeIn(400);
    });

    callback3.click(function() {
        openAll(modalCall3);
    });

    callback4.click(function() {
        openAll(modalCall4);
    });

    callback5.click(function() {
        openAll(modalCall5);
    });

    callback6.click(function() {
        var name = $(this).data('id');
        $('.modal__desc--change').children('strong').text(name);
        openAll(modalCall6);
    });

    $('.js-close2').click(function() {
        $(this).parent().fadeOut();
        $('[data-name="' + el + '"]').fadeIn(400);
    });

    //TODO: close
    close.on('click', function() {
        closeAll(modalCall1);
        closeAll(modalCall2);
        closeAll(modalCall3);
        closeAll(modalCall4);
        closeAll(modalCall5);
        closeAll(modalCall6);
        $('.op-cart').fadeOut(400);
        layout.fadeOut(300);
        $('.js-cart-hide').slideUp(600);
        $('.cart__radio-btn--checked').prop('checked', true);
    });

    layout.on('click', function() {
        closeAll(modalCall1);
        closeAll(modalCall2);
        closeAll(modalCall3);
        closeAll(modalCall4);
        closeAll(modalCall5);
        closeAll(modalCall6);
        $('.op-cart').fadeOut(300);
        layout.fadeOut(300);
    });

    var tabs = $('.cart__img-bottom-item');

    tabs.click(function() {
        var alt = $(this).children().attr('alt');
        $('.img-tabs').removeClass('active-tab');
        $('[data-img="' + alt + '"]').addClass('active-tab');
    });

    //carts fansybox

    $('.fansy').click(function(event) {
        event.preventDefault();
        var data = $(this).closest('.op-cart').data('name');
        var img = $(this).attr('href');
        console.log(img);
        $.fancybox.open({
            src: '' + img + '',
            closeExisting: false,
            afterShow: function() {
                $('.op-cart').fadeOut(300);
                layout.fadeOut(200);
            },
            afterClose: function() {
                $('[data-name="' + data + '"]').fadeIn(400);
                layout.fadeIn(300);
            }
        });
    });

    $('.js-feat').click(function() {
        el = $(this).parent().parent().parent().parent().parent().data('name');
        console.info(el);
    });

    $('.js-feat').fancybox({
        afterShow: function() {
            $('[data-name="' + el + '"]').fadeOut(300);
            layout.fadeOut(200);
        },
        afterClose: function() {
            $('[data-name="' + el + '"]').fadeIn(300);
            layout.fadeIn(200);
            flag = false;
        }
    });

    //TODO: radio
    // carts radio buttons
    var addit = $('.js-cart-hide'),
        input = $('.cart__radio-btn');
    input.on('change', function() {
        var value = $(this).val();
        var name = $(this).closest('.op-cart').data('name');
        if ($(this).closest('.op-cart').data('name') === name) {
            if (value == 0) {
                addit.slideUp(600);
                return false;
            }
            if (value == 1) {
                addit.slideDown(600);
                return false;
            }
        }
    });

    // additionary radio buttons
    var radio = $('input[name="radio"]');

    radio.change(function() {
        var value = $(this).val();
        if (value == 600) {
            $(this).parent().siblings('.addit__price').children('.green').html('');
            $(this).parent().siblings('.addit__price').children('.green').append('600<b class="rub">п</b>');
        }
        if (value == 500) {
            $(this).parent().siblings('.addit__price').children('.green').html('');
            $(this).parent().siblings('.addit__price').children('.green').append('500<b class="rub">п</b>');
        }
    });

    // section actions enents
    var act = $('.js-fade');

    act.click(function() {
        if (!$(this).hasClass('active')) {
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

    var action = $('.js-slide');

    action.click(function() {
        action.click(function() {});
        if (!$(this).hasClass('active')) {
            $(this).addClass('active');
            // class cross manipulate
            $('.cross__verl').removeClass('rotate');
            $(this).children('.cross').children('.cross__verl').addClass('rotate');
            // class action__title hide
            $(this).siblings('.actions__text-mob').slideDown(600);
            // class tip action
            action.not(this).parent().children('.actions__text-mob').slideUp(600);

            $(this).siblings('.js-slide').removeClass('active');
            $(this).siblings('.js-slide').children('.cross').children('.cross__verl').removeAttr('style');
        } else {
            action.parent().children('.actions__text-mob').slideUp(600);
            action.removeClass('active');
            action.children('.cross').children('.cross__verl').removeClass('rotate');
            action.children('.cross').children('.cross__verl').removeAttr('style');
        }
    });

    $('.slider').slick({
        centerMode: true,
        centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 6000,
        arrows: true,
        prevArrow: '<button class="prev"><i></i></button>',
        nextArrow: '<button class="next"><i></i></button>',
        appendArrows: $('.reviews__buttons'),
        dots: true,
        slidesToShow: 3,
        cssEase: 'linear',
        customPaging: function(slider, i) {
            return '<a class="dots-item"></a>';
        },
        responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: false,
                    centerPadding: '0',
                    slidesToShow: 1,
                    dots: false
                }
            }
        ]
    });

    $('.cart-slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        arrows: true,
        prevArrow: '<button class="cart-prev"><i></i></button>',
        nextArrow: '<button class="cart-next"><i></i></button>',
        dots: false,
        slidesToShow: 1
    });

    $('.slick-dots').appendTo('.reviews__buttons');

    // anchor code
    var $page = $('html, body');
    $('*[data-href^="#"]').click(function(e) {
        e.preventDefault();
        $page.animate({
                scrollTop: $($.attr(this, 'data-href')).offset().top
            },
            1000
        );
        return false;
    });
});