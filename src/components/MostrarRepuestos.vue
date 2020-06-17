<template>
<div class="general">
     <Slider texto="Bienvenidos a mi pagina Jose G. Mendoza"  />
    <div class="center">
 
            <section id="content">
            <h2 class="subheader">Repuestos</h2>
            <!-- listado articulos -->
            <div id="articles">
                <Repuestos :repuestos="repuestos"/>

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
import Repuestos from "./Repuestos";
export default {
  name: "MostrarTrabajos",
  components: {
    Slider,
    Sidebar,
    Repuestos
  },
  mounted() {
    
    this.getRepuestos();
  },
  data(){
    return{
      repuestos: [],
      url: Global.urlRepuestos,
      id: 1
    }
  },
  methods: {
    getRepuestos() {
      axios.get(this.url+"repuestos").then(res => {
        if (res.statusText === "OK") {
          this.repuestos = res.data;
          console.log(res);
          console.log(res.data);
          console.log(this.repuestos);
          console.log(res.config.headers);
          
          
        }
        console.log(res.statusText);
      });
    }
  }
};
</script>