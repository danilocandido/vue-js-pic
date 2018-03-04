<template>
  <div class="corpo">
    
    <meu-menu :rotas="routes"/>

    <!-- Hora tem que exibir um componente, hora outro usando as Rotas -->
    <router-view></router-view>
  </div>
</template>

<script>
import { routes } from './routes';
import Menu from './components/shared/menu/Menu.vue';

export default {

  components: {
    'meu-menu': Menu
  },

  data() {
    return {
      routes
    }
  }

}
</script>

<style>
  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }
</style>
