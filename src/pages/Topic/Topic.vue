<template>
    <div class="tipic">
      <LoginHeader></LoginHeader>
      <div class="title_tab">
				<div class="tab_warpper" ref="tab_scroll" >
					<ul class="tab_list">
						<li>盛夏特别版</li>
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
			})
		}				
}
</script>

<style  lang="stylus" rel="stylesheet/stylus" scoped>
.tipic
	.title_tab
		.tab_warpper
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

					



</style>
