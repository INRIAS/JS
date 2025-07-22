const $cards = document.querySelector(".cards"),
    $newfigure = document.createElement("figure"),
    $clone=$cards.cloneNode(true);

$newfigure.classList.add("card");

$newfigure.innerHTML = `
    <img src="https://loremflickr.com/200/200" alt="Gato">
    <figcaption>Gato</figcaption>
`;

// $cards.replaceChild($newfigure,$cards.children[4]);//Reemplaza
// $cards.removeChild($cards.children[1]);//Remueve 
// $cards.insertBefore($newfigure,$cards.firstElementChild);//inserta antes de
document.body.append($clone);
