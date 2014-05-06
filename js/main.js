$(document).ready(function() {

    $('.b-services-menu__link').click(function(e) {
        $subMenu = $(this).parent().find('ul');

        if ($subMenu.is(':visible')) {
            $subMenu.slideUp(300);
        } else {
            $subMenu.slideDown(300);
        }

        e.preventDefault();
    });

});