// menu.js – 15 de julio de 2026
//
// Vales Corp
//
// Para menú de la página, acciones de menú.

// Función para mostrar/ocultar la cortina móvil al hacer clic en el botón de menú
$(document).ready(function mostrarOcultarCortinaMovil() {
    $("#menu").click(function () {
        if ($("#cortina_movil").hasClass("desactivado")) {
            $("#cortina_movil").removeClass("desactivado");
            $("#cortina_movil").addClass("activado");
            $("#cortina_movil").slideToggle(150);
            $("#span_menu").text("close");
            $("#logo_menu").hide()
        } else if ($("#cortina_movil").hasClass("activado")) {
            $("#cortina_movil").removeClass("activado");
            $("#cortina_movil").addClass("desactivado");
            $("#cortina_movil").slideToggle(150);
            $("#span_menu").text("menu");
            $("#logo_menu").show()
        }
    });
});
