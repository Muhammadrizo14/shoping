import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/components/Home";
import Products from "@/components/Products";
import DetailsProducts from "@/components/DetailsComponents";
import NotFound from "@/components/404"



const routes = [

    {path: '/', name: 'Home', component: Home},
    {path: '/products', name: 'Products', component: Products},
    {
        path: '/product/:id/',
        component: DetailsProducts,
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: NotFound
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  linkActiveClass:'active',
  routes
})

export default router
