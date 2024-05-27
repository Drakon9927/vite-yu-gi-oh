<template>
    <div class="card">
      <h3>{{ card.name }}</h3>
      <img :src="card.card_images[0].image_url" alt="Card image">
      <p>{{ card.desc }}</p>
      <a :href="card.ygoprodeck_url" target="_blank">More Info</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SingleCard',
    props: {
      card: {
        type: Object,
        required: true
      }
    }
  }
  </script>
  
  <style>
  .card {
    border: 1px solid #ccc;
    padding: 20px;
    margin-bottom: 10px;
  }
  </style>