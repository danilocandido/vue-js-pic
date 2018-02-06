<template>
  <div>
    <h1>{{ titulo }}</h1>
    <ul>
      <li v-for="foto in fotos">
        <img :src="foto.url" :alt="foto.titulo">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {

    return {
      titulo: 'Alurapic',
      fotos: []
    }

  },

  created() {
    let promisse = this.$http.get('http://localhost:3000/v1/fotos');
    
    promisse
      .then(response => response.json())
      .then(fotos => this.fotos = fotos);
  }
}

</script>

<style>

</style>
