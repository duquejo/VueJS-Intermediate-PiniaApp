<template>
  <h2>Customers list</h2>
  <!-- Client List -->
  <ClientList :clients="clients"/>
  <!-- Pagination numbers -->
  <PaginationNumbers
    @page-changed="getPage"
    :total-pages="totalPages"
    :current-page="currentPage"
  />
  <!-- Loading screen -->
  <LoadingModal v-if="isLoading" />
</template>

<script setup lang="ts">
import ClientList from '@/clients/components/ClientList.vue';
import useClients from '@/clients/composables/useClients';
import PaginationNumbers from '@/clients/components/PaginationNumbers.vue';
import LoadingModal from '@/shared/components/loading/LoadingModal.vue';

const { clients, isLoading, getPage, totalPages, currentPage } = useClients();
</script>

<style scoped>
h2 {
  margin-bottom: 10px;
}
</style>