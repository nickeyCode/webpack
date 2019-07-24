import Vue from "vue";

const log = {
  debug : (msg) => {
    console.debug(msg)
  },
  error : (msg) => {
    console.error(msg)
  },
  info : (msg) => {
    console.info(msg)
  }
};

export default log

Vue.use(log);
Vue.prototype.$log = log;
