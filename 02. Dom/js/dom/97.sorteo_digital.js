const d = document,
w= window;

export default function sorteoDigital(listado, btn) {
    const $listado=d.querySelectorAll(listado);

    d.addEventListener("click", e =>{
        if(e.target.matches(btn)){
            const randomIndex = Math.floor(Math.random() * $listado.length),
            ganador = $listado[randomIndex].textContent;
            alert(`El ganador es: ${ganador}`)
        }
    })
}

/* const sorteo= (listado)=>{
    const $listado=document.querySelectorAll(listado);
     const randomIndex = Math.floor(Math.random() * $listado.length),
            ganador = $listado[randomIndex].textContent;
            
    return `El ganador es: ${ganador}`;
}


sorteo("ytd-comment-thread-renderer #author-text"); */