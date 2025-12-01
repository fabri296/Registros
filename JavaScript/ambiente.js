 function clasificacion(){
alert("ingrese AQI que sean no negativos y no nulos de otro modo no se clasificara su dato  ")
let aqui;
 do{
 aqui=parseFloat(prompt("ingrese el valor AQI"))}while(aqui<0)
    let resultado=document.getElementById("resultado")
if (aqui>=0 && aqui<=50){
    resultado.innerText=aqui + " el aire es bueno"
    resultado.style.color="white"
}
else if(aqui>=51 && aqui<=100){
    resultado.innerText=aqui + " el aire es moderado"
    resultado.style.color="green"
    
}
else if (aqui>= 101 && aqui<=150){
    resultado.innerText=aqui + " el aire es peligroso para grupos sensibles"
    resultado.style.color="yellow"

}
else if(aqui>=151 && aqui<=200){
    resultado.innerText=aqui + " el aire es insalubre"
    resultado.style.color="orange"
}
else if(aqui>=201 && aqui<=300){
    resultado.innerText=aqui + " el aire es muy insalubre"
    resultado.style.color="red"
    
}
else{
    resultado.innerText=aqui + " el aire es peligroso"
    resultado.style.color="violet"
    
}
 }
function sonido(){
    let mediciones=parseFloat(prompt("ingrese numero de db"))
    let s=0
    
    for (let i=0; i<mediciones;i++){
        let db=parseFloat(prompt("ingrese db"))
        let dv=db/10
        s=s+(10**dv)
    }
    let pro =10 *Math.log10(s/mediciones)
    document.getElementById("resultado").innerText=pro
    
}
function focos(){
    let f= true
    let c=0
    let max=-Infinity;
    while (f!=0){
        f=parseFloat(prompt("ingrese temperatura"))
        if (f>max){
            max=f
        }
        if (f>45){
            c=c+1
        }
    }
    document.getElementById("resultado").innerText="los focos que superan los 45 son "+c+" y la temperatura mas alta es "+max
}
function clasificacionderesiduos(){
    let r=prompt("ingrese codigo de residuo");
    switch (r){
        case "1":
            document.getElementById("resultado").innerText="organico";
            break;
        case "2":
            document.getElementById("resultado").innerText="plastico";
            break;
        case "3":
            document.getElementById("resultado").innerText="papel/carton";
            break;
        case "4":
            document.getElementById("resultado").innerText="vidrio";
            break;
        default:
            document.getElementById("resultado").innerText="codigo invalido";
    }
}
function niveles(){
    let n;
    do{
        n=prompt("ingrese nivel")
        let num=parseFloat(n)
        if (num>=3){
            alert("el rio esta a mas 3m")
        }
        
    }while(n!="no");
}