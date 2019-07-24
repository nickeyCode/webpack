import axios from 'axios/index'
import ElementUI from 'element-ui';
import Log from '@/components/utils/logUtil'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
axios.defaults.headers.put['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
// axios.defaults.headers.common

axios.defaults.timeout = 15000;

axios.interceptors.request.use(function(config){
  return config;
},function (error){
  Log.debug("request error：" + error);
    return Promise.error(error);
  }
);



axios.interceptors.response.use(
  function(response){
    if (response.status === 200) {
      Log.debug("response success statue:" + response.status);
      return response;
    } else {
      Log.debug("response fail statue:" + response.status);
      return Promise.reject(response);
    }
  },function (error){
    Log.debug("use response error");
    if (error.status) {

    }
      return Promise.reject(error);
  }
);

export default axios
