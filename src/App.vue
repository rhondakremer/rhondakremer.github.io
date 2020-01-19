<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
body {
  background: url('./assets/full-bloom.png');
  font-family: 'Alata', sans-serif;
}

</style>
