<script setup>
import { reactive, computed, watch } from 'vue'
// const counter = ref(5),
//   counterTitle = ref('My counter')

const appTitle = 'My app counter'

const counterData = reactive({
  counter: 10,
  title: 'My new title'
})

watch(() => counterData.counter, (newCounter) => {
  if (newCounter === 20) {
    alert('Counter more then 20')
  }
})

const oddOrEven = computed(() => {
  if (counterData.counter % 2 === 0) return 'even'
  else return 'odd'
})

const increaseCounter = (amount) => counterData.counter += amount
const decreaseCounter = (amount) => counterData.counter -= amount
</script>

<template >
  <div class="home">
    <h1>{{ appTitle }}</h1>
    <h2>{{ counterData.title }} :</h2>
    <div>
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.counter }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

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
