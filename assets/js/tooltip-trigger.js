document.addEventListener("DOMContentLoaded", () =>{
    const boton_borrar = document.getElementById('button-addon2 borrar');

    if ('ontouchstart' in window || navigator.maxTouchPoints) {
        // Si es un dispositivo táctil deshabilita el tooltip
        boton_borrar.removeAttribute("data-bs-toggle");
        boton_borrar.removeAttribute("data-bs-placement");
        boton_borrar.removeAttribute("data-bs-html");
        boton_borrar.removeAttribute("data-bs-title");
    }
    else {
        // Si no es un dispositivo táctil, inicializa el tootltip normalmente
        new bootstrap.Tooltip(boton_borrar);
    }
});