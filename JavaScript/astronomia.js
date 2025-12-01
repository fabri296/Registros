function brillo() {
    let brilloesetelat;
        brilloesetelat = parseFloat(prompt("Ingrese brillo estelar (puede ser negativo)")); 

    let resultado = document.getElementById("resultado3");

    if (brilloesetelat <= -10) {
        resultado.innerText = "Es extremadamente brillante";
        resultado.style.color = "yellow";
    }
    else if (brilloesetelat > -10 && brilloesetelat <= 0) {
        resultado.innerText = "Es muy brillante";
        resultado.style.color = "gold";
    }
    else if (brilloesetelat > 0 && brilloesetelat <= 3) {
        resultado.innerText = "Es brillante";
        resultado.style.color = "orange";
    }
    else if (brilloesetelat > 3 && brilloesetelat <= 6) {
        resultado.innerText = "Es moderado";
        resultado.style.color = "lightblue";
    }
    else if (brilloesetelat > 6 && brilloesetelat <= 10) {
        resultado.innerText = "Es débil";
        resultado.style.color = "gray";
    }
    else {
        resultado.innerText = "Es muy débil";
        resultado.style.color = "darkgray";
    }
}
function distanciasregistro(){
    let numerodedsitancias=parseInt(prompt("ingrese numero de distancias de registro"));
    let sd=0
    let max=0;
    
    
    for (let k=1;k<=numerodedsitancias;k++){
        let distancia=parseFloat(prompt("Ingrese distancia"));
        if(distancia>max){
            max=distancia
        }
        sd=sd+distancia
        
    }
    let prd=sd/numerodedsitancias

    document.getElementById("resultado3").innerText=prd+" y la maxima distancia es "+max
}
function crateres(){
    let diametro;
    let con=0
    let cr=0
    while(diametro!=0){
        diametro=parseFloat(prompt("ingrese diametro"))
        cr=cr+1
        if (diametro>50){
            con=con+1
        }
    }
    document.getElementById("resultado3").innerText="la cantidad de crateres es "+cr+" y los crateres que suoeran los 50 son "+con
}
function cuerpoceleste() {
    let r = prompt("Ingrese código (1-5)");
    let resultado = document.getElementById("resultado3");

    switch (r) {
        case "1":
            resultado.innerText = "Estrella";
            resultado.style.color = "yellow";
            break;
        case "2":
            resultado.innerText = "Planeta";
            resultado.style.color = "blue";
            break;
        case "3":
            resultado.innerText = "Cometa";
            resultado.style.color = "white";
            break;
        case "4":
            resultado.innerText = "Asteroide";
            resultado.style.color = "gray";
            break;
        case "5":
            resultado.innerText = "Galaxia";
            resultado.style.color = "purple";
            break;
        default:
            resultado.innerText = "Código inválido";
            resultado.style.color = "red";
    }
}

function registronivelesdeluz(){
        let lux;
    let s = 0;
    let c = 0;
    do{
        lux = prompt("ingrese nivel de lux (o escriba no para terminar)");
        if (lux != "no") {
            let numlux = parseFloat(lux);
            s = s + numlux;
            c = c + 1;
            if (numlux < 5){
                alert("Hay una noche profunda");
            }
        }
    } while (lux != "no");
    let pro = s / c;
    document.getElementById("resultado3").innerText="los niveles de lux ingresados son "+c+" y su promedio es "+pro
}