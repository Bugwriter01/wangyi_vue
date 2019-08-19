<template>
    <div class="user_center">
			<div class="user_header">
				<div class="header_left">
					<i class="iconfont icon-shouye"></i>
				</div>
				<div class="header_center">
					<span>网易严选</span>
				</div>
				<div class="header_right">
						<i class="iconfont icon-sousuo"></i>
						<i class="iconfont icon-gouwuche"></i>
				</div>
			</div>
			<div class="user_login">
				<div class="user_img">
					<img src="https://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
				</div>
				<div class="phone_login">						
						<button class="phone_login_btn">
							<i class="iconfont icon-shouji"></i>
							手机号码登录</button>
				</div>
				<div class="eamil_login">						
						<button class="email_login_btn">
							<i class="iconfont icon-email"></i>
							邮箱账号登录</button>
				</div>
				<div class="phonetitle">
					手机号快速注册>
				</div>
			</div>
		</div>
</template>

<script>
    export default {
        name: "Usercenter"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.user_center
	width 100%
	height 100%
	.user_header
		height 88px
		display flex
		background-color #fff
		.header_left
			height 100%
			line-height 88px
			margin-left 24px		
			.icon-shouye
				font-size 50px
		.header_center
			width 60%
			display flex
			justify-content center
			margin-left 36px 
			span 
				font-size 36px			
				line-height 88px
				text-align center 
		.header_right
			line-height 88px
			.iconfont
				font-size 50px
				margin-left 30px 
	.user_login
		width 100%
		height 1200px
		background #eee
		z-index 100
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
			background-color #eee 
			margin 32px 0 0 
			color  #b4282d
			border 1px solid  #b4282d
			.icon-email
				font-size 30px
	.phonetitle	
		width 100%
		text-align center
		font-size 28px

</style>
