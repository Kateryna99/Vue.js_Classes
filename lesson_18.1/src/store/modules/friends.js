import {defineStore} from 'pinia'
import DbOperations from '../helpers/DbOperations'
import { useAssignmentsStore } from '@/store/modules/assignments'

const collectionDB = new DbOperations('friendsList')


export const useFriendsStore = defineStore('friends', {
    state: () => ({
        friendsList: [],
        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,
        getFriendsList: (state) => state.friendsList,
        getItemById: (state) => (itemId) => state.friendsList.find((item) => item.id === itemId),
    },
    actions: {
        setError(error) {
            this.error = error;
        },
        setLoading(loading) {
            this.loading = loading;
        },
        setFriendsList(list) {
            this.friendsList = list;
        },
        async loadList() {
            this.setError(null);
            this.setLoading(true);

            try {
                const list = await collectionDB.loadItemsList();
                this.setFriendsList(list);
            } catch (error) {
                this.setError(error);
            } finally {
                this.setLoading(false);
            }
        },
        async addItem(friendName) {
            try {
                this.setError(null);
                this.setLoading(true);
                await collectionDB.addItem(friendName);
                await this.loadList();
            } catch (error) {
                console.error('Error adding friend:', error);
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
                await assignmentsStore.deleteItemByFriendID(itemId);
                await this.loadList();
                //console.log(assignmentsStore.getAssignmentsList());
            } catch (error) {
                this.setError(error);
            } finally {
                this.setLoading(false);
            }
        },
    },
})