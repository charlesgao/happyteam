<template>
  <div id="book-trip-tab-panel" class="book-trip-panel">

    <div class="book-trip" data-role="home">
      <ul class="book-trip-title">
        <pre> 搜索您的悠艇假期</pre>
      </ul>
      <div class="travel-booking-panel parbase travel panel-open">
        <form class="trip-form" action="#" method="POST">

          <div class="error-message-container"></div>
          <div class="error-message-container-medium-up"></div>

          <div class="book-trip-basicinfo">
            <div class="destination">
              <div class="search-field-group">
                <Cascader :data="data" v-model="modeldest" filterable="true" size="large"></Cascader>
              </div>
            </div>

            <div class="depart-date">
              <div class="search-field-group">
                <Date-picker type="datetimerange" placeholder="出发日期" format="yyyy-MM-dd"></Date-picker>
              </div>
            </div>

            <div class="trip-passengers-wrapper">
              <div class="search-field-group">
                <input id="depart-passengers-label" name="depart-passengers-label" class="search-field-input ui-autocomplete-input input-filled" placeholder="乘客" value="" role="application" type="text">
              </div>
                <div class="trip-passengers" data-ui-overlay="trip-passengers" v-show="isPassengersActive">
                <div class="trip-passengers-selector">
                  <span class="sr-only">乘客</span>
                  <p class="infants-booking-message display-message" tabindex="0">如果您携带两岁以下或在旅途中刚满两岁的婴儿出行，请联系您的<a
                    onclick="CMSGlobal.fnContentSelfOpen('about-us/contact-us.html')" href="#">当地订位部</a>.</p>
                    <div class="search-field-group tooltip">
                      <label for="passenger-adults" class="title">成人（12 岁及以上）</label>
                      <div class="custom-select-wrapper">
                        <span class="custom-select-trigger" aria-hidden="true">
                        <span class="custom-select-text">1</span>
                        <i class="icon icon-down" aria-hidden="true" lang="en"></i></span>
                        <select class="custom-select-control" id="passenger-adults" name="passenger-adults"
                              data-passenger-type="adults">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                        </select>
                        <a class="tooltip-button" href="#book-trip-travel-adult-tip">
                          <span class="is-visually-hidden">关于成人旅行的说明。 请按 Enter 键展开文本。</span>
                          <i aria-hidden="true" class="icon icon-tooltip-contrary" lang="en"></i>
                        </a>
                      </div>
                    <div id="book-trip-travel-adult-tip" class="tooltip-message" role="tooltip">
                      有儿童随行的旅客必须是年满 18 岁的成年人。如需进行六人以上团体预订，请联系您的当地订位部</div>
                  </div>

                  <div class="search-field-group tooltip">
                    <label for="passenger-children" class="title">儿童（2-11 岁）</label>
                    <div class="custom-select-wrapper">
              <span class="custom-select-trigger" aria-hidden="true">
                <span class="custom-select-text">0</span>
                <i class="icon icon-down" aria-hidden="true" lang="en"></i>
              </span>

                      <select class="custom-select-control" id="passenger-children" name="passenger-children"
                              data-passenger-type="children">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <a class="tooltip-button" href="#book-trip-travel-children-tip">
                        <span class="is-visually-hidden">关于携带儿童旅行的说明。 请按 Enter 键展开文本。</span>
                        <i aria-hidden="true" class="icon icon-tooltip-contrary" lang="en"></i>
                      </a>
                    </div>
                    <div id="book-trip-travel-children-tip" class="tooltip-message" role="tooltip">
                      每位儿童旅客必须有一名成年人陪同。关于携带儿童出行的更多信息，请联系您的当地订位部或查看我们的儿童出行指引。
                    </div>
                  </div>

                  <div class="search-field-group tooltip infant-selector">
                    <label for="passenger-infants" class="title">婴幼儿（0-2 岁）</label>
                    <div class="custom-select-wrapper">
              <span class="custom-select-trigger" aria-hidden="true">
                <span class="custom-select-text">0</span>
                <i class="icon icon-down" aria-hidden="true" lang="en"></i>
              </span>

                      <select class="custom-select-control" id="passenger-infants" name="passenger-infants"
                              data-passenger-type="infants">
                        <option value="0">0</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                      <a class="tooltip-button" href="#book-trip-travel-infants-tip">
                        <span class="is-visually-hidden">关于携带婴儿旅行的说明。 请按 Enter 键展开文本。</span>
                        <i aria-hidden="true" class="icon icon-tooltip-contrary" lang="en"></i>
                      </a>
                    </div>
                    <div id="book-trip-travel-infants-tip" class="tooltip-message" role="tooltip">
                      如果您携带两岁以下或在旅途中刚满两岁的婴儿出行，请联系您的当地订位部.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div class="book-trip-basicinfo">
            <div class="rent-type">
              <div class="search-field-group">
                <Select v-model="modelrenttype" clearable placeholder="租赁方式">
                  <Option v-for="item in rentTypeList" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
              </div>
            </div>

            <div class="boat-size">
              <div class="search-field-group">
                <Select v-model="modelboattype" clearable placeholder="船型/尺寸">
                  <Option v-for="item in boatTypeList" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
              </div>
            </div>

            <div class="trip-ent-items">
              <div class="search-field-group">
                <Select v-model="servicepackage" clearable  placeholder="娱乐服务">
                  <Option v-for="item in servicePackageList" :value="item.value" :key="item">{{ item.label }}</Option>
                </Select>
              </div>
            </div>
            <button type="submit" class="button-submit">
              <span class="button-title-large">搜索</span>
              <i class="fa fa-angle-right" aria-hidden="true" style="float:right; padding-top:5px"></i>
            </button>
          </div>



        </form>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-bar',
    data: function () {
      return {
        isPassengersActive: false,
        value: [20, 50],
        cityList: [
          {
            value: 'beijing',
            label: '北京市'
          },
          {
            value: 'shanghai',
            label: '上海市'
          },
          {
            value: 'shenzhen',
            label: '深圳市'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
          },
          {
            value: 'nanjing',
            label: '南京市'
          },
          {
            value: 'chongqing',
            label: '重庆市'
          }
        ],
        modeldest: '',
        rentTypeList: [
          {
            value: 'hourly',
            label: '时租'
          },
          {
            value: 'daily',
            label: '日租'
          },
          {
            value: 'weekly',
            label: '周租'
          },
          {
            value: 'hangzhou',
            label: '杭州市'
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
        modelboattype: '',
        servicePackageList: [
          {
            value: 'diving',
            label: '潜水'
          },
          {
            value: 'fishing',
            label: '钓鱼'
          },
          {
            value: 'skipping',
            label: '划水'
          }
        ],
        servicepackage: '',
        value1: [],
        data: [{
          value: 'SouthAmerica',
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
        }, {
          value: 'Oceanica',
          label: '大洋洲',
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
        }, {
          value: 'Asia',
          label: '亚洲',
          children: [
            {
              value: 'nanjing',
              label: '中国',
              children: [
                {
                  value: 'fuzimiao',
                  label: '青岛'
                }, {
                  value: 'fuzimiao',
                  label: '威海'
                }, {
                  value: 'fuzimiao',
                  label: '三亚'
                }, {
                  value: 'fuzimiao',
                  label: '大连'
                }, {
                  value: 'fuzimiao',
                  label: '上海'
                }, {
                  value: 'fuzimiao',
                  label: '苏州'
                }, {
                  value: 'fuzimiao',
                  label: '无锡'
                }, {
                  value: 'fuzimiao',
                  label: '常州'
                }, {
                  value: 'fuzimiao',
                  label: '南京'
                }, {
                  value: 'fuzimiao',
                  label: '平湖'
                }, {
                  value: 'fuzimiao',
                  label: '湖州'
                }, {
                  value: 'fuzimiao',
                  label: '杭州'
                }, {
                  value: 'fuzimiao',
                  label: '宁波'
                }, {
                  value: 'fuzimiao',
                  label: '嵊泗'
                }, {
                  value: 'fuzimiao',
                  label: '厦门'
                }, {
                  value: 'fuzimiao',
                  label: '广州'
                }, {
                  value: 'fuzimiao',
                  label: '深圳'
                }, {
                  value: 'fuzimiao',
                  label: '珠海'
                }, {
                  value: 'fuzimiao',
                  label: '北海'
                }
              ] },
            {
              value: 'Oceanica',
              label: '泰国',
              children: [
                {
                  value: 'gugong',
                  label: '芭提'
                },
                {
                  value: 'tiantan',
                  label: '普吉岛'
                },
                {
                  value: 'wangfujing',
                  label: '苏梅'
                }
              ]
            },
            {
              value: 'hongkang',
              label: '香港'
            },
            {
              value: 'taiwan',
              label: '台湾'
            },
            {
              value: 'taiwan',
              label: '菲律宾'
            },
            {
              value: 'taiwan',
              label: '印度尼西亚'
            },
            {
              value: 'taiwan',
              label: '马来西亚'
            },
            {
              value: 'taiwan',
              label: '越南'
            },
            {
              value: 'taiwan',
              label: '韩国'
            },
            {
              value: 'taiwan',
              label: '日本'
            }
          ]
        }]
      }
    },
    methods: {
      togglePassengers () {
        this.isPassengersActive ? this.isPassengersActive = false : this.isPassengersActive = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../static/css/search.css';
</style>
