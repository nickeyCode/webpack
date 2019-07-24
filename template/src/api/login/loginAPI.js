import api from '@/components/api/api'

const url = api.basePath + '/auth/token';
export default {
  run:function (username,password) {
    let promise = new Promise(function (resolve, reject) {

      let data = {};
      data.username = username;
      data.password = password;
      data.os = 'WEB';
      data.grantType = 'password';
      api.post(url,data)
        .then(function (response) {
          resolve(response)
        },function (error) {
          reject(error)
        });
    });
    return promise;
  }
}
