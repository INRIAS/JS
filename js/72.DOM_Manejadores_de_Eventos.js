function holaMundo() {
    alert("Hola Mundo")
    console.log(event);
    
}

//Forma Semantica
//Falencia: Solamente puede ejecutar una funcion.
//En egeneral ninguna funcion asisgnada perimite pasar parametros excepto e(event);

const $eventoSemantico = document.getElementById("evento-semantico"),
 $eventoMultiple = document.getElementById("evento-multiple");

//la funcion se llama sin parentesis porque no debe iniciar con el documento.

$eventoSemantico.onclick=holaMundo;
$eventoSemantico.onclick=function (e) {
    alert("Hola Mundo Semántico")
    console.log(e);
    console.log(event);
}

//Evento Multiple
//Al igual si le pasas una funcion esta debe quedar sin parentesis

$eventoMultiple.addEventListener(("click"), holaMundo)

$eventoMultiple.addEventListener(("click"), (e)=>{
    alert("Hola Mundo Multiple");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    
})



