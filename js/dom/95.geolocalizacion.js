const d = document,
    w = window,
    na = navigator;

export default function getGeolocation(id) {
    const $geo = d.getElementById(id),
        options = {
            enableHighAccuracy: true,//El dispositivo trate de hacer la lectura lo mas acertada posible
            timeout: 5000,//Tiempo de actualizacion
            maximumAge: 0// No Guardar en cache las lecturas
        };

    const success = (position) => {
        console.log(position);
        let coord = position.coords;

        $geo.innerHTML = `
        <p>Tu posición actual es:</p>
        <ul>
        <li>Latitud: <b>${coord.latitude}</b></li>
        <li>Logitud: <b>${coord.longitude}</b></li>
        <li>PResición: <b>${coord.accuracy} metros</b></li>
        </ul>
        <a href="https://www.google.com/maps/@${coord.latitud},${coord.longitude},12z" target="_blank rel="noopener">Ver en Google Maps</a>
        `

    };

    const error = (err) => {
        console.log(err);
        $geo.innerHTML = `<p><mark>Error: ${err.cod}: ${err.message}</mark></p>`

    };

    na.geolocation.getCurrentPosition(success, error, options);





}   