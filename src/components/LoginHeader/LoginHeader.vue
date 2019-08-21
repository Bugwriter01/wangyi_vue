<template> 
    <div class="user_header">
				<div class="header_left">
					<i class="iconfont icon-shouye" @click="$router.push({path:'/home'})"></i>
				</div>
				<div class="header_center">
					<span>网易严选</span>
				</div>
				<div class="header_right">
						<i class="iconfont icon-sousuo"  @click="$router.push({path:'/searchpage'})"></i>
						<i class="iconfont icon-gouwuche"  @click="$router.push({path:'/shopcart'})"></i>
				</div>		
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
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
 
</style>
