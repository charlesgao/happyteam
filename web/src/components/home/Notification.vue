<template>
  <div class="travel-alert-container " data-expand-hint="点击展开，查看更多旅行警报" data-collapse-hint="点击折叠，收起旅行警报列表"
       style="touch-action: pan-y;" v-on:click="this.toggleNotify">
    <a class="summary-panel" role="button" aria-controls="disruption-messages">
      <i class="fa fa-angle-down  travel-alert-trigger" style="font-size: 1.2em" v-show="!isCollapse"></i>
      <i class="fa fa-angle-up  travel-alert-trigger" style="font-size: 1.2em" v-show="isCollapse"></i>
      <div class="caption"><i class="fa fa-exclamation-triangle" aria-hidden="true"
                              style="color: #fed700; padding-top: 0.5em;"></i>
        4 项游客通知
      </div>
      <div class="timestamp" v-show="!isCollapse">
        <span class="datetime">6月13日 9:45</span> 北京时间 (GMT+8)
      </div>
      <span class="is-visually-hidden">点击展开，查看更多旅行警报</span>
    </a>
    <ul id="disruption-messages" class="message-items" aria-expanded="false" v-show="isCollapse">
      <li>
        <div class="msg-item">
          <i class="icon icon-travel-alert-contrary medium" aria-hidden="true" lang="en"></i>
          <div class="caption"><a href="#">热带气旋苗柏影响东南亚游艇租赁游 </a></div>
          <div class="timestamp"><span class="datetime">6月13日 9:45</span> 北京时间 (GMT+8)</div>
        </div>
      </li>
      <li>
        <div class="msg-item">
          <i class="icon icon-travel-alert-contrary medium" aria-hidden="true" lang="en"></i>
          <div class="caption"><a href="#">美英禁止部分国家航班乘客随身携带大型电子设备</a></div>
          <div class="timestamp"><span class="datetime">3月28日 16:00</span> HKT (GMT+8)</div>
        </div>
      </li>
      <li>
        <div class="msg-item">
          <i class="icon icon-travel-alert-contrary medium" aria-hidden="true" lang="en"></i>
          <div class="caption"><a href="#">前往以色列的旅客须知</a></div>
          <div class="timestamp"><span class="datetime">3月16日 10:15</span> HKT (GMT+8)</div>
        </div>
      </li>
      <li>
        <div class="msg-item">
          <i class="icon icon-travel-alert-contrary medium" aria-hidden="true" lang="en"></i>
          <div class="caption"><a href="#">上海浦东国际机场 (PVG) 及虹桥国际机场航班调整 </a></div>
          <div class="timestamp"><span class="datetime">3月7日 14:00</span> 北京时间 (GMT+8)</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'notification-bar',
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
  @import '../../../static/css/notification.css';
</style>
