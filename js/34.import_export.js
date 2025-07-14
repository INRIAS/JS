import {PI} from "./Import_Export/Constante.js"
import saludar, {Saludar, aritmetica} from "./Import_Export/Aritmetica.js"

console.log(PI);
console.log(aritmetica.sumar(2,3));
console.log(aritmetica.restar(4,3));

saludar();

let saludo = new Saludar();
saludo;
