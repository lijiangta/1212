import VueRouter from "vue-router"
import Vue from "vue"

const Home = ()=>import("../views/home/Home")
const Category = ()=>import("../views/category/Category")
const ShopCar = ()=>import("../views/cart/cart")
const Profile = ()=>import("../views/profile/Profile")


Vue.use(VueRouter)

const routes = [
  {
    path:"",
    redirect:"/home"
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/category",
    component:Category
  },
  {
    path:"/shopCar",
    component:ShopCar
  },
  {
    path:"/profile",
    component:Profile
  },
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router;

