import { defineStore } from 'pinia'

export interface CounterStore {
  value: number
}

const useCounterStore = defineStore('counter', {
  state: (): CounterStore => ({
    value: 0,
  }),
  actions: {
    increment() {
      this.value += 1
    },
    decrement() {
      this.value -= 1
    },
  },
})

export default useCounterStore