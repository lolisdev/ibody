/*
 TAREFAS:
 * Armazenar dados de login com Vuex
 * Adicionar diretivas
 * Adicionar crud no Monte Sua Dieta
 * Implementar APIs em:
  - https://caloriasporalimentoapi.herokuapp.com
  - https://www.pexels.com/pt-br/api/documentation/#authorization
  - https://viacep.com.br/ws/74605070/json/
*/

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')