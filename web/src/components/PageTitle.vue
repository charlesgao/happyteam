<template>
    <div id="page-title" v-bind:class="{'guide-intro-destination':isDestinationPage, 'guide-intro-boat':isBoatPage, 'guide-intro-vacation':isVacationPage}" >
      <div class="title-masker" >
        <div class="page-title-container ">
            <div class="page-title-wrapper ">
              <h1>探索最美丽的世界，发现更别样的人生</h1>
              <p class="title-intro">
                <span class="guide-intro-border"></span>
                  选择你的梦想的旅行地，这里有成千上万的海上度假娱乐项目，遍布全球各大著名度假胜地，我们的地接团队为您提供最优质服务，帮您完成您的完美之旅，留下终身难忘的回忆。.
              </p>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
  export default {
    components: {},
    name: 'PageTitle',
    props: ['category'],
    data: function () {
      if (this.category === 'destination') {
        return {isDestinationPage: true, isBoatPage: false, isVacationPage: false}
      } else if (this.category === 'boat') {
        return {isDestinationPage: false, isBoatPage: true, isVacationPage: false}
      } else if (this.category === 'vacation') {
        return {isDestinationPage: false, isBoatPage: false, isVacationPage: true}
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../static/css/page-title.css';
</style>
