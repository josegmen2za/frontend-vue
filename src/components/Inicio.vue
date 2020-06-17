<template>
<div class="general">
     <Slider texto="Bienvenidos a mi Sitio Web"  home="true" />
    <div class="center">
 
            <section id="content">
           
            
            <!-- listado articulos -->
            <div >
                <section  >
                            <h1 class="subheader">Información General</h1>
                            <p class="datospersonales">{{intro}}</p>
                            <h2 class="subheader">Backend utilizado en este proyecto</h2>
                            <router-link to="/conocimientos" class="btn-white" >Conocimientos</router-link>
                            <li class="website"><i class="fa fa-globe"></i><a href="https://backend-cv.herokuapp.com/api/trabajos" target="blank"> Api 1</a></li>

                            <li class="website"><i class="fa fa-globe"></i><a href="https://backend-cv.herokuapp.com/api/estudios" target="blank">  Api 2</a></li>

                            <li class="website"><i class="fa fa-globe"></i><a href="https://backend-cv.herokuapp.com/api/cvspersona" target="blank">  Api 3</a></li>

                            
                        </section>
                <Skill/>

            </div>
            
        </section>
        <Sidebar />
        <div class="clearfix"></div>
        </div>
        
</div>
</template>

<script>
import Skill from "./Skill";
import Slider from "./Slider";
import Sidebar from "./Sidebar";

import Global from "../Global";

export default {
  name: "Inicio",
  components: {
    Skill,  
    Slider,
    Sidebar,
    
  },
  mounted() {
    
    
  },
  data(){
    return{
      articles: [],
      url: Global.url,
          intro:'Desarrollador Full stack con experiencia en desarrollo de aplicaciones en Visual Studio.net, desarrollador frontend en Angular, React, javascript, Vuejs node.js typescript, HTML5, CSS3, Backend con javascript, administración de bases de datos SQL Server y Mysql, Mongodb, instalación de software, instalación y configuración de redes alámbricas y wifi, instalación y configuración de servidores, web, proxy, ftp, de Bases de Datos en Linux y Windows, Proactivo, dinámico, con alto interés en aprender y adquirir nuevos conocimientos, con nivel del idioma inglés medio.'

    };
    
  },
  methods: {

  }
};
</script>