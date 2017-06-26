<template>
  <div id="boat-rent">
    <page-title category="boat"></page-title>
    <boat-list></boat-list>
  </div>
</template>

<script>
  import SearchBar from '../SearchBar'
  import BoatList from './BoatList'
  import PageTitle from '../PageTitle'
  export default {
    name: 'boat-rent',
    components: {
      PageTitle,
      SearchBar,
      BoatList
    },
    data: function () {
      return {}
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
