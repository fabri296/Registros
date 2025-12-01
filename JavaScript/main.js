let numero=10;
let booleano=true;
let auxi=prompt("ingrese nombre");
let edad=prompt("Ingrese Edad");
let valor= document.getElementById('parrafo');
valor.innerText=auxi
let vlaor2=document.getElementById("texto");
vlaor2.innerText=edad

/*/function cambiartexto(){
    let valor= document.getElementById('parrafo');
    valor.innerText=auxi;
    let nombre=prompt("Ingrese nombre");
    
    let parrafos= document.getElementsByClassName("texto");
    
    for (let i=0;i<parrafos.length;i++){
        parrafos[i].innerText="cambio numero "+i
        parrafos[i].style.backgroundColor="red";
    }
}/*/
