import Vue from 'vue';
import Vuex from 'vuex';
import home from "./home";
import search from "./search"
Vue.use(Vuex);
// state：存放數據的地方
const state={};
//mutations：修改state唯一手段
const mutations={};
//action：處理action，可以書寫自己業務邏輯，也可以處理異步
const actions={};
//getters：理解為計算屬性，用於簡化倉庫數據，讓組件獲取倉庫的數據更方便。
const getters={};
//如果倉庫結構複雜，可以切割成數個小型倉庫。
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        home,
        search
    }
});