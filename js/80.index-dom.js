import hamburgerMenu from "./dom/81.menu_hamburgeza.js";
import relojDigital, { sonidoAlarma } from "./dom/82.reloj_digital.js";
import eventosTeclado, { shortcut } from "./dom/83.eventos_teclado.js";
import countdown from "./dom/85.countdown.js";
import scrollTop from "./dom/86.boton_scroll.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {

    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    relojDigital(".reloj", ".btn-iniciar", ".btn-detener");
    sonidoAlarma(".btn-inAlarma", ".btn-denAlarma");
    eventosTeclado(".area", ".pointer");
    shortcut();
    countdown(".countdown",
        "August 27, 2026 21:58:40",
        "Feliz Cumpleaños 🎉🎊"
    );
    scrollTop(".btn-scroll");
})
