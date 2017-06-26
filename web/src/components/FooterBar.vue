<template>
  <footer>
    <div class="footer">
      <div class="footer-container fluid_to_md">

        <div class="row menus text_center_xs">

          <!-- LEFT PART -->
          <div class="footer-left links">
            <div class="footer-left-column">
              <ul>
                <li><b>微信服务号</b></li>
                <li><img src="../assets/wechat.jpg" alt="微信公众号"></li>
              </ul>
            </div>
            <div class="footer-left-column">
              <ul class="links_xs">
                <li class="t"><b>悠艇客</b></li>
                <li><a href="">关于我们</a></li>
                <li><a href="">经销商接入指南</a></li>
                <li><a href="">供应商接入指南</a></li>
                <li><a href="">我们的合作商</a></li>
              </ul>
            </div>
            <div class="footer-left-column">
              <ul>
                <li class="t"><a href="/yacht-charter.html"><b>服务条款</b></a></li>
                <li><a rel="nofollow" href="">国内游艇服务</a></li>
                <li><a rel="nofollow" href="">境外游艇服务</a></li>
                <li><a rel="nofollow" href="">保险服务</a></li>
              </ul>
            </div>

          </div>			<!-- /. LEFT PART -->

          <!-- RIGHT PART -->
          <div class="footer-right">
            <!-- CONTRACT -->
            <div class="row">
              <div class="col-xs-12 newsletter">
                <b>联系我们</b>
                <p>400-666-6690<br>contact@uyachter.com</p>
                <p>
                  悠艇（上海）科技发展有限公司
                  上海黄浦区中山南一路500弄1号丽都大厦1908室（200023）</p>
                <p>
                  RM1908,BL 1,Lidu Tower,South Zhongshan 1st,Huangpu District,Shanghai,China
                </p>

                <div id="nlsub_msg"></div>
              </div>
            </div><!-- /. CONTRACT -->

          </div>
          <!-- /. RIGHT PART -->

        </div>

      </div>

      <div class="footer-container legal">
        <!-- COPYRIGHT -->
        <div class="copy">
          Copyright 悠艇客 沪ICP备15010256
        </div>
      </div>

    </div>
  </footer>
</template>

<script>
  export default {
    name: 'footer-bar',
    data: function () {
      return {}
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../static/css/footer.css';
</style>
