/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter 
sin usar el método replace. 
Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”. */

const texto=prompt("Ingrese texto")
const numeroCaracteres=texto.length

for(i=0;i<numeroCaracteres;i++){
    caracter=texto.charAt(i)
    document.writeln(`${caracter} - `)
}
