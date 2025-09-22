const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Carne",
            img: "https://baconmockup.com/200/200"
        },
        {
            title: "Gatito",
            img: "https://loremflickr.com/200/200"
        },
        {
            title: "Batba",
            img: "https://placebeard.it/200x200"
        },
        {
            title: "Oso",
            img: "https://placebear.com/200/200"
        },
        {
            title: "Foto",
            img: "https://picsum.photos/200/200"
        },
    ];

cardContent.forEach((el) => {
    $template.querySelector("img").src = el.img;
    $template.querySelector("img").alt = el.title;
    $template.querySelector("figcaption").textContent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);

})

$cards.appendChild($fragment);