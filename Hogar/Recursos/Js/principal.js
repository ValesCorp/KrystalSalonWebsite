// principal.js JavaScript principal del sitio web
// Vales Corp
//
$(document).ready(function() {
    $(".ui.toggle.button").click(function() {
        $(".mobile.only.grid .ui.vertical.menu").toggle(100);
    });

    $(".ui.dropdown").dropdown();

//    $(".slide").slick({
//        autoplay: true,
//        dots: true,
//        speed: 500
//    });
    
    $('.ui.accordion')
        .accordion()
    ;
});
