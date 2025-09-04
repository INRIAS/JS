const d = document;

export default function countdown(id, fechaFinal, mensaje) {
    const $cuenta = d.querySelector(id),
        fechaF = new Date(fechaFinal).getTime();

    let CDTempo = setInterval(() => {
        let fechaAhora = new Date().getTime(),
            tiempoRestante = fechaF - fechaAhora,
            dias = Math.floor(tiempoRestante / (1000 * 60 * 60 * 24)),
            horas = ("0" + Math.floor((tiempoRestante % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2),
            minutos = ("0" + Math.floor((tiempoRestante % (1000 * 60 * 60)) / (1000 * 60))).slice(-2),
            segundos = ("0" + Math.floor((tiempoRestante % (1000 * 60)) / (1000))).slice(-2);

        $cuenta.innerHTML = `<p>${dias} dias : ${horas} horas : ${minutos} minutos : ${segundos} segundos</p>
        <h2>Tiempo Faltante</h2>`;
        if (tiempoRestante < 0) {
            clearInterval(CDTempo);
            $cuenta.innerHTML = `<h2>${mensaje}</h2>`;
        }
    }, 1000);
}

