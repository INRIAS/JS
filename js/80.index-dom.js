import hamburgerMenu from "./dom/81.menu_hamburgeza.js";
import relojDigital, { sonidoAlarma } from "./dom/82.reloj_digital.js";
import eventosTeclado, { shortcut } from "./dom/83.eventos_teclado.js";

const d= document;

d.addEventListener("DOMContentLoaded",e=>{

    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    relojDigital(".reloj",".btn-iniciar",".btn-detener");
    sonidoAlarma(".btn-inAlarma", ".btn-denAlarma");
    eventosTeclado(".area",".pointer");
    shortcut();
})
