<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import CaloriaAlimento from './views/CaloriaAlimento.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    CaloriaAlimento
  }
}
</script>
