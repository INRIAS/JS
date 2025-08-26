// *********** Reloj ***************

export default function relojDigital(reloj, iniciar, detener) {
    const d = document;
    let intervalo = null;

    d.addEventListener("click", e => {
        if (e.target.matches(iniciar)) {

            intervalo = setInterval(() => {
                const hora = new Date().toLocaleTimeString();
                d.querySelector(reloj).textContent = `${hora}`;
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

export function sonidoAlarma(start, stop) {
    const d = document;
    let sonido;
    let audio = new Audio("assets/alarma.mp3");

    d.addEventListener("click", e => {
        if (e.target.matches(start)) {
            sonido=setTimeout(() => {
                audio.play();
            }, 3000);
            e.target.disabled = true;
            e.target.classList.add("is-active");
        }

        if (e.target.matches(stop)) {
            clearTimeout(sonido);
            audio.pause();
            audio.currentTime=0;
            d.querySelector(start).disabled = false;
            d.querySelector(start).classList.remove("is-active");
        }
    })
}