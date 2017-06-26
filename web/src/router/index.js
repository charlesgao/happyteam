import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home.vue'
import Destination from '../components/dest/Destination.vue'
import BoatRent from '../components/boat/BoatRent.vue'
import Vacation from '../components/vacation/Vacation.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/destination',
      name: 'destination',
      component: Destination
    },
    {
      path: '/boat',
      name: 'boat',
      component: BoatRent
    },
    {
      path: '/vacation',
      name: 'vacation',
      component: Vacation
    }
  ]
})
