<template>
  <div id="destination">
    <page-title category="destination"></page-title>
    <destination-list></destination-list>
  </div>
</template>

<script>
  import HeaderBar from '../HeaderBar'
  import DestinationList from './DestList'
  import PageTitle from '../PageTitle'
  export default {
    components: {
      PageTitle,
      DestinationList,
      HeaderBar
    },
    name: 'Destination',
    data: function () {
    },
    methods: {}
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../../static/css/dest-list.css';
</style>
