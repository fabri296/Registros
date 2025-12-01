function crear(){
    let nombre=document.getElementById("nombre").value;
    let usuario=document.getElementById("Usuario").value;
    let celular=document.getElementById("celular").value;
    let contraseña=document.getElementById("contraseña").value;
    let regex= /^[A-Za-zÁÉÍÓÚÑáéíóúñ ]+$/;
    let regex1= /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regex2= /^[0-9]{7,12}$/;
    let regex3= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (regex.test(nombre) &&
        regex1.test(usuario) &&
        regex2.test(celular) &&
        regex3.test(contraseña)
    ){
        
        let cuenta={
            nombre:nombre,
            usuario:usuario,
            celular:celular,
            contraseña:contraseña,
        }
        localStorage.setItem("cuentaRegistrada", JSON.stringify(cuenta));

        alert("Usuario creado correctamente ");
        
    }
    else {
        alert("Su usuario/nombre, correo, celular o contraseña no son validos ")
    }
}

