/*17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
 */

const texto = prompt("Ingrese texto").toLowerCase();
const numeroCaracteres = texto.length;
let posicionVocal = 0;

for (let i = 0; i < numeroCaracteres; i++) {
  let caracter = texto.charAt(i);
  if (caracter == "a") {
    document.writeln(`La vocal "a" está en la posición ${i}`);
  }
  if (caracter == "e") {
    document.writeln(`La vocal "e" está en la posición ${i}`);
  }
  if (caracter == "i") {
    document.writeln(`La vocal "i" está en la posición ${i}`);
  }
  if (caracter == "o") {
    document.writeln(`La vocal "o" está en la posición ${i}`);
  }
  if (caracter == "u") {
    document.writeln(`La vocal "u" está en la posición ${i}`);
  }
}

//falta hacer que sólo la primera vocal imprima
