/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario 
(no mayor de 50)  de la siguiente forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1

*/

const numero=parseInt(prompt("Ingrese un número"))

if(isNaN(numero)||numero<1||numero>50){
   document.writeln("No ingreso un número válido")
}else{
    for(let i=numero;i>=1;i--){
        for(let repeticiones=i; repeticiones>=1; repeticiones--){
            document.writeln(i)
        }
        document.writeln("<br>")
    }
}