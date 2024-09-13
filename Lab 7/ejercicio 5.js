/*
Ejercicio 5: Clasificación de edades
Crea una función llamada clasificarEdad(edad) que reciba una edad como argumento y retorne:
"Niño" si la edad es menor a 12,
"Adolescente" si la edad es entre 12 y 17,
"Adulto" si la edad es entre 18 y 64,
"Adulto mayor" si la edad es 65 o mayor.
*/
function clasificarEdad(edad) {
    if (edad < 12) {
        return "niño";
    } else if (edad >= 12 && edad <= 17) {
        return "adolescente";
    } else if (edad >= 18 && edad <= 64) {
        return "adulto";
    } else if (edad >= 65) {
        return "adulto mayor";
    }
}

console.log("-----------------------------------");
console.log("EJERCICIO 5");
console.log("-----------------------------------");
console.log(clasificarEdad(10));  // "niño"
console.log(clasificarEdad(16));  // "adolescente"
console.log(clasificarEdad(30));  // "adulto"
console.log(clasificarEdad(70));  // "adulto mayor"