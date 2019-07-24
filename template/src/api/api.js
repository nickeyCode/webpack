import axios from './axios/axiosUtil'
import Constant from '@/constant'
import Log from '@/components/utils/logUtil'
import ElementUI from 'element-ui';


//Loading
const loadingOptions = {
  fullscreen : true,
  text: 'Loading',
  spinner: 'el-icon-loading',
  background: 'rgba(0, 0, 0, 0.7)'
};


export default {
  basePath:Constant.ApiPath.UAT,
  get:function (url,params) {
    const loadingInstance1 = ElementUI.Loading.service(loadingOptions);
    let promise = new Promise(function (resolve, reject) {
      axios({
        method:'get',
        url,
        params:params
      }).then(function (response) {
        Log.debug(response.data);
        loadingInstance1.close();

        const data = response.data;
        if (data.resultCode == '0')
          resolve(data);
        else{
          reject(data);
        }
      }).catch(function (error) {
        Log.debug(error);
        loadingInstance1.close();
        if(error.code == 'ECONNABORTED'){
          ElementUI.Message.success(error.message);
        }
      });
    });

    return promise;
  },
  post:function (url,params) {
    const loadingInstance1 = ElementUI.Loading.service(loadingOptions);
    let promise = new Promise(function (resolve, reject) {
      axios({
        method:'post',
        url,
        params:params
      }).then(function (response) {
        Log.debug(response.data);

        loadingInstance1.close();
        const data = response.data;
        if (data.resultCode == '0')
          resolve(data);
        else{
          reject(data);
        }
      }).catch(function (error) {
        Log.debug(error);

        loadingInstance1.close();

        if(error.code == 'ECONNABORTED'){
          ElementUI.Message.success(error.message);
        }
      });
    });

    return promise;
  }
}
