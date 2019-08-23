<template>
<div class="category">
   <div class="category_search_header">
		 		
				 	<div class="searchInput" @click="$router.push({path:'/searchpage'})">
          <img src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png" alt="">
          <span class="placeholder">搜索商品,超过20000件好物</span>
        </div>      
				     
   </div>
	 <div class="category_container">
		 	<div class="category_list_left" ref="left">
				 <ul class="category_list">
					 <li class="active">推荐专区</li>
					 <li>冬季专区</li>
					 <li>爆品专区</li>
					 <li>新品专区</li>
					 <li>居家</li>
					 <li>鞋包配饰</li>
					 <li>服装</li>
					 <li>电器</li>
					 <li>洗护</li>
					 <li>饮食</li>
					 <li>餐厨</li>
					 <li>婴童</li>
					 <li>文体区</li>
					 <li>特色区</li>				 
				 </ul>
			 </div>
		 	<div class="category_list_right">
				 <div class="category_img">
					 <img src="http://yanxuan.nosdn.127.net/ebf42d9334b2e23c009313eb097aadd2.jpg" alt="">
				 </div>				
					<ul class="category_content_list">
						<li class="category_content_item">
							<div>
									<img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
							</div>
							<div class="category_text">
								丁磊的好货推荐
							</div>
						</li>
							<li class="category_content_item">
							<div>
									<img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
							</div>
							<div class="category_text">
								丁磊的好货推荐
							</div>
						</li>	<li class="category_content_item">
							<div>
									<img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
							</div>
							<div class="category_text">
								丁磊的好货推荐
							</div>
						</li>	<li class="category_content_item">
							<div>
									<img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
							</div>
							<div class="category_text">
								丁磊的好货推荐
							</div>
						</li>	<li class="category_content_item">
							<div>
									<img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
							</div>
							<div class="category_text">
								丁磊的好货推荐
							</div>
						</li>
							<li class="category_content_item">
							<div>
									<img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
							</div>
							<div class="category_text">
								丁磊的好货推荐
							</div>
						</li>	<li class="category_content_item">
							<div>
									<img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
							</div>
							<div class="category_text">
								丁磊的好货推荐
							</div>
						</li>	<li class="category_content_item">
							<div>
									<img src="http://yanxuan.nosdn.127.net/14bbdfb252b4ce346b8e9d019bb5b677.png" alt="">
							</div>
							<div class="category_text">
								丁磊的好货推荐
							</div>
						</li>
					</ul>				
			 </div>
	 </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
    export default {
				name: "Category",
				mounted(){
					// console.log(this.$refs.left)
					// console.log(scrollY)
					new BScroll(this.$refs.left, {						
						click:true,
						scrollX:false,
						scrollY:true															
					})
				}				
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.category
	width 100%
	height 100%
	.category_search_header
		width 100%
		height 90px
		display flex
		position fixed
		top 0
		left 0	
		z-index 99
		background-color #ffffff
		.searchInput
			width 675px
			height 56px
			background-color #eee
			margin auto
			display flex
			justify-content center
			border-radius 10px
			img 
				width 28px
				height 28px
				padding-left 20px
				margin-top 15px
			.placeholder
				font-size 28px
				margin-top 15px
				padding-left  15px
	.category_container
		width 100%
		.category_list_left
			width 162px
			height 100%
			position fixed
			top 88px
			left 0
			border-right 1px solid #eee				
			li
				width 100%
				height 50px
				line-height 50px
				font-size 28px
				color #7e8c8d
				margin-top 50px
				text-align center
				&.active
					color #ab2b2b
					border-left 6px solid #ab2b2b
		.category_list_right
			box-sizing border-box
			float right 
			width 588px			
			padding 100px 30px 15px		
			.category_img
				width 528px
				height 192px
				img 
					width 100%
					height 100%
			.category_content_list
				width 528px
				display flex	
				flex-wrap wrap			
				.category_content_item
					width 144px
					height 216px
					margin-left 30px
					img 
						height 144px
					.category_text
						font-size 28px
						text-align center


</style>
