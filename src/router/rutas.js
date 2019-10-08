import InicioComponent from '@/components/inicio.vue'
//import UsuariosComponent from '@/components/usuarios.vue'
import InfoUsuario from '@/components/infoUsuario.vue'

const UsuariosComponent = resolve => {
    require.ensure(['@/components/usuarios.vue'], () => {
        resolve(require('@/components/usuarios.vue'))
    })
}

export const rutas = [
    {path: '', name: 'inicioComponent', component: InicioComponent},
    /*{path: '/usuarios', name: 'usuariosComponent', component: UsuariosComponent, children:[
        {path: ':id', name: 'infoUsuario' ,component: InfoUsuario}
    ]}*/
    {path: '/usuarios', name: 'usuariosComponent', component: UsuariosComponent},
    {path: '/usuarios/id', name: 'infoUsuario' ,component: InfoUsuario},
    {path: '/users', redirect: '/usuarios'},
    {path: '*', redirect: '/'}
]