<template>
  <section id articles-component>
    <div v-if="!estudios">Cargando...</div>
    <div class="articles-list" v-if="estudios && estudios.length >= 1">
      <article class="article-item" v-for="estudios in estudios" :key="estudios._id">
        <div class="image-wrap">
          <img :src="estudios.imagen" :alt="estudios.instituto" v-if="estudios.imagen" />
          <img src="../assets/imagenes/default.png" :alt="estudios.instituto" v-if="!estudios.imagen" />
        </div>

        <h2>
          <router-link :to="{name: 'estudio', params: {id: estudios.id}}"> Instituto: {{estudios.instituto}}</router-link>
        </h2>
        <span class="date">Fecha: {{estudios.year }}</span>
        <p>Titulo Obtenido: {{estudios.grado_obtenido}}</p>
        <div class="crearfix"></div>
      </article>
    </div>
    <div v-else-if="estudios && estudios.length < 1">No hay Articulos para Mostrar</div>
    <div v-else>Cargando...</div>
  </section>
</template>
<script>
import Global from "../Global";
export default {
  name: "Estudios",
  props: ["estudios"],
  data() {
    return {
      url: Global.url
    };
  }
};
</script>