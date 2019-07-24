//import i18n
import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n);

export default new VueI18n({
  locale:'en',
  messages:{
    'en':require('./local/en/en'),
    'zh':require('./local/zh/zh'),
  }
});
