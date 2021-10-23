import Vue from 'vue'
import App from './App.vue'

// custom directive
Vue.directive("font-size", {
  // en çok binding ve el işimize yarauabilir
  bind: (el, binding, vnode) => { // eleman bind edildiğinde(gelir gelmez)
    el.style.fontSize = binding.value + "px"
    el.style.fontWeight = "bold"
    console.log(binding.modifiers);
    console.log(vnode);
    if(binding.modifiers.foo) {
      console.log("foo modifier");
    }
  },
  updated: (el/*, binding*/) => { // eleman updateolduğunda
    el.style.fontSize = "24px"
    el.style.fontWeight = "bold"
  },
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
