<template>
    <div>
      <single-card
        v-for="card in dati"
        :key="card.name"
        :card="card"
      ></single-card>
    </div>
  </template>
  
  <script>
  import { dati } from './carte.js'; 
  
  export default {
    name: 'CardsList',
    components: {
      SingleCard: () => import('./SingleCard.vue') // 
    },
    data() {
      return {
        dati
      };
    }
  }
  </script>