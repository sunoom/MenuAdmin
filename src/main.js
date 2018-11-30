
import Vue from 'vue'
import App from './App'
import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont.css'
import './assets/styles/main.scss'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)

//import './mock.js'

new Vue({
	el:"#App",
	router:router,
	render:function(h){
		return h(App);
	}
})