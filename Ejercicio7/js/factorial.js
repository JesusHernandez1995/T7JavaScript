var numero = prompt("Introduzca un número para calcular su factorial");
var resultado = 1;

if(numero <=0 || numero == 1){
    alert("Introduzca un número positivo o mayor que 1");
} else {
    for(var i=1; i<=numero; i++){
        resultado = resultado * i;
    }
    alert(resultado);
}