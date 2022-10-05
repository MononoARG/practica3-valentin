function guardar ( ) {

    const nombre = document.getElementById("inp_nombre").value
    const apellido = document.getElementById("inp_apellido").value
    const dni = document.getElementById("inp_dni").value

    let nuevo_cliente = {
        nombre:document.getElementById("inp_nombre").value,
        apellido:document.getElementById("inp_apellido").value,
        dni:document.getElementById("inp_dni").value
    }

    if ("clientes" in localStorage) {
        let grilla_clientes = JSON.parse(localStorage.getItem("lista_clientes"))
        grilla_clientes.push(nuevo_cliente)
        localStorage.setItem("lista_clientes",JSON.stringify(grilla_clientes))
    }else{
        let grilla_clientes =[]
        grilla_clientes.push(nuevo_cliente)
        localStorage.setItem("lista_clientes", JSON.stringify(grilla_clientes))
    }
}
