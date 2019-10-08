<template>
    <v-data-table
    :headers="cabecera"
    :items="usuarios"
    class="elevation-1">

        <template v-slot:items="props">
            <tr @click="verInfo(props.item.id)">
                <td class="text-xs-center">
                    <!--router-link  tag="td" :to="{name: 'infoUsuario', params: {id: props.item.id}}"-->
                    {{ props.item.name }}
                    <!--/router-link-->    
                </td>
            </tr>
        </template>
    </v-data-table>
    
    <!--div>
        v-toolbar(tile) Lista de Usuarios
        v-list.two-line
            router-link(tag="li" :to="{name: 'infoUsuario', params: {id: usuario.id}}" :key='usuario.id' v-for='usuario in usuarios') {{usuario.name}}
        router-view</div-->
                
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            //usuarios: {},
            cabecera: [
                {
                    text: 'Lista de nombres',
                    align: 'center',
                    sortable: true,
                    value: 'name'
                }
            ],
            usuarios: [{

            }]
        }
    },
    created() {
        this.$http.get('https://jsonplaceholder.typicode.com/users')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(respuesta => {
                this.usuarios = respuesta
                
            })
    },
    methods: {
        verInfo(id){
        //console.log(id)
        this.$router.push({ name: 'infoUsuario', params: {id}})
        }

    }
}
</script>