/*
Ejercicio 10: Calculadora de años bisiestos
Escribe una función llamada esBisiesto(anio) 
que reciba un año como argumento y retorne "Es bisiesto" si el año es divisible entre 4 pero no entre 100, 
o si es divisible entre 400. En caso contrario, retorne "No es bisiesto".
*/
function esBisiesto(anio) {

    if ((anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0)) {
        return "es bisiesto";
    } else {
        return "no es bisiesto";
    }
}

console.log("-----------------------------------");
console.log("EJERCICIO 10");
console.log("-----------------------------------");
console.log(esBisiesto(2020)); // "es bisiesto"
console.log(esBisiesto(2100)); // "no es bisiesto"