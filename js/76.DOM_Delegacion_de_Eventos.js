const $divsFlujo = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

console.log($divsFlujo);

function flujoEventos(e) {
    console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`);
    e.stopPropagation();

}

document.addEventListener("click", (e)=>{
    console.log("Click en ", e.target);
    
    if (e.target.matches(".eventos-flujo a")) {
        alert("Click en el Link");
        e.preventDefault();
    }

    if (e.target.matches(".eventos-flujo div")) {
         flujoEventos(e)
    }
})



/* $divsFlujo.forEach((div) => {
    //Evento burbuja
    div.addEventListener("click", flujoEventos);

}) */

/* $linkEventos.addEventListener("click", (e) => {
    alert("Saludo Previo");
    e.preventDefault();//Desavilita su naturaleza por default
    e.stopImmediatePropagation();// desactiva la propagacion.
}) */