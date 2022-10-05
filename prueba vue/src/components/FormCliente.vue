<template>
    <div class="row">
        <div class="col-lg-4">
            <h3>Probando componentes</h3>
            <div class="mb-3">
                <label class="form-label">Nombre</label>
                <input v-model="nombre" class="form-control" type="text">
            </div>
            <button @click="mostrar()" class="btn btn-success">Aceptar</button>
        </div>
    </div>

    <div class="col-lg-8">
        <h4>{{titulo}}</h4>
        <table class="table">
            <thead>
                <tr>
                    <th>N°</th>
                    <th>Nombre</th>
                    <th>Usuario</th>
                    <th>Correo</th>
                    <th>Website</th>
                </tr>
            </thead>
            
            <tbody>
                <tr v-for="(u,index) of lista_productos" v-bind:key="index">
                    <td>{{index}}</td>
                    <td>{{u.name}}</td>
                    <td>{{u.username}}</td>
                    <td>{{u.email}}</td>
                    <td>{{u.website}}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
</template>
<script>
    /* eslint-disable */
    import { ref } from 'vue'
    export default {
        name: 'FormCliente',
        setup() {

            //sector de variables
            let nombre = ref ('')
            let mensaje = ref ('Probando el uso de VUE')
            let lista_usuarios = ref ([])
            let titulo = ref ('Lista de usuarios') 

            //sector de funciones
            function mostrar() {
                alert (nombre.value)
            }

         

            async function consumir_api(){
                const usuarios = await fetch('https://jsonplaceholder.typicode.com/users')
                lista_usuarios.value = await usuarios.json()
            }

            return{
                nombre,
                mostrar,
                mensaje,
                consumir_api,
                lista_usuarios,
                titulo
            }
        },
        created(){
            this.consumir_api()
        }
    }
</script>