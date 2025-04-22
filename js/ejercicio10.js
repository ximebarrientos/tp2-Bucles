/*10- Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/

const filas = parseInt(prompt("Ingrese numero de filas"));
const columnas = parseInt(prompt("Ingrese numero de columnas"));
let numeroCelda = filas * columnas;

if (isNaN(filas) || isNaN(columnas)) {
  alert("Ingrese un número válido");
} else {
  document.writeln(`<table>
        <tbody>`);

  for (let indiceFilas = 0; indiceFilas < filas; indiceFilas++) {
    document.writeln(`<tr>`);
    for (let indicecolumnas = 0; indicecolumnas < columnas; indicecolumnas++) {
      document.writeln(`<td>${numeroCelda}</td>`);
      numeroCelda--;
    }
    document.writeln(`</tr>`);
  }

  document.writeln(`
        </tbody>
    </table>`);
}
