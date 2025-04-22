/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los
siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número 
ingresado no es válido mostrar el mensaje “Introduce un número válido”.
*/

const nota = parseInt(prompt("Ingrese la nota"));

if (isNaN(nota) || nota < 0 || nota > 10) {
  document.writeln("Este valor no es válido");
} else {
  if (nota <= 2) {
    document.writeln("Muy deficiente");
  } else if (nota <= 4) {
    document.writeln("Insuficiente");
  } else if (nota <= 6) {
    document.writeln("Suficiente");
  } else if (nota === 7) {
    document.writeln("Bien");
  } else if (nota <= 9) {
    document.writeln("Notable");
  } else if (nota === 10) {
    document.writeln("Sobresaliente");
  }
}
