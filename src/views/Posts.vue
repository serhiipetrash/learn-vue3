<template>
  <h2>Post list</h2>
  <ul>
    <li v-for="post in posts" :key="post.id">
      <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
    </li>

  </ul>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  { id: 'id1', title: 'Post nuber 1' },
  { id: 'id2', title: 'Post nuber 2' },
  { id: 'id3', title: 'Post nuber 3' },
])
</script>