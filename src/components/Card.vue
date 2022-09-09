<script setup>
import { defineProps } from 'vue';

const props = defineProps(['title', 'desc', 'cardimg'])

</script>

<template>
  <div class="card">
    <div class="card-img">
      <img :src="cardimg" alt="card img">
    </div>
    <div class="card-content">
      <h3> {{ title }}</h3>
      <p> {{ desc }}</p>

    </div>
    <div class="card-action">
      <button>Add</button>
    </div>
  </div>


</template>

<style >
.card {
  width: 300px;
  border: 1px solid #9c9c9c;
  box-shadow: 2px 2px 8px #9c9c9c;
  margin: 0 auto;
}

.card-img img {
  width: 100%;
}

.card-content {
  padding: 0.5rem;
}

.card-action {
  padding: .5rem;
}

.card-action button {
  padding: 8px 16px;
}
</style>