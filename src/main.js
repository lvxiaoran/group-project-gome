import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import FastClick from 'fastclick'
import 'lib-flexible'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

import LyTab from 'ly-tab'

Vue.use(LyTab)

Vue.use(VueAwesomeSwiper)



// 300ms延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  components: {
  }
})
