// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './utils/router'
import './filter/globalFilter'
import log from './utils/logUtil'
import i18n from './utils/i18n/i18n'
import dataService from './service/dataService'
//import element-ui



Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
});
