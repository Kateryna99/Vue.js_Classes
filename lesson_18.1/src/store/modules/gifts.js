import {defineStore} from 'pinia'
import DbOperations from '../helpers/DbOperations'
import { useAssignmentsStore } from '@/store/modules/assignments'

const collectionDB = new DbOperations('giftsList')


export const useGiftsStore = defineStore('gifts', {
    state: () => ({
        giftsList: [],
        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,
        getGiftsList: (state) => state.giftsList,
        getItemById: (state) => (itemId) => state.giftsList.find((item) => item.id === itemId),
    },
    actions: {
        setError(error) {
            this.error = error;
        },
        setLoading(loading) {
            this.loading = loading;
        },
        setGiftsList(list) {
            this.giftsList = list;
        },
        async loadList() {
            this.setError(null);
            this.setLoading(true);

            try {
                const list = await collectionDB.loadItemsList();
                this.setGiftsList(list);
            } catch (error) {
                this.setError(error);
            } finally {
                this.setLoading(false);
            }
        },
        async addItem(giftName) {
            try {
                this.setError(null);
                this.setLoading(true);
                await collectionDB.addItem(giftName);
                await this.loadList();
            } catch (error) {
                console.error('Error adding gift:', error);
                this.setError(error);
            } finally {
                this.setLoading(false);
            }
        },
        async deleteItem(itemId) {
            this.setError(null);
            this.setLoading(true);
            const assignmentsStore = useAssignmentsStore();

            try {
                await collectionDB.deleteItem(itemId);
                await assignmentsStore.deleteItemByGiftID(itemId);
                await this.loadList();
            } catch (error) {
                this.setError(error);
            } finally {
                this.setLoading(false);
            }
        },
    },
})