const $whatIs = document.getElementById("que-es");

let texto = `
    <p>
    El Modelo de Objetos del Documento (<b> <i>DOM - Document Object Model</i> </b>) es un API para documentos HTML y XML.
    </p>
    <p>
    Este proveé una representacién estructural del documento, permitiendo modificar su contenido y presentacion visual mediante cédigo JS.
    </p>
    <p>
    <mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores.</ mark>
    </p>
`;

//Hace parte del estandar de I.Explorer por lo que aun cuando funciona no es una manera optima(No interpreta las etiquetas html)
$whatIs.innerText = texto;
//Ya este si hace parte del estandar de JS.(No interpreta las etiquetas html)
$whatIs.textContent = texto;
// Aparte de esos dos esta el que si reconoce las etoquetas HTML(Este agrega dento de la etiqueta)
$whatIs.innerHTML=texto;
//Este es igual que el anterior, pero si reemplaza la etiqueta
$whatIs.outerHTML=texto;
