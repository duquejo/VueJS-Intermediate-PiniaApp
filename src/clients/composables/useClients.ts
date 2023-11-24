import { useQuery } from '@tanstack/vue-query';
import type { Client } from '@/clients/interfaces/client';
import clientsApi from '@/api/clients-api';
import { useClientsStore } from '@/store/clients';
import { storeToRefs } from 'pinia';
import { watch } from 'vue';

const getClients = async (page: number): Promise<Client[]> => {
  
  /**
   * Testing network delays.
   */
  // await new Promise(resolve => {
  //   setTimeout(() => resolve(true), 2000);
  // });

  const { data } = await clientsApi.get<Client[]>(`/clients?_page=${page}`);
  return data;
};

const useClients = () => {

  const store = useClientsStore();
  const {currentPage, clients, totalPages} = storeToRefs(store);

  const { isLoading, data, isError, error } = useQuery({
    queryKey: ['clients?page=', currentPage], // Send the ref, useQuery processes it out-the-box
    queryFn: () => getClients(currentPage.value),
    // staleTime: 1000 * 60, // The recovered data will not be refreshed after X seconds.
  });

  watch( data, clients => {
    if( clients ) {
      store.setClients(clients);
    }
  }, { immediate: true });

  return {
    // Properties
    isLoading,
    clients,
    isError,
    error,
    currentPage,
    totalPages,

    // Methods
    getPage: ( page: number ) => {
      store.setPage(page);
    },

    // Getters
    // totalPageNumbers: computed(
    //   () => [...new Array(totalPages.value)].map((_, index) => index + 1 ),
    // ),
  };
};

export default useClients;