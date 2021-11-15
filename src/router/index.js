import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import blog from '../views/Blog.vue'
import about from '../views/About.vue'
import contact from '../views/Contact.vue'
import trips from '../views/Trips.vue'
import login from '../components/Login.vue'
import signup from '../components/Signup.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: blog
  },
  {
    path: '/trips',
    name: 'trips',
    component: trips
  },
  {
    path: '/about',
    name: 'about',
    component: about
  },
  {
    path: '/contact',
    name: 'contact',
    component: contact
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },
  {
    path: '/signup',
    name: 'signup',
    component: signup
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
