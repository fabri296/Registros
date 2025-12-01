function recuperar(){
    let nombre=document.getElementById("nombre").value;
    let usuario=document.getElementById("Usuario").value;
    let celular=document.getElementById("celular").value;
    let contraseñanueva=document.getElementById("contraseña").value;
    let regex3= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    let datos=JSON.parse(localStorage.getItem("cuentaRegistrada"));
    if (regex3.test(contraseñanueva) && nombre===datos.nombre &&
    usuario===datos.usuario && celular===datos.celular 
    ){
        datos.contraseña=contraseñanueva
        alert("Contraseña actualizada")
        localStorage.setItem("cuentaRegistrada", JSON.stringify(datos));
        localStorage.setItem("intentos", "0");
        localStorage.setItem("bloqueada", "false");
    }
    else {
        alert("Su usuario/nombre, correo, celular o contraseña no son validos ")
    }
}