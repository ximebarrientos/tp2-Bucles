/*8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario 
(no mayor de 50) 

1
12
123
1234
12345
123456
……

*/

const numero = parseInt(prompt("Ingrese un número"));

if (isNaN(numero) || numero < 1 || numero > 50) {
  document.writeln("Ingrese un numero válido");
} else {
  for (let i = 1; i <= numero; i++) {
    for (let repeticiones = 1; repeticiones <= i; repeticiones++) {
      document.writeln(repeticiones);
    }
    document.writeln("<br>");
  }
}
