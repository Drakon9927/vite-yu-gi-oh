<template>
  <div>
    <SingleCard v-for="card in store.carte" :key="card.id" :card="card" />
  </div>
</template>

<script>
import { store } from '../store.js';
import SingleCard from './SingleCard.vue';

export default {
  name: 'CardsList',
  components: {
    SingleCard,
  },
  created() {
    store.fetchCarte();
  },
  data() {
    return {
      store,
    };
  },
};
</script>