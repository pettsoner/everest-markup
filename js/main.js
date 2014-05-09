$(document).ready(function() {

    $('.b-services-menu__link').click(function(e) {
        $menuItem = $(this).parent();
        $subMenu  = $menuItem.find('ul');

        if ($subMenu.length) {

            if ($subMenu.is(':visible')) {
                $subMenu.slideUp(300);
                $menuItem.removeClass('b-services-menu__item--active');
            } else {
                $subMenu.slideDown(300);
                $menuItem.addClass('b-services-menu__item--active');
            }

            e.preventDefault();

        }

    });

    $('.b-slider__items').bxSlider({
        controls: false
    });

    $('.b-gallery__items').bxSlider({
        controls: true,
        pager: false,
        maxSlides: 4,
        slideWidth: 168,
        slideMargin: 2,
        infiniteLoop: false,
        hideControlOnEnd: true
    });

    if ($('.b-clock').length) {
        
        setInterval(function() {
            var seconds = new Date().getSeconds();
            var sdegree = seconds * 6;
            var srotate = "rotate(" + sdegree + "deg)";

            $('.b-clock__sec').css({"-moz-transform" : srotate, "-webkit-transform" : srotate});

        }, 1000);

        setInterval(function() {
            var hours = new Date().getHours();
            var mins = new Date().getMinutes();
            var hdegree = hours * 30 + (mins / 2);
            var hrotate = "rotate(" + hdegree + "deg)";

            $('.b-clock__hour').css({"-moz-transform" : hrotate, "-webkit-transform" : hrotate});
                  
        }, 1000);

        setInterval(function() {
            var mins = new Date().getMinutes();
            var mdegree = mins * 6;
            var mrotate = "rotate(" + mdegree + "deg)";

            $('.b-clock__min').css({"-moz-transform" : mrotate, "-webkit-transform" : mrotate});

        }, 1000);

    }

    bTourDateHeight = $('.b-tour__date').height() + 20;

    $('<div></div>').addClass('b-tour__date__arrow').css({ 
        border: (bTourDateHeight * 0.5) + 'px solid transparent',
        borderLeft: '20px solid #fff',
        left: 0
    }).appendTo($('.b-tour__date'));

    $('<div></div>').addClass('b-tour__date__arrow').css({ 
        border: (bTourDateHeight * 0.5) + 'px solid transparent',
        borderRight: '20px solid #fff',
        right: 0
    }).appendTo($('.b-tour__date'));

});