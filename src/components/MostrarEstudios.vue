<template>
<div class="general">
     <Slider texto="Bienvenidos a mi pagina Jose G. Mendoza"  />
    <div class="center">
 
            <section id="content">
            <h2 class="subheader">Estudios Realizados</h2>
            <!-- listado articulos -->
            <div id="articles">
                <Estudios :estudios="estudios"/>

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
import Estudios from "./Estudios";
export default {
  name: "MostrarEstudios",
  components: {
    Slider,
    Sidebar,
    Estudios
  },
  mounted() {
    
    this.getEstudios();
  },
  data(){
    return{
      estudios: [],
      url: Global.url
    }
  },
  methods: {
    getEstudios() {
      axios.get(this.url+"estudios").then(res => {
        if (res.data.status === "success") {
          this.estudios = res.data.EstudiosRealizados;
        }
        console.log(this.estudios);
      });
    }
  }
};
</script>