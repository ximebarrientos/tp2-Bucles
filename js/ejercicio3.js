/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -. */


let textoCompleto = ""

do{
    const texto=prompt("Ingrese la cadena de texto")
    if(texto==""){
        textoCompleto=textoCompleto+texto
    }else{
        textoCompleto=textoCompleto+"-"+texto
    }

}while(confirm("¿Quiere seguir agregando cadenas de texto?"))

document.writeln(textoCompleto)