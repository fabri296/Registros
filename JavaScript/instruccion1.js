document.getElementById("btnMostrar").addEventListener("click", function() {

    // Obtener el valor del input usando getElementById
    let nombre = document.getElementById("txtNombre").value;

    // Mostrar el resultado usando getElementById
    document.getElementById("resultado").innerText = "Hola " + nombre;
});

