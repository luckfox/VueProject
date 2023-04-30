import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.use(VueRouter)
const router =new VueRouter({
    //路由路徑配置，並且需要引入組件
    routes: [
        {
            path:"/Home",
            component:Home
        },
        {
            name:"Search",
            path:"/Search/:keyword",
            component:Search,
            props($route)
            {
                console.log('k=',$route.query.k)
               return {keyword:$route.params.keyword,k:$route.query.k}
            }

        },
        {
            path:"/Login",
            component:Login
        },
        {
            path:"/Register",
            component:Register
        },
        //重新定向
        {
            path:'*',
            redirect:"/Home"
        }
    ]
})
export default router