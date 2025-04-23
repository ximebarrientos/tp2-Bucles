/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math()

*/
const nombre1 = prompt("Ingrese primer nombre");
const edad1 = Number(prompt("Ingrese edad del primero"));
const nombre2 = prompt("Ingrese segundo nombre");
const edad2 = Number(prompt("Ingrese edad del segundo"));
const nombre3 = prompt("Ingrese tercer nombre");
const edad3 = Number(prompt("Ingrese edad del tercero"));

if (!isNaN(edad1) || !isNaN(edad2) || !isNaN(edad3)) {
  const mayor = Math.max(edad1, edad2, edad3);

  if (mayor === edad1) {
    document.writeln("El mayor se llama: " + nombre1);
  }
  if (mayor === edad2) {
    document.writeln("El mayor se llama: " + nombre2);
  }
  if (mayor === edad3) {
    document.writeln("El mayor se llama: " + nombre3);
  }
} else {
  alert("El valor ingresado no es válido");
}
