jQuery(document).ready(function () {
    jQuery('#header-search').click(function () {
        jQuery('#search').fadeIn(600);
    });
    jQuery('#search-btn, #search-close').click(function () {
        jQuery('#search').fadeOut(600);
    });
});