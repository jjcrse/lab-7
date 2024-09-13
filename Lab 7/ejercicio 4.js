/*
Ejercicio 4: Calculadora básica
Escribe una función llamada calculadora(operacion, num1, num2) que reciba una operación ("suma", "resta", "multiplicacion", "division")
y dos números. Retorna el resultado de la operación. 
Si la operación no es válida, debe retornar "Operación no reconocida".
Recuerde que "No se puede dividir entre 0".
*/
function calculadora(operacion, num1, num2) {
  
    switch (operacion) {
        case "suma":
            return num1 + num2;
        case "resta":
            return num1 - num2;
        case "multiplicacion":
            return num1 * num2;
        case "division":
    
            if (num2 === 0) {
                return "No se puede dividir entre 0";
            }
            return num1 / num2;
        default:
            return "Operación no reconocida";
    }
}


console.log("-----------------------------------");
console.log("EJERCICIO 4");
console.log("-----------------------------------");
console.log(calculadora("suma", 4, 3));            // 7
console.log(calculadora("resta", 10, 4));          // 6
console.log(calculadora("multiplicacion", 2, 9));  // 18
console.log(calculadora("division", 10, 0));       // "no se puede dividir entre 0"
console.log(calculadora("division", 8, 2));       // 4
console.log(calculadora("potencia", 2, 3));        // "operación no reconocida"