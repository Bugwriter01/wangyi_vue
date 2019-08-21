<template>
    <div id="container">
    <!--头部-->
    <Header id="header">
      <div class="header_search">
        <a href="##" class="logo">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
        </a>
        <div class="searchInput"  @click="$router.push({path:'/searchpage'})">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
          <span class="placeholder">搜索商品,超过20000件好物</span>
        </div>       
        <span class="loginBtn">登录</span>
      </div>
      <div class="header_nav">
        <ul class="header_nav_list">
          <li class="nav_item">推荐</li>
          <li class="nav_item">居家生活</li>
          <li class="nav_item"> 服饰鞋包</li>
          <li class="nav_item"> 美食酒水</li>
        </ul>
        <span class="right_span"></span>
      </div>
    </Header>
    <div id="content">
      <section class="home">
        <!-- 轮播图-->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="##">
                <img src="https://yanxuan.nosdn.127.net/e65e652f0ca19e6cc66f6ecc57631a7a.jpg?imageView&quality=75&thumbnail=750x0" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="">
                <img src="https://yanxuan.nosdn.127.net/e65e652f0ca19e6cc66f6ecc57631a7a.jpg?imageView&quality=75&thumbnail=750x0" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="">
                <img src="https://yanxuan.nosdn.127.net/e65e652f0ca19e6cc66f6ecc57631a7a.jpg?imageView&quality=75&thumbnail=750x0" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="">
                <img src="https://yanxuan.nosdn.127.net/e65e652f0ca19e6cc66f6ecc57631a7a.jpg?imageView&quality=75&thumbnail=750x0" alt="">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="">
                <img src="https://yanxuan.nosdn.127.net/e65e652f0ca19e6cc66f6ecc57631a7a.jpg?imageView&quality=75&thumbnail=750x0" alt="">
              </a>
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
          <!-- 如果需要导航按钮 -->
        </div>

        <div class="text_list">
          <ul>
            <li class="text_list_item">
              <span>网易自营品牌</span>
            </li>
            <li class="text_list_item">
            <span>30天无忧退货</span>
          </li>
            <li class="text_list_item">
            <span>48小时快速退款</span>
          </li>
          </ul>
        </div>
        <!--商品类型导航-->
        <div class="goods_nav">
          <ul class="goods_list">
            <li class="goods_item">
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">
                <p>居家</p>
              </a>
            </li>
            <li class="goods_item">
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">
                <p>鞋包配饰</p>
              </a>
            </li>
            <li class="goods_item">
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">
                <p>服装</p>
              </a>
            </li>
            <li class="goods_item">
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">
                <p>电器</p>
              </a>
            </li>
            <li class="goods_item">
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">
                <p>婴童</p>
              </a>
            </li>
            <li class="goods_item">
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">
                <p>饮食</p>
              </a>
            </li>
            <li class="goods_item">
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">
                <p>洗护</p>
              </a>
            </li>
            <li class="goods_item">
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">
                <p>餐厨</p>
              </a>
            </li>
            <li class="goods_item">
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">
                <p>文体</p>
              </a>
            </li>
            <li class="goods_item">
              <a href="javascript:;">
                <img src="http://yanxuan.nosdn.127.net/698205eb5a605f0f7c27aebadacd2317.png" alt="">
                <p>特色区</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="boss">
          <img src="https://yanxuan.nosdn.127.net/df012027a9bd3c0b0e5779c11b814180.png" alt="">
        </div>
        <div class="focus">
          <ul class="focus_list">
            <li>
              <p class="p1">实物好评榜</p>
              <p class="p2">精选优质好物</p>
              <img src="http://yanxuan.nosdn.127.net/e4092e675f895740f8e079980e8ebe63.png" alt="">
              <img src="http://yanxuan.nosdn.127.net/6725890e905c4d51e333485f3a934192.png" alt="">
            </li>
            <li>
            <p class="p1">新品畅销榜</p>
            <p class="p2">好物抢先体验</p>
            <img src="http://yanxuan.nosdn.127.net/780b2fc0c98fac7b2862a8a111ee615f.png" alt="">
            <img src="http://yanxuan.nosdn.127.net/780b2fc0c98fac7b2862a8a111ee615f.png" alt="">
          </li>
            <li>
            <p class="p1">严选线下店首家</p>
            <p class="p2">体验选式美学</p>
            <img src="http://yanxuan.nosdn.127.net/a07c82f8b26a4ed42b1d697eb9ea418f.png" alt="">
            <img src="http://yanxuan.nosdn.127.net/d1d2488296c5e75967ebfbdf8a36d6cc.png" alt="">
          </li>
            <li>
            <p class="p1">12月必买好物</p>
            <p class="p2">冬日小确幸指南</p>
            <img src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png" alt="">
            <img src="http://yanxuan.nosdn.127.net/362a8249b48d91d99604680b5471b507.png" alt="">
          </li>
          </ul>
        </div>
        <div class="private">私人定制</div>
      </section>
      <section class="category"></section>
      <section class="shiwu"></section>
      <section class="shopCart"></section>
      <section class="personal"></section>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'
export default {
    name: "Home",
    mounted() {
    new Swiper('.swiper-container', {
                loop: true,        
                pagination: {
                el: '.swiper-pagination',
                },
            })       
    },
}

</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#header
  width 100%
  .header_search
    width 100%
    display flex
    flex-flow row nowrap
    align-items center
    padding 8px 15px
    .logo
      img
        display inline-block
        width 138px
        height 40px
        background-position center
        background-size cover
        line-height 88px
        margin-left 15px
    .searchInput
      width 442px
      height 56px
      background #eee
      border-radius 5px
      margin-left 20px
      img
        width 28px
        height 28px
        padding-left 20px
        margin-top 10px
      .placeholder
        font-size 28px
        color #666666
        margin-left 10px

    .loginBtn
      width 76px
      height 42px
      line-height 42px
      font-size 24px
      text-align center
      color red
      border-radius 5px
      border 1px solid #b4282d
      margin-left 15px
  .header_nav
    width 100%
    height 60px
    .header_nav_list
      width 100%
      height 60px
      .nav_item
        font-size 28px
        float left
        padding 0px 36px
        line-height 60px
#content
  .home
    .text_list
      height 72px
      padding 0px 30px
      width 100%
      .text_list_item
        float left
        line-height 72px
        margin 0 auto
        span
          font-size 24px
          color #b4282d
          margin-left 50px
          text-align center
    .goods_nav
      width 100%
      height 340px
      box-sizing border-box
      .goods_list
        margin-left 15px
        .goods_item
          float left
          width 110px
          height 156px
          margin 10px 15px 0
          img
            width 110px
            height 110px
          p
            font-size 24px
            text-align center
    .boss
      width 100%
      margin-bottom 20px
      img
        height 160px
    .focus
      width 100%
      height 528px
      margin 0 0 10px
      .focus_list
        height 100%
        margin-left 25px
        li
          float left
          background #f5f5f5
          margin 4px 0 0 4px
          padding 20px 0 0 20px
          img
            width 150px
            height 150px
            margin 0 4px 0 0
          .p1
            font-size 32px
            padding 0 0 0 10px
            margin 10px 0 10px 0
          .p2
            font-size 24px
            padding 0 0 0 10px
            margin 10px 0
    .goods_brand
      width 100%
      height 100px
      padding 0 30px
      overflow hidden
      .goods_brand_text
        font-size 32px
        line-height 100px
      .brand_more
        float right
        font-size 24px
        color #000000
        margin-right 50px
        line-height 100px

    .private
      font-size 32px
      width 100%
      height 100%
      line-height 100px
      padding 0 30px      

</style>
