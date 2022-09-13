import { reactive, computed, watch } from 'vue'

const counterData = reactive({
  counter: 10,
  title: 'My new title'
})

export function useCounter() {
  
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

  return {
    counterData, 
    oddOrEven, 
    increaseCounter, 
    decreaseCounter
  }
}