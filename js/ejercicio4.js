/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un 
«alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

let sumaTotal=0

do{
    const numero=Number(prompt("Ingrese un número"))
    if(isNaN(numero)){
        alert("Ingrese un valor numérico sin letras ni puntos")
    }else{
        sumaTotal=sumaTotal+numero
    }

}while(confirm("¿Quiere seguir ingresando números?"))

document.writeln(sumaTotal)