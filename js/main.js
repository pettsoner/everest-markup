$(document).ready(function() {

    $('.b-services-menu__link').click(function(e) {
        $subMenu = $(this).parent().find('ul');

        if ($subMenu.length) {

            if ($subMenu.is(':visible')) {
                $subMenu.slideUp(300);
            } else {
                $subMenu.slideDown(300);
            }

            e.preventDefault();

        }

    });

    $('.b-slider__items').bxSlider({
        /*speed: 500,
        auto: true*/
        pager: true,
        controls: false
    });

});