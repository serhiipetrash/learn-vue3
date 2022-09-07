<template>
  <h2>Post details </h2>
  <p> This is post # {{ $route.params.id }} </p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptas.</p>
  <br />
  <RouterLink to="/posts"> Back</RouterLink>
  <br />
  <button @click="goToFirstPost">To first post</button>
  <button @click="goHome">go Home in 3 sec</button>
  <button @click="showPostId">Show post ID</button>

</template>

<script setup>
import { useRouter } from 'vue-router';
import { useRoute } from 'vue-router';

const router = useRouter()
const route = useRoute()

const goToFirstPost = () => {
  router.push({
    name: 'post',
    params: { id: 'id1' }
  })
}
const goHome = () => {
  setTimeout(() => {
    router.push({ name: 'home' })
  }, 3000)
}
const showPostId = () => {
  alert(`The ID of this post is: ${route.params.id}`)
}
</script>