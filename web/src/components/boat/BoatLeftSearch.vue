<template>
  <div id="boat-left-search" class="left-search-container">
      <!-- XS/SM TOGGLE FORM -->
      <div id="open_search_form" class="hidden-md hidden-lg open_search_form">
      </div>

      <!-- SEARCH FORM -->
      <div id="search_form" class="left-search-form">

        <form method="get" action="" id="boat_search_form_id">
          <!-- HIDDEN VLS -->
          <input name="sort" value="popularity" type="hidden">
          <input name="dir" value="ASC" type="hidden">

          <!-- MAIN FORM ROW -->
          <div class="row">
            <!-- FORM TITLE -->
            <div class="col-xs-12 search-item-row">
              <div class="search_form_title">筛选一下</div>
            </div>

            <!-- DESTINATION -->
            <div class="col-xs-12 search-item-row">
              <div class="form-group">
                <label>目的地</label>
                <Cascader :data="destList" :trigger="hover" filterable></Cascader>
              </div>
            </div>
            <!-- DEPARTURE -->
            <div class="col-xs-12 col-sm-5 search-item-row">
              <div class="form-group">
                <label>日期</label>
                <Date-picker  placeholder="选择日期" ></Date-picker>
              </div>
            </div>

            <!-- BOAT TYPE -->
            <div class="search-item-row">
              <div class="form-group">
                <label>Type of boat</label>
                <Select v-model="modelBoatType" clearable placeholder="船型/尺寸">
                  <Option v-for="item in boatTypeList" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
              </div>
            </div>


            <!-- PRICE -->
            <div class="col-xs-12 col-sm-6 search-item-row">
              <div class="form-group">
                <label>价格区间</label>
                <Slider v-model="priceRange" range></Slider>
                <div class="row slider_label">
                  <div class="slider-ind">
							      <span id="show_pmin">&lt; 500</span> EUR
                  </div>
                  <div class="slider-ind slider-ind-right">
                    <span id="show_pmax">&gt; 20000</span> EUR
                  </div>
                </div>
              </div>
            </div>

            <!-- CABINS -->
            <div class="col-xs-12 col-sm-6 search-item-row">
              <div class="form-group">
                <label >客舱数</label>
                <Slider v-model="cabinNumRange" :step="1" range></Slider>
                <div class="row slider_label">
                  <div class="slider-ind">
                    <span id="show_cmin">0</span> cab
                  </div>
                  <div class="slider-ind slider-ind-right">
                    <span id="show_cmax">&gt; 10</span>cab
                  </div>
                </div>
              </div>
            </div>

            <!-- LENGTH -->
            <div class="col-xs-12 col-sm-6 search-item-row">
              <div class="form-group">
                <label>Boat size</label>
                <Slider v-model="boatSizeRange" :step="1" range></Slider>
                <div class="row slider_label">
                  <div class="slider-ind">
                    <span id="show_lmin_ft">&lt; 20</span> ft /
                    <span id="show_lmin_m">6</span> m
                  </div>
                  <div class="slider-ind slider-ind-right">
                    <span id="show_lmax_ft">&gt; 80</span> ft /
                    <span id="show_lmax_m">24</span> m
                  </div>
                </div>

              </div>
            </div>

            <!-- BUTTONS -->
            <div class="search-button-row">
              <button id="start_search" type="submit">确认</button>
            </div>

          </div><!-- /. MAIN FORM ROW -->
        </form>
        <!-- XS/SM REDUCE FORM -->
        <!--div class="search_form_cross"><button onclick="toggle_search_form();" class="visible-xs visible-sm btn btn-link"><i class="fa fa-times"></i></button></div-->

      </div>

  </div>
</template>

<script>
  export default {
    name: 'boat-left-search',
    data: function () {
      return {
        destList: [
          {
            value: 'SouthAmerican',
            label: '南美洲',
            children: [
              {
                value: 'gugong',
                label: '巴哈马'
              },
              {
                value: 'tiantan',
                label: '古巴'
              },
              {
                value: 'wangfujing',
                label: '厄瓜多尔'
              },
              {
                value: 'wangfujing',
                label: '墨西哥'
              },
              {
                value: 'wangfujing',
                label: '英属维尔'
              }
            ]
          },
          {
            value: 'NorthAmerican',
            label: '北美洲',
            children: [],
            loading: false
          },
          {
            value: 'Asia',
            label: '亚洲',
            children: [
              {
                value: 'nanjing',
                label: '中国',
                children: [
                  {
                    value: 'qingdao',
                    label: '青岛'
                  },
                  {
                    value: 'weihai',
                    label: '威海'
                  },
                  {
                    value: 'sanya',
                    label: '三亚'
                  },
                  {
                    value: 'dalian',
                    label: '大连'
                  },
                  {
                    value: 'shanghai',
                    label: '上海'
                  }, {
                    value: 'suzhou',
                    label: '苏州'
                  }, {
                    value: 'wuxi',
                    label: '无锡'
                  }, {
                    value: 'changzhou',
                    label: '常州'
                  }, {
                    value: 'nanjing',
                    label: '南京'
                  }, {
                    value: 'pinghu',
                    label: '平湖'
                  }, {
                    value: 'huzhou',
                    label: '湖州'
                  }, {
                    value: 'hangzhou',
                    label: '杭州'
                  }, {
                    value: 'ningbo',
                    label: '宁波'
                  }, {
                    value: 'shengsi',
                    label: '嵊泗'
                  }, {
                    value: 'fuzimiao',
                    label: '厦门'
                  }, {
                    value: 'guangzhou',
                    label: '广州'
                  }, {
                    value: 'shenzhen',
                    label: '深圳'
                  }, {
                    value: 'zhuhai',
                    label: '珠海'
                  }, {
                    value: 'beihai',
                    label: '北海'
                  }
                ] },
              {
                value: 'Thailand',
                label: '泰国',
                children: [
                  {
                    value: 'Phuket',
                    label: '芭提'
                  },
                  {
                    value: 'Phuket',
                    label: '普吉岛'
                  },
                  {
                    value: 'Sumy',
                    label: '苏梅'
                  }
                ]
              },
              {
                value: 'Hongkang',
                label: '香港'
              },
              {
                value: 'Taiwan',
                label: '台湾'
              },
              {
                value: 'Philippines',
                label: '菲律宾'
              },
              {
                value: 'Indonesia',
                label: '印度尼西亚'
              },
              {
                value: 'Malaysia',
                label: '马来西亚'
              },
              {
                value: 'Vietnam',
                label: '越南'
              },
              {
                value: 'Korea',
                label: '韩国'
              },
              {
                value: 'Japan',
                label: '日本'
              }
            ]
          },
          {
            value: 'Oceanica',
            label: '澳洲',
            children: [
              {
                value: 'gugong',
                label: '黄金海岸'
              },
              {
                value: 'tiantan',
                label: '悉尼'
              },
              {
                value: 'wangfujing',
                label: '墨尔本'
              },
              {
                value: 'wangfujing',
                label: '法属波利'
              },
              {
                value: 'wangfujing',
                label: '珀斯'
              }
            ]
          },
          {
            value: 'Africa',
            label: '非洲',
            children: [],
            loading: false
          },
          {
            value: 'Europe',
            label: '欧洲',
            children: [],
            loading: false
          }
        ],
        modelrenttype: '',
        boatTypeList: [
          {
            value: 'sailboat',
            label: '帆船'
          },
          {
            value: 'catamaran',
            label: '双体船'
          },
          {
            value: 'motorboat',
            label: '摩托艇'
          },
          {
            value: 'gulet',
            label: '双桅船'
          }
        ],
        modelBoatType: '',
        priceRange: [20, 50],
        cabinNumRange: [1, 10],
        boatSizeRange: [6, 24]
      }
    },
    methods: {
    }
  }
</script>


<style>
  @import '../../../static/css/boat-lieft-search.css';
</style>
