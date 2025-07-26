const saludar = (nombre = "Desconocido") => {
    console.log(`Hola mi nombre es ${nombre}`);

}

const $eventoMultiple = document.getElementById("evento-multiple");

$eventoMultiple.addEventListener("click", saludar)
$eventoMultiple.addEventListener("click", () => {
    saludar();
    saludar("Stiven");
})

//Remover un evento despues de su uso

const $removerEvento = document.getElementById("remover-evento");

const removerEvento = (e) => {
    alert("Removiendo evento " + e.type)
    console.log("Removiendo evento " + e.type)
    $removerEvento.removeEventListener("dblclick", removerEvento);
    $removerEvento.disabled = true;
}

$removerEvento.addEventListener("dblclick", removerEvento);