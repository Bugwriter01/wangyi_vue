<template>
  <div class="phone_login">
    <LoginHeader/>
    <div class="phone_login_content">
      <div class="phone_login_content_img">
        <img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="phone_login_input_box">
        <input type="tel"  maxlength="11" placeholder="请输入手机号" class="phone_login_input" v-model="phone" >
        <i class="iconfont icon-chahao" v-show="phone" @click="phone=''"></i>
      </div>
      <div class="email_login_input_box">
        <input type="text" placeholder="请输入验证码" class="email_login_input">
        <div class="get_authCode">
          <span :disabled="!isRightTel || computeTime>0"  :class={active:phone} @click="sendCode">{{computeTime>0? `短信已发送(${computeTime}s)`:'获取验证码'}}</span>
        </div>
      </div>
      <div class="tip_text">
        <span>遇到问题？</span>
        <span @click="$router.push({path:'/fastlogin'})">使用密码验证登录</span>
      </div>
      <div class="login_button">
        <button class="btn">登录</button>
      </div>
      <div class="agree_title">
        <input type="checkbox" class="checkbox">
        <span>我同意</span>
        <a href="https://reg.163.com/agreement_mobile_wap.shtml?v=20171127">《服务条款》</a>
        <span>和</span>
        <a href="https://reg.163.com/agreement_mobile_ysbh_wap.shtml?v=20171127">《网易隐私政策》</a>
      </div>
      <div class="other_login_way">
        <span @click="$router.push({path:'/usercenter'})">其它方式登录 ></span>
      </div>
     
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){      
      return{
        phone:'',
        code:'',
        computeTime:0
      }
    },
    methods:{
       sendCode(){
         if(this.computeTime || !this.isRightTel){
           return
         }
        this.computeTime=30
        const intervalId = setInterval(()=>{
          if(this.computeTime===0){
            clearInterval(intervalId)
          }else{
            this.computeTime--
          }
        },1000)
      }

    },
    computed:{
      isRightTel(){
        return /^1\d{10}$/.test(this.phone)
      }
    }

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.phone_login
  .phone_login_content
    width 100%
    .phone_login_content_img
      display flex
      justify-content center
      margin 200px 0 135px
      img 
        width 192px
        height 64px
    .phone_login_input_box
      height 90px
      position relative
      display flex
      justify-content center
      .phone_login_input
        width 675px
        outline none 
        border-bottom 1px solid #666
        font-size 30px
      .icon-chahao
        font-size 30px
        position absolute
        right 50px
        bottom 20px
    .email_login_input_box
      margin 30px 0 30px 0
      position relative
      height 90px
      display flex
      justify-content center
      .email_login_input
        width 675px
        outline none 
        border-bottom 1px solid #666
        font-size 30px
      .get_authCode
        height 56px      
        position absolute
        right 0
        bottom 0
        margin 0 50px 20px 0
        border 1px solid #333
        span 
          line-height 56px
          text-align center
          font-size 28px
          color #666
          margin 0 5px 0 5px
          &.active
            color #000
    .tip_text
      height 45px
      padding 0 38px 45px 36px
      display flex
      justify-content space-between
      span
        font-size 28px
        color #666
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
    .agree_title
      margin 30px 0 0 30px
      .checkbox
        width 28px
        height 28px
        border none 
        outline none
      span 
        font-size 28px
      a
        font-size 28px
        color #007AFF
    .other_login_way
      margin-top 50px
      display flex
      justify-content center
      span
        font-size 28px
</style>
