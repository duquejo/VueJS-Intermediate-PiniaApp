<template>
  <h1>Pinia Options</h1>
  <h4>Counter Options Page: {{ count }}</h4>
  <h4>Square: {{ squareCount }}</h4>
  <br>
  <div>
    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="counterOptionsStore.$reset()">Reset</button>
  </div>
  <br>
  <CounterOptionsValue />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterOptionsStore } from '@/store/counter-options';
import CounterOptionsValue from '../components/CounterOptionsValue.vue';

const counterOptionsStore = useCounterOptionsStore();

const { count, squareCount } = storeToRefs(counterOptionsStore);
const { increment, incrementBy } = counterOptionsStore;
</script>

<style scoped>
button {
  margin-right: 5px;
}
</style>