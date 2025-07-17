console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));

//Lo recomendado es siempre invocar con el getAtribute aun cuando el texto sea mas verboso
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

//Lo anterior demuestra que al igual se maneja con get y set

document.documentElement.lang="es";
console.log(document.documentElement.lang);
document.documentElement.setAttribute("lang", "es-CO");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");

$linkDOM.setAttribute("target", "_blank");//SetAttribute modifica valors
console.log($linkDOM.getAttribute("target", "_blank"));//getAttribute muestra el valor actual
$linkDOM.setAttribute("rel", "noopener");
console.log($linkDOM.hasAttribute("rel"));//el has Pregunta si exite algun elemento
$linkDOM.removeAttribute("rel");//Remove remueve atributos de la etiqueta
console.log($linkDOM.hasAttribute("rel"));//el has Pregunta si exite algun elemento

//Data-Attributes

console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);//trael todos los data de la etiquieta existentes
console.log($linkDOM.dataset.description);//trae solo la referencia del data suministrado
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento")
console.log($linkDOM.dataset.description);//trae solo la referencia del data suministrado

$linkDOM.dataset.description= "Susbribete";// notacion del Punto
console.log($linkDOM.dataset.description);//trae solo la referencia del data suministrado


