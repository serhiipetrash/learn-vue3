<script setup>
import Card from '../components/Card.vue';
import { ref, inject } from 'vue'
const cards = ref([
  { id: 1, title: 'Card title 1', cardimg: 'https://dummyimage.com/300x300/9c9c9c/fff.jpg', desc: 'Deccription card, some text Lorem ipsum dolor sit amet consectetur.' },
  { id: 2, title: 'Card title 2', cardimg: 'https://dummyimage.com/300x300/9c9c9c/f0f.jpg', desc: 'Deccription card, some text Lorem ipsum dolor sit amet consectetur.' },
  { id: 3, title: 'Card title 3', cardimg: 'https://dummyimage.com/300x300/9c9c9c/ff0.jpg', desc: 'Deccription card, some text Lorem ipsum .' },
  { id: 4, title: 'Card title 4', cardimg: 'https://dummyimage.com/300x300/9c9c9c/00f.jpg', desc: 'Deccription card, some text Lorem ipsum dolor sit amet consectetur.' },
  { id: 5, title: 'Card title 5', cardimg: 'https://dummyimage.com/300x300/9c9c9c/0f0.jpg', desc: 'Deccription card, some text Lorem ipsum dolor .' },
  { id: 6, title: 'Card title 6', cardimg: 'https://dummyimage.com/300x300/9c9c9c/f00.jpg', desc: 'Deccription card, some text Lorem ipsum dolor sit amet .' }
])

const userProfile = inject('userProfile')

</script>

<template>
  <h2>Cards list</h2>
  <h3>User profile:</h3>
  <p>Name: {{ userProfile.name }},
    Company: {{ userProfile.company }},
    Position: {{ userProfile.position }},
    Skills: {{userProfile.skills}}.

  </p>
  <br />
  <div class="cards-container">
    <Card v-for="item in cards" :key="item.id" :title="item.title" :desc="item.desc" :cardimg="item.cardimg"></Card>

  </div>

</template>

<style scoped>
h2 {
  text-align: center;
  margin: 2rem;
}

.cards-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
}

@media (max-width: 900px) {
  .cards-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 400px) {
  .cards-container {
    grid-template-columns: 1fr;
  }
}
</style>