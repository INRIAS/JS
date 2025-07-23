/* 
.InsertAdjacent:
.insertAdjacentElement(position, el)
.insertAdjacentHTML(position, html)
.insertAdjacentText(position, text)

Posiciones: 
beforebegin(hermano- anterior) 
afterbegin(primer hijo) 
beforeend(ultimo- hijo)
afterend(hermano siguiente)
*/

const $cards = document.querySelector(".cards"),
    $newfigure = document.createElement("figure"),
    $clone=$cards.cloneNode(true);

$newfigure.classList.add("card");

const $content = `
    <img src="https://picsum.photos/200/200" alt="Gato">
    <figcaption></figcaption>
`;

$newfigure.insertAdjacentHTML("beforeend", $content);
$newfigure.querySelector("figcaption").insertAdjacentText("beforeend", "Fotografía")


// $cards.insertAdjacentElement("beforebegin", $newfigure);
// $cards.insertAdjacentElement("afterbegin", $newfigure);
// $cards.insertAdjacentElement("beforeend", $newfigure);
$cards.insertAdjacentElement("afterend", $newfigure);

