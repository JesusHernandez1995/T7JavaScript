// Declaramos variable que contiene los meses del año
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

// 1. Introduzca vuestro DNI y la letra correspondiente al misno

var dni = prompt("Introduzca vuestro DNI (sin la letra)");
var dni_letra = prompt("Introduzca la letra de vuestro DNI");
dni_letra = dni_letra.toUpperCase();    // convertimos la letra en mayúscula

// 2. Se debe comprobar de que el número sea válido en una sola línea.

if(dni < 0 || dni > 99999999){
    console.log('El número introducido no es válido');
} else {
    // 3. Si el número es válido, entonces procedemos a calcular la letra del dni
    var letra_calculada = letras[dni % 23];

    // 4. Procedemos a verificar si la letra calculada coincide con la que ha introducido el usuario
    if(letra_calculada != dni_letra){
        console.log('La letra indicada no es correcta');
    } else {
        console.log('El DNI y la letra indicada son correctos');
    }
}
