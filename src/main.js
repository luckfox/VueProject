import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import {reqCategoryList} from "@/api";
import store from '@/store'
import mockServe from '@/mock/mockServe'
Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
//測試axios運作與nprogress是否正常
reqCategoryList();
new Vue({
  render: h => h(App),
  //註冊路由
  router,
  store
}).$mount('#app')
