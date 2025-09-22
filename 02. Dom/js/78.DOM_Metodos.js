const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", e => {
    ventana = open("https://facebook.com")
})

$btnCerrar.addEventListener("click", e=>{
    ventana.close()
})

$btnImprimir.addEventListener("click", e=>{
    window.print();
})