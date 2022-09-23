import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const countStore = ref(10)
  const doubleCount = computed(() => countStore.value * 2)
  function increment() {
    countStore.value++
  }

  return { countStore, doubleCount, increment }
})
