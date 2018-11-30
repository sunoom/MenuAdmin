import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Dashboard from '../pages/Dashboard'

import MenuList from '../pages/menu/list'
import MenuCategoryList from '../pages/menucategory/list'

import UserList from '../pages/user/list'
import UserChangePwd from '../pages/user/changepwd'
import UserProfile from '../pages/user/profile'

Vue.use(VueRouter)

let router=new VueRouter({
	routes:[
		{
	      path: '/login',
	      name: '登录',
	      component: Login
	    },
	    {
	      path: '/',
	      name: 'home',
	      component: Home,
	      redirect: '/dashboard',
	      leaf: true, // 只有一个节点
	      menuShow: true,
	      iconCls: 'iconfont icon-home', // 图标样式class
	      children: [
	        {path: '/dashboard', component: Dashboard, name: '首页', menuShow: true}
	      ]
	    },
	    {
	      path: '/',
	      component: Home,
	      name: '用户管理',
	      menuShow: true,
	      leaf: true, // 只有一个节点
	      iconCls: 'iconfont icon-users', // 图标样式class
	      children: [
	        {path: '/user/list', component: UserList, name: '用户列表', menuShow: true}
	      ]
	    },
	    {
	      path: '/',
	      component: Home,
	      name: '菜单管理',
	      menuShow: true,
	      iconCls: 'iconfont icon-books',
	      children: [
	        {path: '/menu/list', component: MenuList, name: '菜单列表', menuShow: true},
	        {path: '/menu/category', component: MenuCategoryList, name: '菜单分类', menuShow: true}
	      ]
	    },
	    {
	      path: '/',
	      component: Home,
	      name: '设置',
	      menuShow: true,
	      iconCls: 'iconfont icon-setting1',
	      children: [
	        {path: '/user/profile', component: UserProfile, name: '个人信息', menuShow: true},
	        {path: '/user/changepwd', component: UserChangePwd, name: '修改密码', menuShow: true}
	      ]
	    }
	]
})
router.beforeEach((to, from, next) => {
  // console.log('to:' + to.path)
  if (to.path.startsWith('/login')) {
    window.localStorage.removeItem('access-user')
    next()
  } else {
    let user = JSON.parse(window.localStorage.getItem('access-user'))
    if (!user) {
      next({path: '/login'})
    } else {
      next()
    }
  }
})

export default router;