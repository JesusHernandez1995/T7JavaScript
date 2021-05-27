/* Debemos definir una función que evalúe si una cadena de texto tiene letras mayúsculas, minúsculas 
o una combinación de ambas */

function analize_string(cadena){
    if(cadena == cadena.toUpperCase()){
        console.log("La cadena tiene sólo letras mayúsculas");
    } else if (cadena == cadena.toLowerCase()){
        console.log("La cadena tiene sólo letras minúsculas");
    } else {
        console.log("La cadena tiene una combinación de ambas");
    }
}

cadenaTexto = "Soy un rayo de sol";

analize_string(cadenaTexto);
alert(cadenaTexto);