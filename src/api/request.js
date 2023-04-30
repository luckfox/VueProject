// 對axios進行二次封裝

import axios from 'axios';
// 引入進度條組件
import nprogress from 'nprogress';
// 引入進度條樣式，可以修改其樣式
import 'nprogress/nprogress.css'
const requests = axios.create({
    //基礎路徑，當發請求時，路徑中會安插在請求路徑之前
    baseURL:"/api",
    // 超時時間
    timeout:5000
});
//設置request的header
requests.interceptors.request.use((config)=>{
    nprogress.start();
   return config;
});
//設置response的success Callback和error Callback
requests.interceptors.response.use(
    (success)=>{
    nprogress.stop();
    console.log(success.data);
    return success.data;
},
    (error)=>{
    console.log(error);
    return Promise.reject(new Error('fail'));
});
export default requests;