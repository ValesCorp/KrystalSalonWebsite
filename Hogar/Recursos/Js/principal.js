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
    
    $(".ui.accordion")
        .accordion()
    ;
    
    $("#a_servicios").click(function(e) {
        e.preventDefault(); // Evita acciones predeterminadas
        // Recorrido suave hasta el elemento con id historia
        $("html, body").animate({
            scrollTop: $("#servicios_sección").offset().top
        }, 2000);
    });
    
    $("#a_presentación").click(function(e) {
        e.preventDefault(); // Evita acciones predeterminadas
        // Recorrido suave hasta el elemento con id historia
        $("html, body").animate({
            scrollTop: $("#presentación").offset().top
        }, 2000);
    });
});
