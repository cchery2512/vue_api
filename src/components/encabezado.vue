<template lang="pug"> 
        nav
            v-list
                v-toolbar.dense
                    v-toolbar-title Aplicación Usuarios
                    v-spacer
                    v-btn.icon
                        //v-icon search
                        router-link(tag="li" to="/" active-class="active" exact)
                            a Inicio
                    v-btn.icon
                        router-link(tag="li" to="/usuarios" active-class="active" exact)
                            a Usuarios
</template>
<!--template>
    <div class="header clearfix">
        <nav>
            <ul class="nav nav-pills float-right">
                <li class="nav-item"><a class="nav-link active" data-toggle="pill" href="">Inicio</a></li>
                <li><a href="">Usuarios</a></li>
            </ul>
            <h3 class="text-muted">Aplicación Usuarios</h3>
        </nav>
    </div>
</template-->
