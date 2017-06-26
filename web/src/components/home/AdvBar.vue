<template>
  <div class="home_header">

    <!-- VIDEO CONTAINER -->
    <div class="container_video hidden-xs hidden-sm">
      <video autoplay="" loop="" class="fillWidth">
        <source src="https://cdn1.theglobesailor.com/img/site/home/video_bg_search2.mp4" type="video/mp4"></source>
        <source src="https://cdn1.theglobesailor.com/img/site/home/video_bg_search2.webm" type="video/webm"></source>
      </video>
    </div>

    <div class="video_filter hidden-xs hidden-sm"></div>

    <!-- FORM CONTAINER -->
    <div class="container fluid_to_md container_form">
      <div class="row">
        <!-- LEFT PART -->
        <div class="col-xs-12 col-sm-6 col-md-5 col-lg-4 main">
          <!-- LOGO -->
          <div class="logo text_center_xs">
            <img src="../../assets/sailorpromo.png" alt="GlobeSailor">
          </div>

          <form method="get" action="/search.html">
            <!-- HIDDEN VLS -->
            <div class="row promo-title">
              <div class="col-xs-12 form-group">
                <pre>'赢'游东京</pre>
              </div>
            </div>
            <div class="row promo-text">
              <div class="col-xs-12 form-group">
                <pre>感受都会魅力，品尝顶级料理</pre>
                <pre>酒店+游艇+料理 5000元每位起</pre>
              </div>
            </div>

            <!-- BTN -->
            <div class="row buttons">
              <div class="col-xs-12 form-group">
                <button type="submit" class="btn btn_white btn_search"><i class="fa fa-opencart" aria-hidden="true"></i> 马上预订</button>
              </div>
            </div>
          </form>
        </div><!-- /. LEFT PART -->
        <!-- RIGHT PART -->
        <div class="hidden-xs col-sm-6 col-md-7 col-lg-8">
          <div class="video_title">
            <div class="cell">
              <h1 class="subtitle">yachting for all</h1>
              <hr>
              <strong class="title">畅悠大海，艇享生活</strong>
            </div>
          </div>
        </div><!-- /. RIGHT PART -->
      </div>
    </div><!-- /. END FORM CONTAINER -->

  </div>
</template>

<script>
  export default {
    name: 'adv-bar',
    data: function () {
      return {isLoginActive: false, isRegionActive: false}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../../static/css/adv.css';
</style>
