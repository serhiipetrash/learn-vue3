<script setup>
import { reactive } from 'vue'
// const counter = ref(5),
//   counterTitle = ref('My counter')

const appTitle = 'My app counter'

const counterData = reactive({
  counter: 10,
  title: 'My new title'
})
const increaseCounter = () => counterData.counter++
const decreaseCounter = () => counterData.counter--
</script>

<template >
  <div class="home">
    <h1>{{ appTitle }}</h1>
    <h2>{{ counterData.title }} :</h2>
    <div>
      <button @click="decreaseCounter" class="btn">-</button>
      <span class="counter">{{ counterData.counter }}</span>
      <button @click="increaseCounter" class="btn">+</button>
    </div>

    <div class="edit">
      <h4>Edit counter title</h4>
      <input v-model="counterData.title" type="text">
    </div>

  </div>

</template>

<style>
.home {
  text-align: center;
  padding: 20px;
}

.btn,
.counter {
  font-size: 40px;
  margin: 10px;
}

.edit {
  margin-top: 40px;
}
</style>
