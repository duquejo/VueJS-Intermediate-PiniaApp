import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { Client } from '@/clients/interfaces/client';

export const useClientsStore = defineStore('clients', () => {

  const currentPage = ref<number>(1);
  const totalPages = ref<number>(5);
  const clients = ref<Client[]>([]);

  return {
    // State properties
    currentPage,
    totalPages,
    clients,

    // Getters

    // Actions
    setClients( newClients: Client[] ) {
      clients.value = newClients;
    },
    setPage( page: number ) {
      if( currentPage.value === page ) return; // Redundancy (Vue eventually recognizes that ref has the same value)
      if( page <= 0 ) return;
      if( page > totalPages.value ) return;
      currentPage.value = page;
    },
  };
});