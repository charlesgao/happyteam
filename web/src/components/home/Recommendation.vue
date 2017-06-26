<template>
  <div class="par-sys tertiarypar">
    <div class="section-wrapper">
      <div class="offers-and-destinations">
        <div class="recommend-header">
          <div class="description description-multiple-origins">热门特惠线路</div>
        </div>
        <ul class="promotion odd-primary">
          <li class="primary-promotion ">
            <div class="cover">
              <img src="../../assets/hongkongm.png" alt="">
            </div>

            <div class="description">
              <h4 class="destination destination-medium-up">
              <span class="country">香港</span>
              </h4>

              <div class="item">
                <div class="group">
                  <i class="fa fa-thumbs-o-up re-icon" aria-hidden="true" lang="en"></i>
                  <div class="call-to-action">限时特惠价</div>
                  <a href=""  class="flight-link" >
                    <div class="type">酒店+机票+游艇</div>
                    <div class="price"><b>CNY<span class="sr-only">¥</span>3,380</b>起</div>
                  </a>
                <div class="miscellenous">五星级酒店+游艇游览维多利亚港</div>
              </div>
            </div>
            <div class="link">
              <a class="explore-destination" href="#">查看 详情</a>
            </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="section-wrapper boat_types">
      <div class="offers-and-destinations">
        <div class="recommend-header">
          <div class="description description-multiple-origins">1000+全球游艇资源</div>
        </div>

      <div class="row">
        <div class="boat-col type">
          <a href="/sailboat-charter-t1.html" class="sail"><span>帆船</span></a>
        </div>
        <div class="boat-col type">
          <a href="/catamaran-charter-t2.html" class="cata"><span>双体船</span></a>
        </div>
        <div class="boat-col type">
          <a href="/motor-boat-charter-t3.html" class="motor"><span>摩托艇</span></a>
        </div>
        <div class="boat-col type">
          <a href="/gulet-charter-t5.html" class="gulet"><span>双桅船</span></a>
        </div>	</div>

    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'recommendation',
    data: function () {
      return {isCollapse: false}
    },
    methods: {
      toggleNotify () {
        this.isCollapse ? this.isCollapse = false : this.isCollapse = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../../static/css/recommendation.css';
</style>
