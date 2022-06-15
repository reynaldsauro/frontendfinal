import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import TshirtList from '../views/tshirts/TshirtList.vue'
import ViewTshirtVue from '../views/tshirts/ViewTshirt.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },  
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/tshirt',
      name:'all-tshirts',
      component: TshirtList,
     
    },
    {
      path: '/tshirt/:id',
      name:'view-tshirt',
      component: ViewTshirtVue,
      props:true
    }
  ]
  
})

export default router
