<template>
  <div class="phone_login">
    <LoginHeader/>
    <div class="phone_login_content">
      <div class="phone_login_content_img">
        <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="email_input_box">
        <input type="text" placeholder="请输入手机号" class="email_input">
      </div>
      <div class="email_password">
        <input type="text" placeholder="请输入密码" class="email_password_input">
      </div>
      <div class="tip_text">
        <a href="https://reg.163.com/naq/findPassword#/verifyAccount">忘记密码</a>
        <span @click="$router.push({path:'/phonelogin'})">短信快捷登录</span>
      </div>
      <div class="login_button">
        <button class="btn">登录</button>
      </div>
      <div class="other_login_way">
        <span @click="$router.push({path:'/usercenter'})">其它方式登录 ></span>
      </div>
     
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.phone_login
  .phone_login_content
    width 100%
    .phone_login_content_img
      display flex
      justify-content center
      margin 56px 0 135px
      img 
        width 192px
        height 64px
    .email_input_box
      height 90px
      display flex
      justify-content center
      .email_input
        width 675px
        outline none 
        border-bottom 1px solid #666
        font-size 30px
    .email_password
      margin 30px 0 30px 0
      position relative
      height 90px
      display flex
      justify-content center
      .email_password_input
        width 675px
        outline none 
        border-bottom 1px solid #666
        font-size 30px
    .tip_text
      height 45px
      padding 0 38px 45px 36px
      display flex
      justify-content space-between
      span
        font-size 28px
        color #333
        text-align center
        line-height 45px
      a
        font-size 28px
        color #333
        text-align center
        line-height 45px
    .login_button
      display flex
      justify-content center
      .btn 
        height 98px
        width 680px    
        background #DD1A21
        font-size 30px
        color #ffffff
        line-height 98px
        text-align center
        border none
    .other_login_way
      margin-top 50px
      display flex
      justify-content center
      span
        font-size 28px
</style>
