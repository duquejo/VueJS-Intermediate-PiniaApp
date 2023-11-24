<template>
 <div>
  <button 
   :disabled="currentPage === 1" 
   @click="emits('page-changed', currentPage - 1)"
  >
   Previous
  </button>
  <button
   v-for="page of totalPageNumbers"
   :key="page"
   :class="{ active: currentPage === page }"
   @click="emits('page-changed', page)">
   {{ page }}
  </button>
  <button
   :disabled="currentPage === totalPages"
   @click="emits('page-changed', currentPage + 1)">
   Next
  </button>
 </div>
</template>

<script setup lang="ts">
import { toRef, ref, watch } from 'vue';


interface Props {
  totalPages: number;
  currentPage: number;
}

interface Emits {
  (e: 'page-changed', page: number): void,
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const currentPage = toRef(props, 'currentPage');
const totalPages = toRef(props, 'totalPages');

const totalPageNumbers = ref<number[]>([]);

watch( totalPages, () => {
  totalPageNumbers.value = [...new Array(totalPages.value)].map((_, index) => index + 1 );
}, { immediate: true });
</script>

<style scoped>
div {
 margin-top: 10px;
}

button {
 background-color: transparent;
 border-radius: 5px;
 border: 1px solid var(--color-border);
 color: var(--color-text);
 cursor: pointer;
 margin-right: 5px;
 padding: 10px;
 transition: all 0.5s ease-in;
}

button:hover {
 background-color: hsla(160, 100%, 37%, 0.7);
 transition: all 0.3s;
}

button:disabled {
 cursor: not-allowed;
}
.active {
 background-color: hsla(160, 100%, 37%, 0.7);
}
</style>
