import {defineStore} from 'pinia'
import DbOperations from '../helpers/DbOperations'

const collectionDB = new DbOperations('assignmentsList')

export const useAssignmentsStore = defineStore('assignments', {
    state: () => ({
        assignmentsList: [],
        loading: false,
        error: null,
    }),
    getters: {
        isLoading: (state) => state.loading,
        hasError: (state) => state.error,
        getAssignmentsList: (state) => state.assignmentsList,
        getAssignmentByFriendID: (state) => (friendId) => state.assignmentsList.find((assignment) => assignment.friend === friendId),
    },
    actions: {
        setError(error) {
            this.error = error;
        },
        setLoading(loading) {
            this.loading = loading;
        },
        setAssignmentsList(list) {
            this.assignmentsList = list;
        },

        async loadList() {
            this.setError(null);
            this.setLoading(true);

            try {
                const list = await collectionDB.loadItemsList();
                this.setAssignmentsList(list);
            } catch (error) {
                this.setError(error);
            } finally {
                this.setLoading(false);
            }
        },
        async addItem(assignment) {
            try {
                this.setError(null);
                this.setLoading(true);
                await collectionDB.addItem(assignment);
                await this.loadList();
            } catch (error) {
                console.error('Error adding assignment:', error);
                this.setError(error);
            } finally {
                this.setLoading(false);
            }
        },
        async deleteItem(itemId) {
            this.setError(null);
            this.setLoading(true);

            try {
                await collectionDB.deleteItem(itemId);
                await this.loadList();
            } catch (error) {
                this.setError(error);
            } finally {
                this.setLoading(false);
            }
        },
        async deleteItemByFriendID(itemId) {
            const data = this.getAssignmentByFriendID(itemId)
            console.log(data)
            if(data){
                try {
                    await this.deleteItem(data.id)
                } catch (error) {
                    this.setError(error);
                } finally {
                    this.setLoading(false);
                }
            }
        },
        async deleteItemByGiftID(itemId) {
            const data = this.getAssignmentByFriendID(itemId)
            if(data){
                try {
                    await this.deleteItem(data.id)
                } catch (error) {
                    this.setError(error);
                } finally {
                    this.setLoading(false);
                }
            }
        }
    }
}

)