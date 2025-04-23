/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la 
edad ingresada no es un número válido indicarlo en un mensaje.
*/

const edad = parseInt(prompt("Ingrese su edad"))

if(isNaN(edad) || edad<0){
    document.writeln("Este valor no es válido")
}else{
    if(edad>=18){
        document.writeln("Puede conducir")
    }else{
        document.writeln("No puede conducir")
    }
}