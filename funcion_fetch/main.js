async function consumir_datos(){

    //realizo la peticion http a traves del metodo GET
    const datos = await fetch ('https://jsonplaceholder.typicode.com/users')
    
    //Solo conservo los datos en JSON
    const datos_definitivos = await datos.json()

    datos_definitivos.array.forEach(element => {
        console.log(element.name)
    });
}


//Invoco a la funcion
consumir_datos()