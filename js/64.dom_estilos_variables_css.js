const $linkdom = document.querySelector(".link-dom");


//Como accerder a los estilos de un elemento u etiqueta
console.log($linkdom.style);
console.log($linkdom.getAttribute("style"));
console.log($linkdom.style.backgroundColor);
console.log($linkdom.style.color);
console.log(getComputedStyle($linkdom));
console.log(getComputedStyle($linkdom).getPropertyValue("background-Color"));

//Como camiar los estilos de un elemento u etiqueta

$linkdom.style.setProperty("text-decoration", "none");
$linkdom.style.setProperty("display", "block");
$linkdom.style.width = "50%";
$linkdom.style.textAlign = "center";
$linkdom.style.marginLeft = "auto";
$linkdom.style.marginRight = "auto";
$linkdom.style.padding = "1rem";
$linkdom.style.borderRadius = ".5rem"


console.log("-------------Entender el getComputedStyle---------------");

console.log($linkdom.style);
console.log($linkdom.getAttribute("style"));
console.log(getComputedStyle($linkdom));

//Variables css - Custom Property

const $html = document.documentElement,
    $body = document.body;

let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color"),
    varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor=varDarkColor;
$body.style.color=varYellowColor;




