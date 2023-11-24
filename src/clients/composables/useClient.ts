import { computed, ref, watch } from "vue";
import { useMutation, useQuery } from "@tanstack/vue-query";
import type { Client } from "../interfaces/client";
import clientsApi from "@/api/clients-api";

// const queryClient = useQueryClient();

const getClient = async (id: number) : Promise<Client> => {
  const { data } = await clientsApi.get<Client>(`/clients/${id}`);
  return data;
};


const updateClient = async (client: Client): Promise<Client> => {
  await new Promise( resolve => setTimeout(() => resolve(true), 2000));
  const { data } = await clientsApi.patch<Client>(`/clients/${client.id}`, client );

  /**
   * Handle query by key (Demo)
   */
  // const queries = queryClient.getQueryCache().findAll({
  //   queryKey: ['clients?page='],
  //   exact: false,
  // });
  // queries.forEach( query => query.fetch() );
  // queries.forEach( query => query.reset() );

  return data;
};

const useClient = (id: number) => {

  /**
   * Initial loading methods.
   */
  const client = ref<Client>();

  const clientMutation = useMutation({ mutationFn: updateClient });
  
  const { isLoading, data, isError } = useQuery({
    queryKey: ['client', id],
    queryFn: () => getClient(id),
    retry: false,
  });

  watch( data, () => {
    if( data.value ) {
      client.value = { ...data.value }; // Bugfix error.
    }
  }, { immediate: true });
  
  /**
   * Update methods.
   * 
   * - Reset after 2 seconds isSuccess change.
   */
  watch( clientMutation.isSuccess, () => {
    setTimeout(() => {
      clientMutation.reset();
    }, 2000 );
  });

  return {
    // Get
    isLoading,
    client,
    isError,

    // Update
    isUpdating: computed(() => clientMutation.isPending.value ),
    isUpdatingSuccess: computed(() => clientMutation.isSuccess.value ),
    isUpdatingError: computed(() => clientMutation.isError.value ),

    updateClient: (client: Client) => clientMutation.mutate(client),
  };
};

export default useClient;