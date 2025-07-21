const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Kitty"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");

$img.src = "https://loremflickr.com/200/200";
$img.alt = "Kitty";
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$figure.classList.add("card");
$cards.appendChild($figure);


//forma dinamica

$figure2.classList.add("card");
$figure2.innerHTML = `
<img src="https://placebeard.it/200x200" alt="Beard">
<figcaption>Beard</figcaption>
`;

$cards.appendChild($figure2);

//Forma dinamica 2

const estaciones = ["Primavera", "Veranos", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Insertando Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});

//Forma dinamicacon fragmento(Menos carga en memoria y tiempo)

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
],
    $ul2 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();


meses.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
})

document.write("<h3>Insertando Los Meses del Heliokron</h3>");
$ul2.appendChild($fragment);
document.body.appendChild($ul2);