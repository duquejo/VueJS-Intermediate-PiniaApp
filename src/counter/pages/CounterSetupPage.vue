<template>
  <h1>Pinia Setup</h1>
  <h4>Counter Setup Page: {{ count }}</h4>
  <h4>Square: {{ squareCount }}</h4>
  <br>
  <div>
    <button @click="increment()">+1</button>
    <button @click="incrementBy(2)">+2</button>
    <button @click="incrementBy(5)">+5</button>
    <button @click="counterSetupStore.$reset()">Reset</button>
  </div>
  <br>
  <CounterSetupValue />
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useCounterSetupStore } from '@/store/counter-setup';
import CounterSetupValue from '../components/CounterSetupValue.vue';

const counterSetupStore = useCounterSetupStore();

const { count, squareCount } = storeToRefs(counterSetupStore);
const { increment, incrementBy } = counterSetupStore;
</script>

<style scoped>
button {
  margin-right: 5px;
}
</style>