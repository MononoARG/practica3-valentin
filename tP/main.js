function GUARDAR(){

    let nuevo_cliente = {
        ip:document.getElementById("inp_ip").value,
        puerto:document.getElementById("inp_puerto").value,
        pais:document.getElementById("inp_pais").value,
        ciudad:document.getElementById("inp_ciudad").value,
        velocidad:document.getElementById("inp_velocidad").value,
        tipo:document.getElementById("inp_tipo").value
    }

    if("lista_clientes" in localStorage){
        let grilla_clientes = JSON.parse(localStorage.getItem("lista_clientes"))
        grilla_clientes.push(nuevo_cliente)
        localStorage.setItem("lista_clientes",JSON.stringify(grilla_clientes))
    }else{
        let grilla_clientes = []
        grilla_clientes.push(nuevo_cliente)
        localStorage.setItem("lista_clientes", JSON.stringify(grilla_clientes))
    }
    document.getElementById("form_cliente").reset() 
    OBTENER_CLIENTES()
}
function OBTENER_CLIENTES(){

    if ("lista_clientes" in localStorage){
        let lista_clientes =  JSON.parse( localStorage.getItem("lista_clientes"))

        let filas = []
        lista_clientes.forEach( (element,index) => {
            let fila = `
                <tr>
                    
                    <td>${element.ip}</td>
                    <td>${element.puerto}</td>
                    <td>${element.pais}</td>
                    <td>${element.ciudad}</td>
                    <td>${element.velocidad}</td>
                    <td>${element.tipo}</td>
                    <td>
                        <button onclick="ELIMINAR_CLIENTE(${index})" class="btn btn-danger btn-sm"><i class="material-icons">delete_forever</i></button>
                        <button onclick="EDITAR_CLIENTE(${index})" class="btn btn-primary btn-sm"><i class="material-icons">border_color</i></button>
                    <td>
                </tr>
            `
            filas.push(fila)
        });

        document.getElementById("tbody").innerHTML = filas.join('')
    }
}

OBTENER_CLIENTES()

function ELIMINAR_CLIENTE(index){
    let lista_clientes = JSON.parse( localStorage.getItem("lista_clientes"))
    lista_clientes.splice(index,1)
    localStorage.setItem("lista_clientes", JSON.stringify(lista_clientes))
    OBTENER_CLIENTES()
}

function EDITAR_CLIENTE(index){
    let lista_clientes = JSON.parse( localStorage.getItem("lista_clientes"))

    document.getElementById("inp_ip").value = lista_clientes[index].ip
    document.getElementById("inp_puerto").value = lista_clientes[index].puerto
    document.getElementById("inp_pais").value = lista_clientes[index].pais
    document.getElementById("inp_ciudad").value = lista_clientes[index].ciudad
    document.getElementById("inp_velocidad").value = lista_clientes[index].velocidad
    document.getElementById("inp_tipo").value = lista_clientes[index].tipo

    document.getElementById("btn_guardar").style.display = 'none'
    document.getElementById("btn_actualizar").style.display = 'block'

    localStorage.setItem("indice_cliente",index)
}

function ACTUALIZAR_CLIENTE(){

    let indice = localStorage.getItem("indice_cliente")

    let lista_clientes = JSON.parse( localStorage.getItem("lista_clientes"))

    lista_clientes[indice].ip = document.getElementById("inp_ip").value
    lista_clientes[indice].puerto = document.getElementById("inp_puerto").value
    lista_clientes[indice].pais = document.getElementById("inp_pais").value
    lista_clientes[indice].ciudad = document.getElementById("inp_ciudad").value
    lista_clientes[indice].velocidad = document.getElementById("inp_velocidad").value
    lista_clientes[indice].tipo = document.getElementById("inp_tipo").value

    localStorage.setItem("lista_clientes", JSON.stringify(lista_clientes))
    
    OBTENER_CLIENTES()

    document.getElementById("btn_guardar").style.display = 'block'
    document.getElementById("btn_actualizar").style.display = 'none'

    document.getElementById("form_cliente").reset() 
}
document.getElementById("btn_actualizar").addEventListener("click",ACTUALIZAR_CLIENTE)