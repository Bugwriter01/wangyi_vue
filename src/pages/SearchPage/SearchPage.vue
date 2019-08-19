<template>
  <div class="search_page">
		<div class="search_header">
			<input type="text" class="search_input" placeholder="硅藻土浴室地垫,直降29元">
			<span class="cancel">取消</span>
		</div>
		<div class="hot_search">热门搜索</div>		 
		<ul class="nav_list">
			<li>
				<a href="javascript:;">爆款行李箱</a>
			</li>
			<li>
				<a href="javascript:;">香氛牙膏 谈吐芳香</a>
			</li> 
			<li>
				<a href="javascript:;">轻弹云朵拖鞋9.9元</a>
			</li>
			<li>
				<a href="javascript:;">中秋月饼 上新热卖</a>
			</li>
			<li>
				<a href="javascript:;">韩国造 睡眠喷雾</a>
			</li>
			<li>
				<a href="javascript:;">酸梅汤 吃货推荐</a>
			</li>
			<li>
				<a href="javascript:;">拖鞋</a>
			</li>
			<li>
				<a href="javascript:;">杯子</a>
			</li>
			<li>
				<a href="javascript:;">手机壳</a>
			</li>
		</ul>
		 
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name:"SearchPage"
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.search_page
	width	100%
	.search_header
		box-sizing border-box
		width 100%
		height 88px
		font-size 28px
		.search_input	
			margin 15px 0 10px 20px	
			width 552px
			height 56px			
			padding-left 60px
			color #666
			background #eee
			background-image url("http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png")
			background-size 28px
			background-repeat no-repeat
			background-position 15px 15px
			border-radius 5px
		.cancel
			margin-left 20px
	.hot_search
		width 100%
		height 90px
		color #666
		font-size 30px
		margin 20px 0 0 20px
	.nav_list
		float left
		height 420px
		padding 0 30px 0 30px
		li			
			height 48px
			border 1px solid #333
			border-radius 5px
			margin 0 32px 32px 0
			line-height 48px
			a
				font-size 24px				
				padding 3px 5px 3px 5px
</style>
