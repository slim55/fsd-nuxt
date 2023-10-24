<script lang="ts" setup>
import useCounterStore from '../store'
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore()
const { increment, decrement } = counterStore
const { value } = storeToRefs(counterStore)
</script>

<template>
  <section>
    <h3>{{ value }}</h3>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </section>
</template>