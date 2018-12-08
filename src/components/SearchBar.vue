 <template>

	<div class="search-bar weui-flex" :class="{fixed:fixed}">
		<div class="category">
			<span class="fa fa-th-list"></span>
		</div>
		<div class="search weui-flex__item">
			<input type="search" placeholder="请输入搜索内容" />
		</div>
		<div class="user">
			<span class="fa fa-user"></span>
		</div>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				fixed: false
			};
		},
		methods: {},
		watch: {},
		computed: {},
		created() {
			console.log("search-bar");
		},
		mounted() {
			var self = this;
			window.addEventListener("scroll", function() {
				var scrollTop = document.body.scrollTop || window.pageYOffset || document.documentElement.scrollTop;
				if(scrollTop > 10) {
					self.fixed = true;
				} else {
					self.fixed = false;
				}
			});
		}
	}
</script>

<style >
	.search-bar {
		position: fixed;
		top: 0px;
		left: 0px;
		height: 44px;
		width: 100%;
		z-index: 9999;
	}
	
	.search-bar .category,
	.search-bar .user {
		width: 50px;
		height: 44px;
		font-size: 20px;
		color: #FFF;
		line-height: 44px;
		text-align: center;
	}
	
	.search-bar .search {
		padding-top: 7px;
	}
	
	.search-bar input {
		width: 100%;
		height: 30px;
		border-radius: 15px;
		border: none;
		outline: none;
		padding-left: 40px;
		background-color: #fff;
		box-sizing: border-box;
	}
	
	.search-bar.fixed {
		background-color: #e43130;
	}
</style>