<template>
<h1>{{titulo}}</h1>
    <div class="row">
        <div v-for="(p,index) of lista_productos" v-bind:key="index"  class="col-lg-4">
            <div class="card" style="width: 18rem;">
                <img :src="p.thumbnail" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{p.title}}</h5>
                    <p class="card-text">{{p.description}}</p>
                    <p class="card-text">${{p.price}}</p>
                    <a href="#" class="btn btn-primary">Ir a la pagina</a>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name:'GridProducto',
    setup() {
        
        let titulo = ref('Lista de Productos')
        let lista_productos = ref ([])

        const obtener_productos = async () => {
            //fetch realiza una peticion http a traves del metodo GET
            const productos = await fetch ('https://dummyjson.com/products')
            const datos = await productos.json()
            lista_productos.value = await datos.products
        }

        return {
        titulo,
        lista_productos,
        obtener_productos
        }
    },
    created(){
        this.obtener_productos()
    }

}
</script>
