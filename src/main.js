import Vue from 'vue'
import App from './App.vue'

//Resource
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import Router from './router'

//Firebase
import'./firebase';
import VueFire from 'vuefire';

Vue.use(Vuetify)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(VueFire)

Vue.config.productionTip = false

const router = new VueRouter({
  routes: Router
});

//Custom directives
// Vue.directive('rainbow',{
//   bind(el){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// });

// Vue.directive('theme',{
//   bind(el,binding){
//     if(binding.value == 'wide'){
//       el.style.maxWidth = "1200px";
//     }
//     else if(binding.value == 'narrow'){
//       el.style.maxWidth = "560px";
//     }
//     if(binding.arg == 'column'){
//       el.style.background = '#ddd';
//       el.style.padding = '20px';
//     }
//   }
// });

//Filters
Vue.filter('to-uppercase', function(value){
  return value.toUpperCase();
});
Vue.filter('snippet',function(value){
  if(value.length >= 100){
    return value.slice(0,100) + "...";
  }
  return value.slice(0,100);
})

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
