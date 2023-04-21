//import Vue from "vue";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import * as getters from "./getters";
import state from "./state";
import {default as mutations} from "./mutations";
import * as actions from "./actions";

//Vue.use(Vuex);

const store = createStore({
    state,
    getters,
    mutations,
    actions,
    plugins: [createPersistedState()]
});

export default store;