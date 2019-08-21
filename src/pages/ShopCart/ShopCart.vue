<template>
  <div class="shopCart">
    <div class="shopcart_header">
      <span class="car">购物车</span>
      <span class="lingquan">领券</span>		
    </div>
		<div class="shopcart_text">
			<ul class="shopcart_text_list">
				<li>
					<span>30天无忧退货</span>
				</li>
					<li>
					<span>48小时极速退款</span>
				</li>
					<li>
					<span>满88元免邮费</span>
				</li>
			</ul>		
		</div>
		<div class="shopcart_content">
				<img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png" alt="">
				<p>去添加点什么吧</p>
				<div  class="loginBtn">
					<button class="btn" @click="$router.push({path:'/usercenter'})">登录</button>
				</div>
				
		</div>
	</div>
    
</template>

<script>
    export default {
        name: "Shopcart"
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.shopCart
	.shopcart_header
		height 88px
		position relative
		padding  0 30px
		text-align center
		line-height 88px
		.car
			font-size 36px
			float left
		.lingquan
			font-size 30px
			position absolute
			top 0
			right 30px
			color #B4282D
	.shopcart_text
		position relative
		background-color #eee					
		display flex		
		.shopcart_text_list
			align-items center
			height 70px
			li
				font-size 28px
				float left
				text-align center
				margin-left 50px
				line-height 70px
				color #666
	.shopcart_content
		text-align center
		height 1176px
		background #F4F4F4
		img 
			margin 345px auto 0
		p
			font-size 28px
			color #666
		.loginBtn
			width 100%
			.btn
				width 480px
				height 92px
				background #b4282d
				color #ffffff
				font-size 36px
				text-align center
				line-height 70px
				margin-top 50px
</style>
