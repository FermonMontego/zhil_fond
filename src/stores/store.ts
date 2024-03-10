import {createStore} from "vuex";
import getUsers from "../api/users.get.ts";

const store = createStore({
    state: () => {
        return {
            users: [],
            selectedUser: <{
                name?: string;
                email?: string;
                phone?: string;
            }>{},
            globalLoader: false
        }
    },
    mutations: {
        SET_USERS: (state, value) => {
            state.users = value;
        },
        SET_GLOBAL_LOADER: (state, value) => {
            state.globalLoader = value;
        },
        SET_SELECTED_PERSON: (state, person) => {
            state.selectedUser = person;
        },
        RESET_FOUND_DATA: (state) => {
            state.users = [];
            state.selectedUser = {};
        }
    },
    actions: {
        async searchUsers({commit}, value) {
            commit('SET_GLOBAL_LOADER', true);
            const result = await getUsers.get(value).then((res) => {
                commit('SET_GLOBAL_LOADER', false);
                return res;
            }).catch((err) => {
                commit('SET_GLOBAL_LOADER', false);
                throw new Error(err);
            }).finally(() => {
                commit('SET_GLOBAL_LOADER', false);
            });
            commit('SET_USERS', result);
        },
        setPreloader({commit}, value) {
            commit('SET_GLOBAL_LOADER', value);
        }
    },
    getters: {
        allUsers(state) {
            return state.users;
        }
    }
})

export default store;
