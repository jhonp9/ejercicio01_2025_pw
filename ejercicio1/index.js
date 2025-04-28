
let todo= function(){
    let nombre=document.getElementById("nombre")
    let correo=document.getElementById("correo")
    let mensaje=document.getElementById("mensaje")
    let vacio=document.getElementById("vacio")
    if(nombre.value=="" || correo.value=="" || mensaje.value==""){
        console.error("esta mal")
        vacio.innerText="esta mal"
        return
    }
    if(!correo.value.includes("@") || !correo.value.includes(".")){
        console.error("esta mal el correo")
        vacio.innerText="esta mal el correo"
        return
    }
    console.log("todo ok")
    vacio.innerText="todo bien"
}

let main = function() {
    let boton=document.getElementById("boton")
    boton.addEventListener("click",todo)
}
main();