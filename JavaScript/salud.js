function presion() {
    let sistologica = parseFloat(prompt("Ingrese presión sistólica"));
    let diastologica = parseFloat(prompt("Ingrese presión diastólica"));
    let resultado = document.getElementById("resultado2");

    if (sistologica >= 140 || diastologica >= 90) {
        resultado.innerText = "Hipertensión de grado 2";
        resultado.style.color = "red"; 
    }
    else if ((sistologica >= 130 && sistologica <= 139) || (diastologica >= 80 && diastologica <= 89)) {
        resultado.innerText = "Hipertensión de grado 1";
        resultado.style.color = "orange"; 
    }
    else if (sistologica >= 120 && sistologica <= 129 && diastologica < 80) {
        resultado.innerText = "Presión elevada";
        resultado.style.color = "yellow"; 
    }
    else if (sistologica < 120 && diastologica < 80) {
        resultado.innerText = "Presión normal";
        resultado.style.color = "green"; 
    }
}

function temperatura(){
    let numerop=parseInt(prompt("Ingrese numero de pacientes"))
    let s=0;
    let max=0;
    for (let j=1;j<=numerop;j++){
        let temperatura=parseFloat(prompt("Ingrese temeperatura"));
        s=s+temperatura
        if (temperatura>max){
            max=temperatura
        }
    }
    let pr=s/numerop;
    document.getElementById("resultado2").innerText="el promedio es "+pr+" y la maxima temperatura es "+max
}
function fiebre(){
    let f= true
    let p=0
    let c=0
    while (f!=0){
        f=parseFloat(prompt("ingrese temperatura"))
        p=p+1
        if (f>38){
            c=c+1
        }
    }
    document.getElementById("resultado2").innerText="el total de pacientes son "+p +" y los que tienen fiebre mayor a 38 son "+c

}
function triage() {
    let r = prompt("Ingrese código de residuo");
    let resultado = document.getElementById("resultado2");

    switch (r) {
        case "1":
            resultado.innerText = "Rojo";
            resultado.style.color = "red";
            break;
        case "2":
            resultado.innerText = "Amarillo";
            resultado.style.color = "yellow";
            break;
        case "3":
            resultado.innerText = "Verde";
            resultado.style.color = "green";
            break;
        case "4":
            resultado.innerText = "Azul";
            resultado.style.color = "blue";
            break;
        default:
            resultado.innerText = "Código inválido";
            resultado.style.color = "black";
    }
}

function spo2(){
     let n;
     let s=0;
     let c=0
    do{
        n=prompt("ingrese spo2")
        s=s+n
        c=c+1
    }while(n!="no");
    let pro=s/c
    document.getElementById("reultado2").innerText="el promedio de saturacion es "+pro
}