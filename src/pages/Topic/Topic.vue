<template>
    <div class="tipic">
      <LoginHeader></LoginHeader>
      <div class="title_tab">
				<div class="tab_warpper" ref="tab_scroll" >
					<ul class="tab_list">
						<li class="active">盛夏特别版</li>
						<li>推荐</li>
						<li>好货内部价</li>
						<li>回购榜</li>
						<li>晒单</li>
						<li>开发者日记</li>
						<li>达人</li>
						<li>HOME</li>
					</ul>
				</div>
			</div>
			<div class="tipic_content" ref="content_scroll">
				<div class="tipic_content_scroll_box" >
					<div class="tipic_content_top">
						<div class="tipic_content_top_title">
							<span>让生活更好的N种方式</span>
						</div>
						<div class="tipic_content_top_text">
							<span>可爱值max的严选萌物</span>
						</div>
						<div class="img_scroll_box" ref="img_scroll">
							<ul class="img_list"> 
								<li>
									<img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
								</li>
								<li>
									<img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
								</li>
								<li>
									<img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
								</li>
								<li>
									<img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
								</li>
								<li>
									<img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
								</li>
								<li>
									<img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
								</li>

								<li>
									<img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
								</li>
								<li>
									<img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
								</li>
								<li>
									<img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
								</li>
								<li>
									<img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
								</li>
								<li>
									<img src="https://yanxuan.nosdn.127.net/2e34ecc627ada4cbf5b82791a6cbb83a.jpg" alt="">
								</li>
							</ul>
						</div>
						<div class="cut_line">
						</div>
					</div>
					<div class="topic_content_box">
						<div class="topic_content_box_title">
							TA们的严选生活
						</div>
						<div class="topic_content_box_toggle">
							<span class="active">最新</span>
							<span>本月最热</span>
							<span>晒单合集</span>
						</div>							
					</div>
					<div class="topic_content_warpper">
							<div class="left_list">				
									<div class="list_item_inner">
										<div class="list_item_inner_img">
											<img src="https://yanxuan.nosdn.127.net/6505794b8695a687c652b79f25139a31.jpg" alt="">
										</div>
										<p class="list_item_inner_title1">高品质音乐</p>
										<p class="list_item_inner_title2">精致生活离不开高品质音乐</p>
									</div>						
							</div>
							<div class="right_list">
								<div class="list_item_inner">
										<div class="list_item_inner_img">
											<img src="https://yanxuan.nosdn.127.net/b128ef938d0f3b97d783e13a6bbf11b9.jpg" alt="">
										</div>
										<p class="list_item_inner_title1">高品质音乐</p>
										<p class="list_item_inner_title2">精致生活离不开高品质音乐</p>
									</div>			
							</div>
					</div>
				</div>
			</div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
		name: "Topic",
			mounted(){
			new BScroll(this.$refs.tab_scroll, {						
				click:true,
				scrollX:true,
				scrollY:false															
			}),
			new BScroll(this.$refs.img_scroll, {						
				click:true,
				scrollX:true,
				scrollY:false															
			})
			this.$nextTick(() => {
				console.log('--s--')
				new BScroll(this.$refs.content_scroll, {						
					click:true,
					scrollY:true															
				})
			})
			
		},
			
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.tipic
	.title_tab
		width 100%
		height 80px
		.tab_warpper
			position fixed
			left 0
			top 88px
			width 100%
			height 80px
			background #fafafa
			overflow hidden
			display flex
			white-space nowrap
			.tab_list
				display flex
				height 80px
				position fixed
				top 88px
				left 0
				padding-left 50px
				li
					height 80px
					font-size 28px
					line-height 80px				
					margin-right 30px
					&.active
						border-bottom 4px solid #B4282D
						color #B4282D
	.tipic_content
		width 100%
		height 600px
		display flex
		padding 168px 0 100px 0
		.tipic_content_scroll_box
			width 100%
			height 3000px
			.tipic_content_top
				width 100%
				height 438px
				.tipic_content_top_title
					display flex
					justify-content center
					span 
						font-size 30px 
						color #666
				.tipic_content_top_text
					display flex
					justify-content center
					margin-top 50px
					span 
						font-size 32px 
						color #333
				.img_scroll_box
					margin 30px 0 30px 0
					width 100%
					height 240px
					.img_list
						display inline-block
						white-space nowrap
						li
							display inline-block
							width 240px
							height 240px
							img 
								width 100%
								height 100%
				.cut_line
					width 100%
					height 20px
					background #f4f4f4
					margin 20px 0
			.topic_content_box
				width 100%
				.topic_content_box_title
					font-size 32px
					color #333
					margin-top 60px
					text-align center
				.topic_content_box_toggle
					font-size 28px
					margin-top 30px
					display flex
					justify-content space-around
					span 
						background #eee
						padding 10px 30px
						&.active
							font-weight 700
							color #b0955f
							background  #ffe4af 
			.topic_content_warpper
				width 100%
				 
				box-sizing border-box
				display flex
				flex-direction row
				margin: 30px 10px 20px 20px
				.left_list
					display flex
					flex-direction column
					.list_item_inner
						width 345px
						height 495px
						.list_item_inner_img
							img 
								width 345px
								height 345px
								border-radius 12px
						.list_item_inner_title1
							font-size 32px
							font-weight 700
							text-align center	
							margin: 30px auto 20px	
						.list_item_inner_title2
							font-size 28px
							color #333
				.right_list
					margin-left 15px
					display flex
					flex-direction column
					.list_item_inner
						width 345px
						height 495px
						.list_item_inner_img
							img 
								width 345px
								height 460px
								border-radius 12px
						.list_item_inner_title1
							font-size 32px
							font-weight 700
							text-align center	
							margin: 30px auto 20px	
						.list_item_inner_title2
							font-size 28px
							color #333
					

				
								
						



    					





</style>
