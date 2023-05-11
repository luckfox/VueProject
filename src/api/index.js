import requests from "@/api/ajax";
import mockRequests from "@/api/mockAjax"
//三級連動接口
// /api/product/getBaseCategoryList get 無參數
// export const reqCategoryList=()=>{
//     //發送請求
//     return requests({url:'/product/getBaseCategoryList',method:'get'})
// }
export const reqCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'});
export const reqGetBannerList=()=>mockRequests({url:'/banner',method:'get'});
export const reqGetFloorList=()=>mockRequests.get('/floor');