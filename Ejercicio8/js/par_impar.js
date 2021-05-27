// Determinamos a través de una función si un número es entero o no

function par_o_impar(number){
    if(number % 2 == 0){
        return "par";
    } else {
        return "impar";
    }
}

var numero = prompt("Introduce un número entero");

var resultado = par_o_impar(numero);
alert("El número " + numero + " es " + resultado);