<template>
    <div class="user_center">
			<LoginHeader/>
			<div class="user_login">
				<div class="user_img">
					<img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
				</div>
				<div class="phone_login">						
						<button class="phone_login_btn" @click="$router.push({path:'/phonelogin'})">
							<i class="iconfont icon-shouji"></i>
							手机号码登录</button>
				</div>
				<div class="eamil_login">						
						<button class="email_login_btn" @click="$router.push({path:'/emaillogin'})">
							<i class="iconfont icon-email"></i>
							邮箱账号登录</button>
				</div>
				<div class="login_way">
					<div class="wei_chat">						
							<i class="iconfont icon-weixnhao"></i>	
							<span>微信</span>										
					</div>
				
					<div class="qq">
							<i class="iconfont icon-qq"></i>	
							<span>QQ</span>			
					</div>
					<div class="weibo">
							<i class="iconfont icon-weibo"></i>	
							<span>微博</span>			
					</div>
				</div>
			
			</div>
				<router-view/>

		</div>
</template>

<script>
    export default {
        name: "Usercenter"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.user_center
	position relative
	width 100%
	height 100%
	.user_login
		width 100%
		height 1246px
		background #F2F5F4
	
	.user_img
		width 100%
		height 480px
		line-height 480px
		text-align center
		img 
			width 268px
			height 90px
	.phone_login
		width 100%
		height 98px	
		display flex
		justify-content center
		.phone_login_btn
			font-size 30px
			width 680px
			height 98px
			margin 32px 0 0 
			color #fff
			background-color #b4282d 
			.icon-shouji
				font-size 36px
	.eamil_login
		width 100%
		height 98px
		display flex
		justify-content center
		margin-top 30px
		.email_login_btn
			font-size 30px
			width 680px 
			height 98px
			text-align center
			background-color #F2F5F4
			margin 32px 0 0 
			color  #b4282d
			border 1px solid  #b4282d
			.icon-email
				font-size 30px
	.login_way
		width 100%
		height 40px
		position absolute
		left 0
		bottom 90px
		display flex
		justify-content center
		text-align center
		line-height 40px
		.wei_chat
			border-right 1px solid #666
			margin-right 32px
			.icon-weixnhao
				font-size 36px
				color #666
			span
				margin-right 32px

				font-size 30px
				color #666
		.qq
			margin-right 32px
			border-right 1px solid #666
			.icon-qq
				font-size 36px
				color #666
			span
				margin-right 32px

				font-size 30px	
		.weibo
			margin-right 32px
			.icon-weibo
				font-size 36px
				color #666
			span
				font-size 30px
				color #666

</style>
