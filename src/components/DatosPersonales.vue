<template>
<div class="general">
     <Slider texto="Bienvenidos a mi pagina Jose G. Mendoza" />
    <div class="center">
 <section id="content">
 <h2 class="subheader">Datos Personales</h2>  

        <div class="loading" v-if="!persona">
            Cargando...
        </div>
        
        <div id="articles" v-if="persona">
            <article class="article-item">
                <div class="image-wrap">
                    <img :src="urlimg+persona.imagen" :alt="persona.title" v-if="persona.imagen" />
                     <img src="../assets/imagenes/default.png" :alt="persona.title" v-if="!persona.imagen" />
                </div>
                <div >
                <h2>Nombres y Apellidos: {{persona.nombres}} {{persona.apellidos}}</h2>
                <ul>Teléfono: {{persona.telefono}}</ul>
                <ul>email: {{persona.email}}</ul>
                <ul>Direccion: {{persona.direccion}}</ul>
                <ul>Rut: {{persona.rut}}</ul>
                <ul class="datospersonales">Conocimientos: {{persona.informacion}}</ul>
                <ul class="datospersonales">Habilidades: {{persona.habilidades}}</ul>
                <ul class="datospersonales">Actitudes: {{persona.actitudes}}</ul>
                </div>   
                
                
                <div class="crearfix"></div>
            </article>
            
        
        </div>
        </section>
        <Sidebar />
        <div class="clearfix"></div>
        </div>
        
</div>
</template>

<script>
import Slider from "./Slider";
import Sidebar from "./Sidebar";
import axios from "axios";
import Global from "../Global";

export default {
  name: "DatosPersonales",
  components: {
    Slider,
    Sidebar,
    
  },
  mounted() {
    this.getDatos();
    
  },
  data(){
    return{
      newObject: {},
      array2d:[],
      errors: [],
      persona: {},
      url: Global.url,
      urlimg: Global.urlimg,
      id:"1"
    }
  },
  methods: {
    getDatos() {
      axios.get(this.url+this.id).then(res => {
        if (res.statusText === 'OK') {
          this.persona = (res.data[0]);
          console.log(res);
          console.log(res.config.headers);
          console.log(this.urlimg);
          
        }
        console.log(res.statusText);
        
      })
        .catch(e=> {
          this.errors.push(e)
        })      ;
      
    },
   

    
  },
  computed:{
     
  }
};
</script>