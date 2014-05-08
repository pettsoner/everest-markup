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

});