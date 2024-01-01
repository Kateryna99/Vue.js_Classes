import {createUniversalStore} from "@/stores/helpers/data.js";
import DbOperations from '@/stores/helpers/DbOperations.js';

const friendsDbOperations = new DbOperations('friendsList');
export const useFriendsStore = createUniversalStore(friendsDbOperations,'friends');

const giftsDbOperations = new DbOperations('giftsList');
export const useGiftsStore = createUniversalStore(giftsDbOperations,'gifts');


const assignmentsDbOperations = new DbOperations('assignmentsList');
export const useAssignmentsStore = createUniversalStore(assignmentsDbOperations,'assignments');