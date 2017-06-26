<template>
  <header style="top: 0; touch-action: pan-y" v-bind:class="[isRegionActive ? 'region-active' : 'region-inactive']">
    <div class="header-items">
      <a id="home-link" href="#">
        <img src="../assets/ulogo-nbg.png" alt="悠艇客">
      </a>
      <div class="header-rhs">
        <a id="change-region" class="change-region" data-hiddentext-expend="当前所选国家/地区 - 点击收起国家/地区选项面板"
           @click="toggleRegion"
           data-hiddentext-collapse="当前所选国家/地区 - 点击展开国家/地区选项面板" style="touch-action: pan-y;">
          <span class="region-name">中国</span>
          <span class="is-visually-hidden">当前所选国家/地区 - 点击展开国家/地区选项面板</span>
          <i class="fa fa-angle-up" aria-hidden="true"></i>
          <span class="region-name">中文简体</span>
          <div class="callout-arrow-up"></div>
        </a>
        <div class="region-language-flyout" style="top: -24.44em; height: 24.44em;">
          <div class="region-language-header">
            <div class="region-language-heading">国家/ 地区</div>
          </div>
          <div class="regions-wrapper" aria-labelledby="change-region">

            <ul class="regions">
              <li data-region="HK" data-language="en" data-region-label="Hong Kong" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Hong Kong - English</a></li>
              <li data-region="HK" data-language="zh" data-region-label="香港" data-language-label="繁體中文">
                <a hreflang="zh" lang="zh">香港 - 繁體中文</a></li>
              <li data-region="AU" data-language="en" data-region-label="Australia" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Australia - English</a></li>
              <li data-region="CA" data-language="en" data-region-label="Canada" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Canada - English</a></li>
              <li data-region="CN" data-language="en" data-region-label="China" data-language-label="English">
                <a href="#" hreflang="en" lang="en">China - English</a></li>
              <li data-region="CN" data-language="sc" data-region-label="中国" data-language-label="简体中文" class="selected"
                  role="presentation" tabindex="0">
                <span class="placeholder">中国 - 简体中文</span><span class="sr-only">当前所选</span></li>
              <li data-region="DK" data-language="en" data-region-label="Denmark" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Denmark - English</a></li>
              <li data-region="DE" data-language="de" data-region-label="Deutschland" data-language-label="Deutsch">
                <a href="#" hreflang="de" lang="de">Deutschland - Deutsch</a></li>
              <li data-region="ES" data-language="es" data-region-label="España" data-language-label="Español">
                <a href="#" hreflang="es" lang="es">España - Español</a></li>
            </ul>
            <ul class="regions">
              <li data-region="FR" data-language="fr" data-region-label="France" data-language-label="Français">
                <a href="#" hreflang="fr" lang="fr">France - Français</a></li>
              <li data-region="IN" data-language="en" data-region-label="India" data-language-label="English">
                <a href="#" hreflang="en" lang="en">India - English</a></li>
              <li data-region="ID" data-language="en" data-region-label="Indonesia" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Indonesia - English</a></li>
              <li data-region="IT" data-language="it" data-region-label="Italia" data-language-label="Italiano">
                <a href="#" hreflang="it" lang="it">Italia - Italiano</a></li>
              <li data-region="JP" data-language="en" data-region-label="Japan" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Japan - English</a></li>
              <li data-region="JP" data-language="ja" data-region-label="日本" data-language-label="日本語">
                <a href="#" hreflang="ja" lang="ja">日本 - 日本語</a></li>
              <li data-region="KR" data-language="en" data-region-label="Korea" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Korea - English</a></li>
              <li data-region="KR" data-language="ko" data-region-label="한국" data-language-label="한국어">
                <a href="#" hreflang="ko" lang="ko">한국 - 한국어</a></li>
              <li data-region="MY" data-language="en" data-region-label="Malaysia" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Malaysia - English</a></li>
            </ul>
            <ul class="regions">
              <li data-region="NZ" data-language="en" data-region-label="New Zealand" data-language-label="English">
                <a href="#" hreflang="en" lang="en">New Zealand - English</a></li>
              <li data-region="PK" data-language="en" data-region-label="Pakistan" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Pakistan - English</a></li>
              <li data-region="PH" data-language="en" data-region-label="Philippines" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Philippines - English</a></li>
              <li data-region="RU" data-language="ru" data-region-label="Россия" data-language-label="Русский">
                <a href="#" hreflang="ru" lang="ru">Россия - Русский</a></li>
              <li data-region="QA" data-language="en" data-region-label="Qatar" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Qatar - English</a></li>
              <li data-region="SA" data-language="en" data-region-label="Saudi Arabia" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Saudi Arabia - English</a></li>
              <li data-region="CH" data-language="de" data-region-label="Schweiz" data-language-label="Deutsch">
                <a href="#" hreflang="de" lang="de">Schweiz - Deutsch</a></li>
              <li data-region="SG" data-language="en" data-region-label="Singapore" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Singapore - English</a></li>
            </ul>
            <ul class="regions">
              <li data-region="ZA" data-language="en" data-region-label="South Africa" data-language-label="English">
                <a href="#" hreflang="en" lang="en">South Africa - English</a></li>
              <li data-region="TW" data-language="en" data-region-label="Taiwan" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Taiwan - English</a></li>
              <li data-region="TW" data-language="zh" data-region-label="台灣" data-language-label="繁體中文">
                <a href="#" hreflang="zh" lang="zh">台灣 - 繁體中文</a></li>
              <li data-region="TH" data-language="en" data-region-label="Thailand" data-language-label="English">
                <a href="#" hreflang="en" lang="en">Thailand - English</a></li>
              <li data-region="TH" data-language="th" data-region-label="ประเทศไทย" data-language-label="ภาษาไทย">
                <a href="#" hreflang="th" lang="th">ประเทศไทย - ภาษาไทย</a></li>
              <li data-region="AE" data-language="en" data-region-label="United Arab Emirates"
                  data-language-label="English">
                <a href="#" hreflang="en" lang="en">United Arab Emirates -  English</a></li>
              <li data-region="GB" data-language="en" data-region-label="United Kingdom" data-language-label="English">
                <a href="#" hreflang="en" lang="en">United Kingdom - English</a></li>
              <li data-region="US" data-language="en" data-region-label="United States" data-language-label="English">
                <a href="#" hreflang="en" lang="en">United States - English</a></li>
            </ul>
          </div>
        </div>
        <form action="#" method="get" class="site-search-form">
          <input id="keyword" name="keyword" class="" placeholder="搜索" type="search">
          <button type="submit">
            <i aria-hidden="true" class="el el-search icon icon-magnify"></i>
            <span class="is-visually-hidden">搜索</span>
          </button>
        </form>

        <a class="mpo-trigger" aria-expanded="false" style="position: relative; touch-action: pan-y;"
           @click="toggleLogin">
          <span class="login-status-text">登录／注册</span>
          <i class="fa fa-angle-down" aria-hidden="true" style="font-size: 1.2em"></i>
        </a>

      </div>
    </div>
    <div id="mpo-panel" v-bind:class="[isLoginActive ? 'mpo-container-active' : 'mpo-container']">
      <div class="mpo-content state-login">
        <div class="error-wrapper"></div>
        <div class="login-remind">请输入您的悠艇客会员名和密码。</div>
        <div class="form-wrapper">
          <form method="post" action="#" class="member-login-form">
            <div class="mpo-login-field-wrapper">
              <div class="mpo-login-field-container tooltip-active">
                <div class="field-group cx-inputfield">
                  <label for="memberID" class="fallback-label field-label">会员名/手机号</label>
                  <input aria-describedby="memberIDTooltip" class="field-input" name="memberID" id="memberID"
                         placeholder="会员名/手机号" type="text">
                </div>
                <div class="field-group cx-inputfield">
                  <label for="pin" class="fallback-label field-label">密码</label>
                  <input class="field-input" name="pin" id="pin" placeholder="密码" type="password">
                </div>
              </div>
            </div>

            <input class="mpo-submit" value="登录" type="submit">

          </form>
          <div class="mpo-helpful-information">忘记了您的<a href="#">会员号码</a>或<a href="#">个人密码</a>?<br>没有账户？<a
            href="#">马上注册</a></div>
        </div>

        <div class="choose-account-wrapper">
          <div class="top-title">
            <div class="title">微信用户，自动授权登录</div>
          </div>
        </div>
      </div>
    </div>


    <div class="menu-container js-menu-container">
      <div class="parbase navigation">
        <div class="transition-wrapper">
          <h2 class="menu-heading">功能列表</h2>
          <nav>
            <ul role="menu">
              <li class="nav-home" role="presentation">
                <router-link to="/home">
                  <a>首页</a>
                </router-link>
              </li>
              <li class="nav-book-trip is-home" role="presentation">
                <a class="primary-menu-item" href="#" role="menuitem" aria-haspopup="true" aria-expanded="false">预订<i
                  class="icon icon-down" aria-hidden="true" lang="en"></i>
                  <i class="icon icon-arrow-right-smallspace" aria-hidden="true" lang="en"></i>
                </a>
              </li>
              <li role="presentation" class="">
                <router-link to="/destination">
                  <a class="primary-menu-item" aria-haspopup="true"
                     role="menuitem" aria-expanded="false">
                  <span class="link-text ">目的地<i class="icon icon-arrow-right-smallspace" aria-hidden="true"
                                                 lang="en"></i></span>
                  </a>
                </router-link>
              </li>
              <li role="presentation" class="">
                <router-link to="/boat">
                  <a class="primary-menu-item" aria-haspopup="true"
                     role="menuitem" aria-expanded="false">
                  <span class="link-text ">游艇租赁<i class="icon icon-arrow-right-smallspace" aria-hidden="true"
                                                  lang="en"></i></span>
                  </a>
                </router-link>
              </li>
              <li role="presentation" class="">
                <router-link to="/vacation">
                  <a class="primary-menu-item" aria-haspopup="true"
                     role="menuitem" aria-expanded="false">
                  <span class="link-text ">假期定制<i class="icon icon-arrow-right-smallspace" aria-hidden="true"
                                                  lang="en"></i></span>
                  </a>
                </router-link>
              </li>
              <li role="presentation" class="">
                <router-link to="/mine">
                  <a class="primary-menu-item" aria-haspopup="true"
                     role="menuitem" aria-expanded="false">
                  <span class="link-text ">我的悠艇客<i class="icon icon-arrow-right-smallspace" aria-hidden="true"
                                                   lang="en"></i></span>
                  </a>
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'header-bar',
    data: function () {
      return {isLoginActive: false, isRegionActive: false}
    },
    methods: {
      toggleLogin () {
        this.isLoginActive ? this.isLoginActive = false : this.isLoginActive = true
      },
      toggleRegion () {
        this.isRegionActive ? this.isRegionActive = false : this.isRegionActive = true
      }
    }
  }
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  @import '../../static/css/header.css';
</style>
