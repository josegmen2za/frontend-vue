<template>
<section class="skills-section section">
    <h2 class="section-title p-5 m-3"><span class="icon-holder"><i class="fas fa-rocket"></i></span>Habilidades &amp; competencia</h2>
    <div class="skillset">        
        <div class="item">
            <h3 class="level-title">Node.js</h3>
            <div class="progress level-bar">
                <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
            </div>                               
        </div><!--//item-->
        
        <div class="item">
            <h3 class="level-title">Javascript </h3>
            <div class="progress level-bar">
                <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
            </div>                              
        </div><!--//item-->
        <div class="item">
            <h3 class="level-title">jQuery</h3>
            <div class="progress level-bar">
                <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 40%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </div>                              
        </div><!--//item-->
        
        <div class="item">
            <h3 class="level-title">Angular</h3>
            <div class="progress level-bar">
                <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 70%" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
            </div>                                 
        </div><!--//item-->
        <div class="item">
            <h3 class="level-title">React</h3>
            <div class="progress level-bar">
                <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 58%" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100"></div>
            </div>                              
        </div><!--//item-->
        <div class="item">
            <h3 class="level-title">Vue js</h3>
            <div class="progress level-bar">
                <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 70%" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100"></div>
            </div>                              
        </div><!--//item-->
        <div class="item">
            <h3 class="level-title">HTML5 &amp; CSS3</h3>
            <div class="progress level-bar">
                    <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
            </div>                                
        </div><!--//item-->
        
        <div class="item">
            <h3 class="level-title">Mongodb y Mysql</h3>
            <div class="progress level-bar">
                <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
            </div>                                  
        </div><!--//item-->
        
        <div class="item">
            <h3 class="level-title">Photoshop</h3>
            <div class="progress level-bar">
                <div class="progress-bar theme-progress-bar" role="progressbar" style="width: 90%" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
            </div>                                 
        </div><!--//item-->
        
    </div>  
</section><!--//skills-section-->


</template>

<script>

/* import axios from "axios";
import Global from "../Global"; */

export default {
  name: "Skill",
  components: {

  },
  mounted() {
    
    this.getLastArticles();
  },
  data(){
    return{
/*       articles: [],
      url: Global.url */
    }
  },
  methods: {
    /* getLastArticles() {
      axios.get(this.url+"articles/true").then(res => {
        if (res.data.status === "success") {
          this.articles = res.data.articles;
        }
        console.log(this.articles);
      });
    } */
  }
};
</script>