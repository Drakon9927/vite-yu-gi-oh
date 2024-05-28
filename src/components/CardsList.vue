<template>
  <div>
    <single-card
      v-for="card in carte"
      :key="card.id"  
      :card="card"
    ></single-card>
  </div>
</template>

<script>
import { store } from '../store.js';

export default {
  name: 'CardsList',
  components: {
    SingleCard: () => import('./SingleCard.vue')
  },
  created() {
    store.fetchCarte(); 
  },
  data() {
    return {
      carte: store.carte
    };
  }
}
</script>