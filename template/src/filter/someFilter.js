import Vue from 'vue'

Vue.filter('someFilter',function (value) {
  return "---" + value
})
