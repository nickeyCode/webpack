import Vue from 'vue'

Vue.filter('moneyFilter',function (value) {
  return "$" + value
})
