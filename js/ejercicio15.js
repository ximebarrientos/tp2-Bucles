/*15- Realiza un script que cuente el número de vocales que tiene un texto.*/

const texto=prompt("Ingrese texto").toLowerCase()
const numeroCaracteres=texto.length
let vocales=0

for(let i=0;i<numeroCaracteres;i++){
    let caracter=texto.charAt(i)
    if(caracter=="a" ||caracter=="e" || caracter=="i" || caracter=="o" || caracter=="u"){
        vocales++
    }
}
document.writeln(`Cantidad de vocales que tiene el texto: ${vocales}`)