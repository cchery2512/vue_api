<template>
  <v-app>
    <v-flex xs12 sm6 offset-sm3>
      
        <v-card flat tile>
          <encabezado></encabezado>
          <router-view></router-view>
        </v-card>
     
    </v-flex>
  </v-app>
</template>

<script>
import Encabezado from './components/encabezado.vue'
export default {
  components: {
    encabezado: Encabezado
  }
}
</script>
