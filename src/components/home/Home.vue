<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre por parte do título">

    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <img class="image-responsiva" :src="foto.url" :alt="foto.titulo"/>
          <meu-botao tipo="button" rotulo="REMOVER" @botaoAtivado="remove(foto)" :confirmacao="true"></meu-botao>
        </meu-painel>)
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import Botao from '../shared/botao/Botao.vue';

export default {

  components: {
    'meu-painel': Painel,
    'meu-botao': Botao
  },

  data() {
    return {
      titulo: 'Alurapic',
      fotos: [],
      filtro: ''
    }
  },

  computed: {
    fotosComFiltro(){
      if(this.filtro){
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo))
      }else{
        return this.fotos;
      }
    }
  },

  methods:{
    remove(foto){
      alert(foto.titulo);
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
  .centralizado {
    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {
    display: inline-block;
  }

  .image-responsiva {
    width: 100%;
  }

  .filtro {
    display: block;
    width: 100%;
  }
</style>
