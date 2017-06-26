<template>
  <div id="boat-list">

    <boat-left-search></boat-left-search>
    <div class="content-list">
      <div class="sort-bar">
        <div class="col-half-left">
          <div class="form-inline">
            <div class="form-group">
              <label >排序:</label>
              <Select v-model="model1" style="width:200px">
                <Option v-for="item in sortList" :value="item.value" :key="item">{{ item.label }}</Option>
              </Select>
            </div>
          </div>
        </div>
        <div class="col-half-right">
          <span class="page-count">共1000个记录 显示1-10条</span>	</div>
        <div class="clearfix"></div>
      </div>

      <ol class="results">
        <li class="b" v-for="todo in todos">
          <div class="boat">
            <div class="col-xs-12 col-sm-3 image " style="background-image:url(https://cdn1.theglobesailor.com/doc/charter/boat/732/photo/nautitech-435-53495_xs_sq.jpg);" onclick="window.location.href = '#';">
              <ul class="flag">

                  <span class="promo">
                    <span class="fa fa-tag"></span> -20 %
                  </span>

              </ul>
            </div>
            <div class="col-xs-8 col-sm-6 info">
            <a class="model" href="/yacht-charter-732-256.html">
              <b>Mustang 2000</b>
              <span>中国/ 大连</span>
            </a>
            <div class="specs">
              <div class="m" data-toggle="tooltip" data-placement="top" data-delay="500" title="" data-original-title="Capacity">
                <span class="cap">Capacity</span> 10
              </div>
              <div class="m" data-toggle="tooltip" data-placement="top" data-delay="500" title="" data-original-title="Cabins">
                <span class="cab">Cabins</span> 4 cab
              </div>
              <div class="m" data-toggle="tooltip" data-placement="top" data-delay="500" title="" data-original-title="Berths">
              <span class="ber">Berths</span> 8</div>
              <div class="m" data-toggle="tooltip" data-placement="top" data-delay="500" title="" data-original-title="Engine">
              <span class="mot">Engine</span> 2x30hp</div>
              <div class="m" data-toggle="tooltip" data-placement="top" data-delay="500" title="" data-original-title="Draught">
              <span class="dra">Draught</span> ---</div>
              <div class="m" data-toggle="tooltip" data-placement="top" data-delay="500" title="" data-original-title="Size">
              <span class="len">Size</span> 43ft</div>
            </div>
            <div class="pluses">
            <div class="item">
              <a class="review" href="#">
                <span class="fa fa-star" style="color:#ff3350"></span>
                <span class="fa fa-star" style="color:#ff3350"></span>
                <span class="fa fa-star" style="color:#ff3350"></span>
                <span class="fa fa-star" style="color:#ff3350"></span>
                <span class="fa fa-star-o" style="color:#ff3350"></span> 13 reviews</a>
            </div>
              <div class="item inc"><span class="fa fa-check"></span> 划水/海钓/潜水 / 专业驾驶团队</div>
            </div><p class="review_txt"><b>Ger</b> : Fred is a great skipper who made our cruise.... <a href="">read more</a></p>
          </div>
            <div class="col-xs-4 col-sm-3 price text_center_xs text-center">
              <i class="favorite fa fa-heart-o" onclick=""></i>
              <span class="op">原价 ￥4 500</span><b class="p">￥3 600 *</b><span class="period">自 24/06 到 30/06</span>
              <a href="#" class="view-detail">&nbsp;查看详情&nbsp;</a>
            </div>
            <div class="clearfix"></div></div></li>
      </ol>
      <div class="bottom_pagination text-right text_center_xs">
        <ul class="pager">
          <li class="previous"><a href="">
            <span class="fa fa-angle-left" aria-hidden="true"></span> Previous</a>
          </li>
          <li class="next"><a href="">Next <span class="fa fa-angle-right" aria-hidden="true"></span></a>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import BoatLeftSearch from './BoatLeftSearch'

  export default {
    components: {

      BoatLeftSearch},
    name: 'boat-list',
    data: function () {
      return {
        sortList: [
          {
            value: 'priceLowToHigh',
            label: '价格从低到高'
          },
          {
            value: 'priceHighToLow',
            label: '价格从高到低'
          },
          {
            value: 'popularity',
            label: '热度'
          },
          {
            value: 'CapacityLowToHigh',
            label: '载客数从低到高'
          },
          {
            value: 'CapacityHighToLow',
            label: '载客数从高到低'
          }
        ],
        model1: '',
        todos: [
          { text: '后台数据整合' },
          { text: '前台数据绑定' },
          { text: '测试' }
        ]
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../../static/css/boat-list.css';
</style>
