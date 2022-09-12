<script setup>
import { reactive, computed, watch } from 'vue'
import { useCounter } from '../use/useCounter';
// const counter = ref(5),
//   counterTitle = ref('My counter')

const appTitle = 'My app counter'

const { counterData, oddOrEven, increaseCounter, decreaseCounter } = useCounter()


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
