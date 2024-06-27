import {createRouter, createMemoryHistory} from 'vue-router'
import HomeView from '../views/home.vue'

const router = createRouter({
  history: createMemoryHistory(), // 它会完全忽略浏览器的 URL 而使用其自己内部的 URL
  scrollBehavior(to, from, savedPosition) {
    return {}
  },
  routes: [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/about.vue')
    }
  ]
})

// to: 即将要进入的目标 用一种标准化的方式
// from: 当前导航正要离开的路由 用一种标准化的方式
// 可选的第三个参数 next
// 返回值
// false， 拦截跳转
// 路由地址 通过一个路由地址重定向到一个不同的地址
// 前置守卫
router.beforeEach((to, from, next) => {
  // 返回 false 以取消导航
  return false
})
export default router