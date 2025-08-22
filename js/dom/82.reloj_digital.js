// *********** Reloj ***************

export default function relojDigital(reloj, iniciar, detener) {
    const d = document;
    let intervalo = null;
    
    d.addEventListener("click", e => {
        if (e.target.matches(iniciar)) {
            
            intervalo = setInterval(() => {
            const hora = new Date().toLocaleTimeString();
            d.querySelector(reloj).textContent =`${hora}`;
        }, 1000);
        
        e.target.disabled = true;
        e.target.classList.add("is-active");
    }
    
    if (e.target.matches(detener)) {
        d.querySelector(reloj).classList.add("is-active")
        d.querySelector(reloj).textContent = null;
        clearInterval(intervalo);
        d.querySelector(iniciar).disabled = false;
        d.querySelector(iniciar).classList.remove("is-active");

    }
    })
}