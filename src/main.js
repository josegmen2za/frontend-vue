import Vue from 'vue';
import App from './App.vue';
import 'jquery';
import 'popper.js';
import './assets/css/Skill.css';
import 'bootstrap';
import  'datatables.net-bs4';
import 'datatables.net-autofill-bs4';
import 'datatables.net-buttons-bs4';
import 'datatables.net-select-bs4';

import VueRouter from 'vue-router';

import MostrarEstudios from './components/MostrarEstudios';
import MostrarTrabajos from './components/MostrarTrabajos';
import MostrarRepuestos from './components/MostrarRepuestos';

import Inicio from './components/Inicio';
import Conocimientos from './components/Conocimientos';
import DatosPersonales from './components/DatosPersonales';

import Estudio from './components/Estudio';
import Trabajo from './components/Trabajo';
import Repuesto from './components/Repuesto';




import ErrorComponent from './components/ErrorComponent';

import Vuelidate from 'vuelidate';
import VueMoment from 'vue-moment';
import moment from 'moment';
import 'moment/locale/es';


import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'





library.add(faUserSecret, faFontAwesome, )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false










Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuelidate);



Vue.use(VueMoment, {
  moment
});

const routes = [

  {path: '/estudios', component:MostrarEstudios},
  {path: '/trabajos', component:MostrarTrabajos},
  {path: '/repuestos', component:MostrarRepuestos},
  {path: '/inicio', component:Inicio},
  {path: '/conocimientos', component:Conocimientos},
  {path: '/datospersonales', component:DatosPersonales},



  {path: '/estudio/:id', name: 'estudio', component: Estudio},
  {path: '/trabajo/:id', name: 'trabajo', component: Trabajo},
  {path: '/repuesto/:id', name: 'repuesto', component: Repuesto},

  {path: '*', component: ErrorComponent},
  {path: '/', component:Inicio},
  
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
