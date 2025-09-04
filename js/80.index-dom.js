import hamburgerMenu from "./dom/81.menu_hamburgeza.js";
import relojDigital, { sonidoAlarma } from "./dom/82.reloj_digital.js";
import eventosTeclado, { shortcut } from "./dom/84.eventos_teclado.js";
import countdown from "./dom/86.countdown.js";
import scrollTop from "./dom/87.boton_scroll.js";
import teamDarkLight from "./dom/88.tema_dark_light.js";
import objetoJs from "./dom/90.objeto_javascript.js";
import responsiveTester from "./dom/91.responsive_tester.js";

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
    teamDarkLight(".btn-theme-dark", "dark-mode");
    objetoJs("#youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc" target="_blank" rel="noopener">Video Ver más</a>`,
        `<iframe width="300" height="200" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=dWAcFzL1IaRJXLBH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);
    objetoJs("#gmaps",
        "(min-width: 1024px)",
        `<a href="https://maps.app.goo.gl/XMh5iDcsiU4aNdwY7" target="_blank" rel="noopener">Mapa Ver más</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!4v1756945944859!6m8!1m7!1sLcck6XAiGvGGrb-IyKi61Q!2m2!1d5.514955259775761!2d-73.36307041438793!3f84.23727367687393!4f0!5f0.7820865974627469" width="300" height="200" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    responsiveTester("responsive-tester");
})
