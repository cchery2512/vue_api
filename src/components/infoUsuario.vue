<template lang="pug">
    div
        h3 Información del Usuario
        div
            p
                <strong>Nombre: </strong>{{nombre}}
                <strong>Correo Electrónico: </strong>{{email}}
        button.btn.btn-primary(@click="volver") Volver
</template>

<script>
export default {
    data(){
        return {
            nombre: '',
            email: ''
        }
    },
    /*watch: {
        $route(){
            let id = this.$route.params.id 
            this.$http.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(respuesta => {
                 return respuesta.json()
            })
            .then(respuesta => {
                this.nombre = respuesta.name
                this.email = respuesta.email
            })
        }
    },*/
    created() {
        let id = this.$route.params.id 
        this.$http.get('https://jsonplaceholder.typicode.com/users/' + id)
            .then(respuesta => {
                 return respuesta.json()
            })
            .then(respuesta => {
                this.nombre = respuesta.name
                this.email = respuesta.email
            })
    },
    methods: {
        volver(){
            //this.$router.push('/usuarios')
            this.$router.push({name:'usuariosComponent'})
        }
    },
}
</script>
