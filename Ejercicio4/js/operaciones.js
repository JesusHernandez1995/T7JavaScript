var valores = [true, 5, false, "hola", "adios", 2];

// 1. Determinar cuál de los 2 elementos de texto es mayor

var result = valores[3] > valores[4];

if(result){
    alert("El elemento \'hola\' es mayor");
} 

// 2. Determinar los operadores necesarios para obtener un resultado true y un resultado false

var valor1 = valores[0];
var valor2 = valores[2];

// Operador OR, para obtener un resultado TRUE
var result = valor1 || valor2;
alert(result);

// Operador AND, para obtener un resultado FALSE
var result = valor1 && valor2;
alert(result);

// 3. 5 operaciones matemáticas 

var num1 = valores[1];
var num2 = valores[5];

// suma
var result = num1 + num2;
alert(result);

// resta
var result = num1 - num2;
alert(result);

// multiplicación
var result = num1 * num2;
alert(result);

// división
var result = num1 / num2;
alert(result);

// módulo
var result = num1 % num2;
alert(result);