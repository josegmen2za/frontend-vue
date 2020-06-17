<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="estudio">
          <div class="image-wrap">
            <img :src="estudio.imagen" :alt="estudio.instituto" v-if="estudio.imagen" />
            <img src="../assets/imagenes/default.png" :alt="estudio.instituto" v-if="!estudio.imagen" />
          </div>
          <h1 class="subheader">Instituto: {{estudio.instituto}}</h1>
          <span class="date">Fecha: {{estudio.year }}</span>
          <p>Titulo Obtenido: {{estudio.grado_obtenido}}</p>

          <div class="crearfix"></div>
         <!--  <router-link :to="'/editar/'+estudio._id" class="btn btn-warnig">Editar</router-link>
          <a @click="deleteArticle(article._id)" class="btn btn-danger">Eliminar</a> -->
        </article>
      </section>
      <Sidebar />
      <div class="clearfix"></div>
    </div>
  </div>
</template>

<script>
import Sidebar from "./Sidebar";
import axios from "axios";
import Global from "../Global";
/* import swal from "sweetalert"; */

export default {
  name: "Estudio",
  components: {
    Sidebar
  },
  mounted() {
    var estudioId = this.$route.params.id;
    this.getEstudio(estudioId);
  },
  data() {
    return {
      estudio: [],
      url: Global.url
    };
  },
  methods: {
    getEstudio(estudioId) {
      axios.get(this.url+'estudio/'+estudioId).then(res => {
        if (res.statusText === "OK") {
          this.estudio = res.data[0];
          console.log(res);
          console.log(res.data);
          console.log(this.estudio);
          console.log(res.config.headers);
          
          
        }
        console.log(res.statusText);
        
      });
    }
  }
};
</script>