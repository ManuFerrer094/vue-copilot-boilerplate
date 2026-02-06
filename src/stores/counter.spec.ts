import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '@/stores/counter'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('initializes with count of 0', () => {
    const store = useCounterStore()
    expect(store.count).toBe(0)
  })

  it('increments count', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })

  it('decrements count', () => {
    const store = useCounterStore()
    store.decrement()
    expect(store.count).toBe(-1)
  })

  it('resets count to 0', () => {
    const store = useCounterStore()
    store.increment()
    store.increment()
    store.reset()
    expect(store.count).toBe(0)
  })

  it('sets count to specific value', () => {
    const store = useCounterStore()
    store.setCount(42)
    expect(store.count).toBe(42)
  })

  it('computes doubleCount correctly', () => {
    const store = useCounterStore()
    store.setCount(5)
    expect(store.doubleCount).toBe(10)
  })

  it('computes isPositive correctly', () => {
    const store = useCounterStore()
    expect(store.isPositive).toBe(false)
    store.increment()
    expect(store.isPositive).toBe(true)
  })
})
