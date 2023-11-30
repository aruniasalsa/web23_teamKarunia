import Vue from 'vue'
import Router from 'vue-router'

// User
import User from '../views/user/list'
import AddUser from '../views/user/add'
import EditUser from '../views/user/edit'
import DetailUser from '../views/user/detail'

// Product
import addProduct from '../views/product/add'
import detailProduct from '../views/product/detail'
import editProduct from '../views/product/edit'
import listProduct from '../views/product/list'


// Product
import Product from '../views/product/list'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'list-user',
			component: User
		},
		{
			path: '/list-user',
			name: 'list-user',
			component: User
		},
		{
			path: '/add-user',
			name: 'add-user',
			component: AddUser
		},
		{
			path: '/edit-user',
			name: 'edit-user',
			component: EditUser
		},
		{
			path: '/detail-user',
			name: 'detail-user',
			component: DetailUser
		},
		{
			path: '/add-product',
			name: 'add-product',
			component: addProduct
		},
		{
			path: '/detail-product',
			name: 'detail-product',
			component: detailProduct
		},
		{
			path: '/edit-product',
			name: 'edit-product',
			component: editProduct
		},
		{
			path: '/list-product',
			name: 'list-product',
			component: listProduct
		}
	]
})

