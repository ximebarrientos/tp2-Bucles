/*16- Realiza un script que pida una cadena de texto y la devuelva al revés.
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

const texto=prompt("Ingrese texto").toLowerCase()
const numeroCaracteres=texto.length
let textoAlReves=""

for(i=0; i<numeroCaracteres; i++){
    caracter=texto.charAt(i)
    textoAlReves=caracter + textoAlReves
}

document.writeln(textoAlReves)