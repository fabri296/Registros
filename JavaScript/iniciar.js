function iniciar() {
    let usuario = document.getElementById("Usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let datos = JSON.parse(localStorage.getItem("cuentaRegistrada"));
    let intentos = Number(localStorage.getItem("intentos")) || 0;
    let bloqueada = localStorage.getItem("bloqueada") === "true";
    if (bloqueada) {
        alert("Cuenta bloqueada por intentos fallidos");
        return;
    }
    if (usuario === datos.usuario && contraseña === datos.contraseña) {
        alert("Bienvenido al sistema " + datos.nombre);
        localStorage.removeItem("intentos");
        localStorage.setItem("bloqueada", "false");
    } else {
        intentos++;
        localStorage.setItem("intentos", intentos);
        if (intentos >= 3) {
            localStorage.setItem("bloqueada", "true");
            alert("Cuenta bloqueada por intentos fallidos");
        } else {
            alert("Usuario o contraseña incorrectos. Intento " + intentos + " de 3");
        }
    }
}
