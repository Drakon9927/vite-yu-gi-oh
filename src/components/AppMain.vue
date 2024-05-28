

<template>
    <main>
      <div class="container-fluid w-100 mybgc">
        <div class="container mymaxwidth p-4">
          <select id="exampleSelect">
            <option value="opzione1">Alien</option>
            <option value="opzione2">Drago</option>
          </select>
          <div class="container mymaxwidth">
          
            <cards-list></cards-list>
          </div>
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import CardsList from './CardsList.vue'; 
  
  export default {
    components: {
      CardsList 
    }
  }
  </script>
  
  <style scoped>
  .mybgc {
    background-color: #C08234;
    height: 100vh;
  }
  
  .mymaxwidth {
    max-width: 75%;
  }
  </style>