<template>
    <h1>{{titulo}}</h1>
    <div class="row">
        <div class="col-lg-4">
            <button @click="obtener_usuarios()" class="btn btn-success">Listar usuarios</button>
            <ul class="list-group">
                <li v-for="(u,index) of lista_usuarios" v-bind:key="index" class="list-group-item">
                    {{u.name}}
                </li>
            </ul>
        </div> 
    </div>
</template>

<script>
import { ref } from "vue";
export default {
    name:'GridUsuario',
    setup() {
        
        let titulo = ref('Recorriendo listas')
        let lista_usuarios = ref ([])

        const obtener_usuarios = async () => {
            //fetch realiza una peticion http a traves del metodo GET
            const usuarios = await fetch ('https://jsonplaceholder.typicode.com/users')

            lista_usuarios.value = await usuarios.json()
        }

        return {
        titulo,
        lista_usuarios,
        obtener_usuarios
        }
    },

}
</script>
