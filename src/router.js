import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import List from './views/List.vue'
import Search from './views/Search.vue'
import TopBar from './components/TopBar.vue'
import Cart from './views/ShoppingCart.vue'
import User from './views/User.vue'
import Product from './views/Products.vue'
import Goods from './components/Goods.vue'
import Detail from './components/Detail.vue'
import Evaluation from './components/Evaluation.vue'
import Recommend from './components/Recommend.vue'
import Routerdemo from './components/Router.vue'
import Bt from './views/Bt.vue'
import Admin from './views/Admin.vue'
import AdminHeader from './components/AdminHeader.vue'
import AdminConent from './components/AdminConent.vue'
import AdminAsider from './components/AdminAsider.vue'
import UserInfo from './components/UserInfo.vue'

Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/index',
			redirect: '/'
		},
		{
			path: '/',
			name: 'home',
			alias: '/zzz',
			component: Home
		},
		{
			path: '/list',
			name: 'list',
			component: List
		},
		{
			path: '/search',
			name: 'search',
			component: Search,
			
      
		},
		{
			path: '/cart',
			name: 'cart',
			component: Cart
		},
		{
			path:'/user',
			name:'user',
			component:User	
		},
		{
			path:'/userinfo',
			name:'userinfo',
			component:UserInfo	
		},
		{
			path: '/router',
			name: 'router',
			component: Routerdemo
		},
		{
			path: '/bt',
			name: 'bt',
			component: Bt
		},
		{
			path: '/admin',
			name: 'admin',
			component: Admin,
			children: [{
				path: '',
				components: {
					default: AdminConent,
					header: AdminHeader,
					asider: AdminAsider
				}
			}, {
				path: 'cart',
				components: {
					default: Cart,
					header: AdminHeader,
					asider: AdminAsider
				}
			}]
		},

		{
			path: '/product/:id',
			name: 'product',
			component: Product,
			children: [{
				path: 'goods',
				component: Goods
			}, {
				path: 'detail',
				component: Detail
			}, {
				path: 'evaluation',
				component: Evaluation
			}, {
				path: 'recommend',
				component: Recommend
			}]
		},

	]
})

router.beforeEach((to, from, next) => {
	next();

})

router.afterEach((to,from)=>{
	
})
export default router;