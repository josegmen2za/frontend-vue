<template>
    <header id="header">
        <div class="center">
            <!--Logo-->
            <div id="logo">
                <img src="../assets/imagenes/Vuejs_Logo_2.svg" class="app-logo" alt="logotipo" />
                <span id="brand">
                    <strong>joseg</strong>Mendoza
                </span>
            </div>
            <!--Menu-->
            <nav id="menu">
                <ul>
                    <li>
                        <router-link to="/inicio" active-class="active">Inicio</router-link>
                    </li>
                    <li>
                        <router-link to="/datospersonales" active-class="active">Datos Personales</router-link>
                    </li>
                    <li>
                        <router-link to="/estudios" active-class="active">Estudios Realizados</router-link>
                    </li>
                    <li>
                        <router-link to="/trabajos" active-class="active">Experiencias Laborales</router-link>
                    </li>
                    <li>
                        <router-link to="/repuestos" active-class="active">Repuestos</router-link>
                    </li>

                </ul>
            </nav>
            <!-- Limpiar los flotados -->
            <div class="crearfix"></div>
        </div>

    </header>
</template>

<script>
export default {
     name:'MiComponente',
    

}
</script>
