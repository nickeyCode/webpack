import Vue from 'vue'
import Router from 'vue-router'
import Log from "@/utils/logUtil"
import HelloWorld from '@/components/HelloWorld'
import Main from '@/layout/Main'

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/main',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path:'/',
      name:'Main',
      component:Main,

    }
  ]
});

router.beforeEach((to,from,next) => {
  if (to.name != 'Login'){
    if (checkToken()){
      next();
    }else{
      Log.debug("token is null");
      next('/login');
    }
  }else{
    next();
  }
});

function checkToken() {
  return true;
}



export default router
