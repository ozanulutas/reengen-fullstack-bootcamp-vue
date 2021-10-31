export default {
  // böyle plugin tanımlıyoruz
  install(Vue) {
    Vue.prototype.$italicaHTML = function (text) {
      return "<i>" + text + "</i>"
    },
    Vue.prototype.$numberSum = (num) => {
      let res = 0;
      for (let i = 0; i < num; i++) {
        res += i;
      }
      return res;
    }
  }
}