import axios from './axios/axiosUtil'
import Constant from '@/constant'
import Log from '@/components/utils/logUtil'





export default {
  basePath:Constant.ApiPath.UAT,
  get:function (url,params) {
    let promise = new Promise(function (resolve, reject) {
      axios({
        method:'get',
        url,
        params:params
      }).then(function (response) {
        Log.debug(response.data);

        const data = response.data;
        if (data.resultCode == '0')
          resolve(data);
        else{
          reject(data);
        }
      }).catch(function (error) {
        Log.debug(error);
        if(error.code == 'ECONNABORTED'){
          ElementUI.Message.success(error.message);
        }
      });
    });

    return promise;
  },
  post:function (url,params) {
    let promise = new Promise(function (resolve, reject) {
      axios({
        method:'post',
        url,
        params:params
      }).then(function (response) {
        Log.debug(response.data);

        const data = response.data;
        if (data.resultCode == '0')
          resolve(data);
        else{
          reject(data);
        }
      }).catch(function (error) {
        Log.debug(error);

        if(error.code == 'ECONNABORTED'){
          ElementUI.Message.success(error.message);
        }
      });
    });

    return promise;
  }
}
