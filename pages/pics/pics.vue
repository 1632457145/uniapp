<template>
	<view class="pics">
		<scroll-view class="left" scroll-y>
			<view
			@click="leftClickHandle(index,item.id)"
			:class="active===index?'active':''" 
			v-for="(item,index) in goods" 
			:key="item.id">
				{{item.title}}
			</view>

		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				goods:[],
				active:0,
				secondData:[]
			}
		},
		methods: {
			async getPicsCate(){
				const res = await this.$myRequest({
					url:'/api/getimgcategory'
				})
				this.goods = res.data.message
			},
			async leftClickHandle(index,id){
				this.active=index
				// 获取右侧的数据
				const res = await this.$myRequest({
					url:'/api/getimgcategory'+id
				})
				this.secondData = res.data.message
			}
		},
		onLoad() {
			this.getPicsCate()
		}
	}
</script>

<style lang="scss">
	page{
		height: 100%;
	}
	.pics{
		height: 100%;
		.left{
			width: 200rpx;
			height: 100%;
			border-right: 1px solid #eee;
			view{
				height: 60px;
				line-height: 60px;
				color: #333;
				text-align: center;
				font-size: 30rpx;
				border-top: 1px solid #eee;
			}
		  .active{
		  	background-color: $shop-color;
				color: #fff;
		  }
		}
	}
</style>
