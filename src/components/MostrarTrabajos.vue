<template>
<div class="general">
     <Slider texto="Bienvenidos a mi pagina Jose G. Mendoza"  />
    <div class="center">
 
            <section id="content">
            <h2 class="subheader">Estudios Realizados</h2>
            <!-- listado articulos -->
            <div id="articles">
                <Trabajos :trabajos="trabajos"/>

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
import Trabajos from "./Trabajos";
export default {
  name: "MostrarTrabajos",
  components: {
    Slider,
    Sidebar,
    Trabajos
  },
  mounted() {
    
    this.getTrabajos();
  },
  data(){
    return{
      trabajos: [],
      url: Global.url
    }
  },
  methods: {
    getTrabajos() {
      axios.get(this.url+"trabajos").then(res => {
        if (res.data.status === "success") {
          this.trabajos = res.data.TrabajosRealizados;
        }
        console.log(this.trabajos);
      });
    }
  }
};
</script>