<template>
  <footer id="footer">
   <ul class="footer_nav">
     <router-link to="/home">
        <li class="footer_nav_item">
        <i class="u-icon u-icon-tabBar-index"></i>
        <span class="text">首页</span>
      </li>
     </router-link>
     <router-link to="category">
        <li class="footer_nav_item">
        <i class="u-icon u-icon-tabBar-cate"></i>
        <span class="text">分类</span>
      </li>
     </router-link>
     <router-link to="topic">
       <li class="footer_nav_item">
        <i class="u-icon u-icon-tabBar-topic"></i>
        <span class="text">识物</span>
      </li>
     </router-link>
     <router-link to="shopcart">        
      <li class="footer_nav_item">
        <i class="u-icon u-icon-tabBar-cart"></i>
        <span class="text">购物车</span>
      </li>
     </router-link>
     <router-link to="usercenter">
        <li class="footer_nav_item">
        <i class="u-icon u-icon-tabBar-ucenter"></i>
        <span class="text">个人</span>
      </li>
     </router-link>
     
    </ul>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#footer
  position fixed
  left 0
  bottom 0
  width 100%
  height 100px
  background-color #fafafa
  border-top 1px solid #d9d9d9
  z-index 101
  .footer_nav
    height 100px
    display flex
    align-items center
    .footer_nav_item
      width 150px
      height 75px
      text-align center
      .u-icon
        display inline-block
        width 40px
        height 40px
        margin-bottom 15px
        background-size 40px 490px
        background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-2a8cea5605.png")
      .u-icon-tabBar-index
        background-position 0 -200px
      .u-icon-tabBar-cate
        background-position 0 -150px
      .u-icon-tabBar-topic
        background-position 0 -350px
      .u-icon-tabBar-cart
        background-position 0 -50px
      .u-icon-tabBar-ucenter
        background-position 0 -450px
      .text
        display block      
        font-size 28px
        margin-top -15px
</style>
