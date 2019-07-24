import Vue from "vue";

// export default {
//   sum : (n)=>{
//     let s = 0
//     for(let i = 0 ; i < n ; i ++){
//       s += i
//     }
//     return s
//   }
// }

const sum = (n) => {
  let s = 0
  for(let i = 0 ; i < n ; i ++){
    s += i
  }
  return s
}
Vue.prototype.$sumUtil = sum
