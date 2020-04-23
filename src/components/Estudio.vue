<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="estudio">
          <div class="image-wrap">
            <img :src="estudio.image" :alt="estudio.instituto" v-if="estudio.image" />
            <img src="../assets/imagenes/default.png" :alt="estudio.instituto" v-if="!estudio.image" />
          </div>
          <h1 class="subheader">{{estudio.instituto}}</h1>
          <span class="date">{{estudio.year | moment("from", "now")}}</span>
          <p>{{estudio.grado_obtenido}}</p>

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
      estudio: null,
      url: Global.url
    };
  },
  methods: {
    getEstudio(estudioId) {
      axios.get(this.url + 'estudio/' + estudioId).then(res => {
        if (res.data.status === "success") {
          this.estudio = res.data.EstudiosRealizados;
        }
        console.log(this.estudio);
      });
    }
  }
};
</script>