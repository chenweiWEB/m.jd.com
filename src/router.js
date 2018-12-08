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

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [{
			path: '/',
			name: 'home',
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
			component: Search
		},
		{
			path: '/cart',
			name: 'cart',
			component: Cart
		},
		{
			path: '/user',
			name: 'user',
			component: User
		},
		{
			path: '/product/:id',
			name: 'product',
			component: Product,
			children: [{
					path:'goods',
					component:Goods
			},{
					path:'detail',
					component:Detail
			},{
					path:'evaluation',
					component:Evaluation
			},{
					path:'recommend',
					component:Recommend
			}
			]
		},

	]
})