<template>
  <h4 v-if="isUpdating">Saving...</h4>
  <h4 v-if="isUpdatingSuccess">Saved</h4>
  <LoadingModal v-if="isLoading"/>
  <div v-if="client">
    <h1>{{ client.name }}</h1>
    <form @submit.prevent="updateClient(client)">
      <input type="text" placeholder="Customer name" v-model="client.name"/>
      <br>
      <input type="text" placeholder="Address" v-model="client.address"/>
      <br>
      <button type="submit" :disabled="isUpdating">Save</button>
    </form>
  </div>
  <code>
    {{ client }}
  </code>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useClient from '@/clients/composables/useClient';
import LoadingModal from '@/shared/components/loading/LoadingModal.vue';

const route = useRoute();
const router = useRouter();

const {
  client,
  isLoading,
  isError,
  isUpdating,
  isUpdatingSuccess,
  updateClient
} = useClient( +route.params.id );

watch( isError, () => {
  if( isError.value ){
    router.replace('/clients');
  }
});

</script>

<style scoped>
div {
  width: 100%;
}
input {
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 10px;
}
button {
  margin-bottom: 10px;
}
</style>