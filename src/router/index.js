import Vue from 'vue'
import VueRouter from 'vue-router'
import Paino from '../views/Paino.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Paino',
    component: Paino
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
