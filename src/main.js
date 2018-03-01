import Vue from 'vue';
import App from './App.vue';

//Importando dependências
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';

//Registrando dependências
Vue.use(VueResource);
Vue.use(VueRouter);

//Criamos uma instanvia de VueRouter, passando como parâmetro as rotas do
// import routes from './routes'
const router = new VueRouter({ 
  routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router, //depois associa ao Vue Instance
  render: h => h(App)
})
