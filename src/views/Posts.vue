<template>
  <h2>Post list</h2>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
    </li>

  </ul>

  <div>
    <button class="counter-button" :class="{'yellow' : oddOrEven === 'odd'}" @click="increaseCounter(1)">
      {{counterData.counter }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCounter } from '../use/useCounter';

const posts = ref([
  { id: 'id1', title: 'Post nuber 1' },
  { id: 'id2', title: 'Post nuber 2' },
  { id: 'id3', title: 'Post nuber 3' },
])

const { counterData, oddOrEven, increaseCounter } = useCounter()

</script>

<style scoped>
.counter-button {
  font-size: 3rem;
  background-color: coral;
  width: 30%;
}

.counter-button.yellow {
  background-color: yellow;
}
</style>