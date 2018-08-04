// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
const App = () => import('./App')
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
const AlertCmp = () => import('./components/Shared/Alert.vue')

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyAxJdNOYip--1OiZKXtUEJQbHvylN2ZJHQ',
      authDomain: 'vue-firebase-auth-vuex-2a098.firebaseapp.com',
      databaseURL: 'https://vue-firebase-auth-vuex-2a098.firebaseio.com',
      projectId: 'vue-firebase-auth-vuex-2a098',
      storageBucket: 'vue-firebase-auth-vuex-2a098.appspot.com'
    })
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoSignIn', user)
      }
    })
  }
})
