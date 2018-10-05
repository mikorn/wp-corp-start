jQuery(document).ready(function () {
    jQuery('#header-btn, #header-menu li a').click(function () {
        jQuery('#header-menu').fadeToggle(600);
    });
});