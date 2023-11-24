
<template>
  <h1>Current value: {{ counter.count }}</h1>
  <h4>Last change: {{ counter.lastChange }}</h4>
</template>

<script setup lang="ts">
import { useCounterSetupStore } from '../../store/counter-setup';
const counter = useCounterSetupStore();
</script>