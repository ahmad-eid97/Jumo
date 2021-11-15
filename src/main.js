import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/bootstrap.min.css'
import 'bootstrap'
import 'jquery'
import 'popper.js'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyDRT25bUJBSnmFXz6F_LtEWU86TCBN337c",
  authDomain: "jumo-2020.firebaseapp.com",
  databaseURL: "https://jumo-2020.firebaseio.com",
  projectId: "jumo-2020",
  storageBucket: "jumo-2020.appspot.com",
  messagingSenderId: "469279758848",
  appId: "1:469279758848:web:d8f24384ed268550b056e5",
  measurementId: "G-52DZ8WVXJS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')