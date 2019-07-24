import Vue from 'vue'

const dataService = {
  // Autth token
  isLoggedIn: function() {
    return sessionStorage.getItem('authToken') && sessionStorage.getItem('authToken').length > 0;
  },
  login: function(token) {
    sessionStorage.setItem('authToken', token);
  },
  logout: function() {
    sessionStorage.clear();
  },
  getAuthToken: function() {
    return sessionStorage.getItem('authToken');
  },
  setRefreshToken: function(refreshToken) {
    sessionStorage.setItem('refreshToken',refreshToken);
  },
  getRefreshToken: function() {
    return sessionStorage.getItem('refreshToken');
  },
  // Merchant
  setMerchant: function (merchantId) {
    sessionStorage.setItem('merchantId',merchantId);
  },
  getMerchant: function () {
    return sessionStorage.getItem('merchantId');
  }
};

Vue.use(dataService);
Vue.prototype.$dataService = dataService;

