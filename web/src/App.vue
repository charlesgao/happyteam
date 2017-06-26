<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view></router-view>
  </div>
</template>


<script>
  import HeaderBar from './components/HeaderBar'
  import FooterBar from './components/FooterBar'
  import Home from './components/home/Home'

  export default {
    components: {
      HeaderBar,
      FooterBar,
      Home
    },
    name: 'app'
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../static/css/main.css';
  @import '../static/css/font-awesome.min.css';
</style>
