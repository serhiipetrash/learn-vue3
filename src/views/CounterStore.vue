<script setup>
import { useCounterStore } from '../stores/counter'

const c = useCounterStore()

</script>

<template>
  <br />
  <br />
  <h2>I use store: {{ c.countStore }}</h2>
  <h2>counter: {{ c.doubleCount }}</h2>
  <h2>double counter</h2>
  <br />
  <button @click="c.increment">Increase counter</button>

</template>