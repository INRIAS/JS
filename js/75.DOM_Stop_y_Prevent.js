const $divsFlujo = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

console.log($divsFlujo);

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    e.stopPropagation();

}

$divsFlujo.forEach((div) => {
    //Evento burbuja
    div.addEventListener("click", flujoEventos);

})

$linkEventos.addEventListener("click", (e) => {
    alert("Saludo Previo");
    e.preventDefault();//Desavilita su naturaleza por default
    e.stopImmediatePropagation();// desactiva la propagacion.
})