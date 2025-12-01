
    // 1. querySelector → obtener un solo elemento
    document.querySelector("#btnMostrar").addEventListener("click", function() {
        let nombre = document.querySelector("#nombre").value;
        let edad = document.querySelector("#edad").value;

        document.querySelector("#resultado").innerText =
            "Nombre: " + nombre + " Edad: " + edad;
    });


    // 2. getElementsByClassName → seleccionar varios elementos por clase
    document.getElementById("btnPintar").addEventListener("click", function() {
        let campos = document.getElementsByClassName("campo");

        for (let i = 0; i < campos.length; i++) {
            campos[i].style.backgroundColor = "yellow";
        }
    });


    // 3. getElementsByTagName → seleccionar varios elementos por etiqueta
    document.getElementById("btnOcultar").addEventListener("click", function() {
        let parrafos = document.getElementsByTagName("p");

        for (let i = 0; i < parrafos.length; i++) {
            parrafos[i].style.display = "none";
        }
    });


