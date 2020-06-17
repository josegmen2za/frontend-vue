<template>
<div class="general">
     <Slider texto="Bienvenidos a mi Sitio Web"  />
    <div class="center">
  <section id="content">
           <div class="container-fluid d-flex flex-column justify-content-center h-100 align-items-center pt-5 fondo-2 pb-5">
        <div class="pt-5 justify-content-center">
            <h1 class="pt-5 text-center">Habilidades y Destresas</h1>
            <ul class="text-left">
              
              <li>Desarrollo de Aplicaciones en Visual Basic 6, Visual.net.</li>
              <li>Frontend en Angular, React, Vue js,node.js, typescript y HTML5 y CSS3</li>
              <li>Backend con javascript.</li>
              <li>Diseño de Bases de Datos en SQL Server, Mysql, Mongodb</li>
              <li>Instalación y administración de servidores Sql Server Mysql, Instalación de Servidores Web Apache. Con php y Servidor Ftp para Intranet.</li>
              <li>Instalacion de servidores de Windows y de Linux.</li>
              <li>Mantenimiento y administración de Páginas Web con Wordpress y Joomla (Gestor de Contenidos para páginas Web).</li>
              <li>Mantenimiento de equipos de computación e instalación de hardware externos para Pc. Instalación de Cliente de Antivirus.</li>
              <li>Instalación de Puntos de Red y Cableado Estructurado y fibra optica, Instalaciones de Cableados Eléctrico de Baja Tensión (corriente débil). instalación y configuración de redes alámbricas y wifi, instalación de redes de fibra óptica</li>
              <li>Idiomas: español (Nativo), inglés (Técnico).</li>
            </ul>
            </div>
            <div class="text-center">
                <router-link to="/inicio" class="btn btn-danger ">Volver</router-link>
              
            </div>
            
          </div>
  </section>
        <Sidebar />
        <div class="clearfix"></div>
        </div>
        
</div>
</template>

<script>


import Sidebar from "./Sidebar";

import Global from "../Global";

export default {
  name: "Conocimientos",
  
  components: {
      
    
    Sidebar,
    
  },
  mounted() {
    
    
  },
  data(){
    return{
      
      url: Global.url,
          intro:'Desarrollador Full stack con experiencia en desarrollo de aplicaciones en Visual Studio.net, desarrollador frontend en Angular, React, javascript, Vuejs node.js typescript, HTML5, CSS3, Backend con javascript, administración de bases de datos SQL Server y Mysql, Mongodb, instalación de software, instalación y configuración de redes alámbricas y wifi, instalación y configuración de servidores, web, proxy, ftp, de Bases de Datos en Linux y Windows, Proactivo, dinámico, con alto interés en aprender y adquirir nuevos conocimientos, con nivel del idioma inglés medio.'

    };
    
  },
  methods: {
    
  }
};
</script>