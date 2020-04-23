<template>
  <div class="general">
    <div class="center">
      <section id="content">
        <article class="article-item article-detail" v-if="trabajo">
          <div class="image-wrap">
            <img :src="trabajo.image" :alt="trabajo.empresa" v-if="trabajo.image" />
            <img src="../assets/imagenes/default.png" :alt="trabajo.empresa" v-if="!trabajo.image" />
          </div>
          <h1 class="subheader">{{trabajo.empresa}}</h1>
          <span class="date">{{trabajo.cargo }}</span>
         

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
  name: "Trabajo",
  components: {
    Sidebar
  },
  mounted() {
    var trabajoId = this.$route.params.id;
    this.getTrabajo(trabajoId);
  },
  data() {
    return {
      trabajo: null,
      url: Global.url
    };
  },
  methods: {
    getTrabajo(trabajoId) {
      axios.get(this.url + 'trabajo/' + trabajoId).then(res => {
        if (res.data.status === "success") {
          this.trabajo = res.data.trabajorealizados;
        }
        console.log(this.trabajo);
      });
    }
  }
};
</script>