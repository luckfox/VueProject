import requests from "@/api/request";

//三級連動接口
// /api/product/getBaseCategoryList get 無參數
// export const reqCategoryList=()=>{
//     //發送請求
//     return requests({url:'/product/getBaseCategoryList',method:'get'})
// }
export const reqCategoryList=()=>requests({url:'/product/getBaseCategoryList',method:'get'});