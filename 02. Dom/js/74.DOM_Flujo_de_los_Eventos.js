const $divsFlujo = document.querySelectorAll(".eventos-flujo div");

console.log($divsFlujo);

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    
}

$divsFlujo.forEach((div)=>{
    //Evento burbuja
    // div.addEventListener("click", flujoEventos);
    // div.addEventListener("click", flujoEventos,false);
    
    //Evento Captura cons 3 parametors
    // div.addEventListener("click", flujoEventos,true);
    
    //Evento con mas de 3 parametros
    div.addEventListener("click", flujoEventos,{
        capture:true,//Activa burbuja o captura
        once:true,//Permite activar indefinido u true para 1 sola vez
    });


})