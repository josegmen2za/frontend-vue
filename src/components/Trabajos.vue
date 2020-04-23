<template>
  <section id articles-component>
    <div v-if="!trabajos">Cargando...</div>
    <div class="articles-list" v-if="trabajos && trabajos.length >= 1">
      <article class="article-item" v-for="trabajos in trabajos" :key="trabajos._id">
        <div class="image-wrap">
          <img :src="trabajos.image" :alt="trabajos.empresa" v-if="trabajos.image" />
          <img src="../assets/imagenes/default.png" :alt="trabajos.empresa" v-if="!trabajos.image" />
        </div>

        <h2>
          <router-link :to="{name: 'trabajo', params: {id: trabajos._id}}">{{trabajos.empresa}}</router-link>
        </h2>
        <span class="date">{{trabajos.cargo }}</span>
        <!-- <p>{{trabajos.grado_obtenido}}</p> -->
        <div class="crearfix"></div>
      </article>
    </div>
    <div v-else-if="trabajos && trabajos.length < 1">No hay Articulos para Mostrar</div>
    <div v-else>Cargando...</div>
  </section>
</template>
<script>
import Global from "../Global";
export default {
  name: "Trabajos",
  props: ["trabajos"],
  data() {
    return {
      url: Global.url
    };
  }
};
</script>