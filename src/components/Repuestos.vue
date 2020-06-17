<template>
  <section id articles-component>
    <div v-if="!repuestos">Cargando...</div>
    <div class="articles-list" v-if="repuestos && repuestos.length >= 1">
      <table id="example" class="display table table-hover table-dark " data-page-length="25" data-order="[[ 1, &quot;asc&quot; ]]" width="100%">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Empresa</th>
            <th scope="col">Area</th>
            <th scope="col">Cargo</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="repuestos in repuestos" :key="repuestos._id">
            <th scope="row">{{repuestos._id}}</th>
            <!-- <td>{{repuestos.empresa}}</td>
            <td>{{repuestos.area}}</td>
            <td>{{repuestos.cargo }}</td> -->
            <td>{{repuestos.Codigo}}</td>
            <td>{{repuestos.CodProv}}</td>
            <td>{{repuestos.Producto }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else-if="repuestos && repuestos.length < 1">No hay Articulos para Mostrar</div>
    <div v-else>Cargando...</div>
  </section>
</template>
<script>
import Global from "../Global";
var $  = require( 'jquery' );









export default {
  name: "Repuestos",
  props: ["repuestos"],
 
  data() {
    
    return {
      url: Global.url,
      data:[],
    };
  },
  methods: {
     
    
  },
  computed: {
    
       
  },
   mounted() {
     
     $('#example').DataTable(function() {
       this.data= this.repuestos;
       console.log(this.data)
       console.log('prueba')
      } );
     
    }
  };
</script>