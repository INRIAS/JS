function sumar(a,b) {
    return a+b;
}

function restar(a,b) {
    return a-b;
}

export const aritmetica = {
    sumar,
    restar
}

export default function saludar() {
    console.log("Funcion saludar");
    
}

export class Saludar {
    constructor() {
        console.log("Clase Saludar");
        
    }
}