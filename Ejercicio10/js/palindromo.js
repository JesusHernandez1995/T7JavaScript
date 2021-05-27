// Debemos determinar si un string es palíndromo o no.

// Primero, convertimos a minúsculas el texto introducido por teclado
var texto = prompt("Introduzca una cadena de texto").toLowerCase();

function DeterminarPalindromo(texto){
    // Antes de evaluar si es palíndromo o no, eliminamos los espacios en blanco
    var cadena = texto.split('').reverse().join('');
    if(texto == cadena){
        return true;
    } else {
        return false;
    }
   
}

if(DeterminarPalindromo(texto)){
    console.log('Es palíndromo');
} else {
    console.log('No es palíndromo');
}