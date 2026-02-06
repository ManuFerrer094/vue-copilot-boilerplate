import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // State
  const count = ref(0)

  // Getters
  const doubleCount = computed(() => count.value * 2)
  const isPositive = computed(() => count.value > 0)

  // Actions
  function increment(): void {
    count.value++
  }

  function decrement(): void {
    count.value--
  }

  function reset(): void {
    count.value = 0
  }

  function setCount(value: number): void {
    count.value = value
  }

  return {
    count,
    doubleCount,
    isPositive,
    increment,
    decrement,
    reset,
    setCount,
  }
})
