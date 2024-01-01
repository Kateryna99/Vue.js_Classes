import {ref, computed} from "vue";
import { defineStore } from 'pinia';

export function createUniversalStore(collectionDB, storeName) {
    return defineStore(storeName, () => {
        const itemList = ref([]);
        const loading = ref(false);
        const error = ref(null);

        const isLoading = computed(() => loading.value);
        const hasError = computed(() => error.value !== null);

        const getItemsList = computed(() => itemList.value);
        const getItemByID = computed(() => (itemId) => {
            return itemList.value.find((item) => item.id === itemId);
        });
        const getItemByFriendID = computed(() => (itemId) => {
            return itemList.value.find((item) => item.friend === itemId);
        });
        const getItemByGiftID = computed(() => (itemId) => {
            return itemList.value.find((item) => item.gift === itemId);
        });

        const setItemsList = (itemsList) => {
            itemList.value = itemsList;
        };

        const setLoading = (value) => {
            loading.value = value;
        };

        const setError = (errorValue) => {
            error.value = errorValue;
        };

        const loadList = async () => {
            setError(null);
            setLoading(true);

            try {
                const list = await collectionDB.loadItemsList();
                setItemsList(list);
            } catch (errorValue) {
                setError(errorValue);
            } finally {
                setLoading(false);
            }
        };

        const addItem = async (item) => {
            setError(null);
            setLoading(true);

            try {
                await collectionDB.addItem(item);
                await loadList();
            } catch (errorValue) {
                setError(errorValue);
            } finally {
                setLoading(false);
            }
        };

        const deleteItem = async (itemId) => {
            setError(null);
            setLoading(true);

            try {
                await collectionDB.deleteItem(itemId);
                await loadList();
            } catch (errorValue) {
                setError(errorValue);
            } finally {
                setLoading(false);
            }
        };

        const deleteAssignmentByFriendID = async (friendId) => {
            const data = getItemByFriendID.value(friendId);

            if(data){
                try {
                    await deleteItem(data.id)
                    await loadList();
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            }

        };
        const deleteAssignmentByGiftID = async (giftId) => {
            const data = getItemByGiftID.value(giftId);

            if(data){
                try {
                    await deleteItem(data.id)
                    await loadList();
                } catch (error) {
                    setError(error);
                } finally {
                    setLoading(false);
                }
            }

        }


        return {
            isLoading,
            hasError,
            getItemsList,
            getItemByID,
            setItemsList,
            setLoading,
            setError,
            loadList,
            addItem,
            deleteItem,
            deleteAssignmentByFriendID,
            deleteAssignmentByGiftID
        };
    });
}