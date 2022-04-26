import 'font-awesome/css/font-awesome.css'

import Vue from 'vue'

import App from './App'

import './config/boostrap'
import './config/msgs'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//temporario
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkFuZHJlIEZhZ3VuZGVzIiwiZW1haWwiOiJhbmRyZUB0ZXN0ZS5jb20uYnIiLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjUwOTE1MjAyLCJleHAiOjE2NTExNzQ0MDJ9.ow2Y2sHp3SPbXKGNf-PGBESMLS9sYXJwk8eSr3JppkA'

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')