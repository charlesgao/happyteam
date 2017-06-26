<template>
  <div id="home">
    <notification-bar></notification-bar>
    <adv-bar></adv-bar>
    <search-bar></search-bar>
    <recommendation></recommendation>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import AdvBar from './AdvBar'
  import NotificationBar from './Notification'
  import SearchBar from '../SearchBar'
  import Recommendation from './Recommendation'
  import FooterBar from '../FooterBar'

  export default {
    components: {
      SearchBar,
      NotificationBar,
      AdvBar,
      Recommendation,
      FooterBar
    },
    name: 'Home',
    data: function () {
      return {isLoginActive: false, isRegionActive: false}
    },
    methods: {
      toggleLogin () {
        this.isLoginActive ? this.isLoginActive = false : this.isLoginActive = true
      },
      toggleRegion () {
        this.isRegionActive ? this.isRegionActive = false : this.isRegionActive = true
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
