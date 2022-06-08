import Vue from 'vue'
import VueRouter from 'vue-router'

import CaloriaAlimento from '../views/CaloriaAlimento.vue'
import Entrar from '../views/Entrar.vue'
import GorduraCorporal from '../views/GorduraCorporal.vue'
import IMC from '../views/IMC.vue'
import MontarDieta from '../views/MontarDieta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'GorduraCorporal',
    component: GorduraCorporal
  },
  {
    path: '/Caloria',
    name: 'CaloriaAlimento',
    component: CaloriaAlimento
  },
  {
    path: '/entrar',
    name: 'Entrar',
    component: Entrar
  },
  {
    path: '/GorduraCorporal',
    name: 'GorduraCorporal',
    component: GorduraCorporal
  },
  {
    path: '/imc',
    name: 'imc',
    component: IMC
  },
  {
    path: '/MontarDieta',
    name: 'MontarDieta',
    component: MontarDieta
  }

  //{
    //path: '/about',
    //name: 'about',
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
