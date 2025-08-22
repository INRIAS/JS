import hamburgerMenu from "./dom/81.menu_hamburgeza.js";
import relojDigital from "./dom/82.reloj_digital.js";

const d= document;

d.addEventListener("DOMContentLoaded",e=>{

    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    relojDigital(".reloj",".btn-iniciar",".btn-detener")
})
