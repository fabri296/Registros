function sumar(){

    let t=document.getElementById("entrada").value;
    let v=t.split(",").map(Number);
    let suma=0
    for (let i = 0; i < v.length; i++) {
        suma += v[i];
    }
 
    document.getElementById("resultado").innerText="La sumatoria es "+suma
}
function promedio(){
    

    let t=document.getElementById("entrada").value;
    let v=t.split(",").map(Number);
    let suma=0
    for (let i = 0; i < v.length; i++) {
        suma += v[i];
    }
    l=v.length
    let pro=suma/l
    document.getElementById("resultado").innerText="El promedio es "+pro
}
let persona = {
    nombre: "Ana",
    edad: 25,
    ciudad: "La Paz",
    profesion: "Ingeniera"
};

function mostrarPersona() {
    // Accedemos al elemento <p> y mostramos la info
    let texto = "Nombre: " + persona.nombre + "\n" +
                "Edad: " + persona.edad + "\n" +
                "Ciudad: " + persona.ciudad + "\n" +
                "Profesión: " + persona.profesion;

    // innerText mantiene los saltos de línea
    document.getElementById("resultado").innerText = texto;
}
