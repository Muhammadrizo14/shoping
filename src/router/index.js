import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/Home";
import Products from "@/components/Products";
import DetailsProducts from "@/components/DetailsComponents";



const routes = [

    {path: '/', name: 'Home', component: Home},
    {path: '/products', name: 'Products', component: Products},
    {
        path: '/product/:id/',
        component: DetailsProducts,
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass:'active',
  routes
})

export default router
