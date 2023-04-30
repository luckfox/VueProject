// 在 JavaScript 中，使用花括號 {} 表示從模組中導入具體的函數、變數或常量等，這被稱為「命名導入」（named import）。
// 如果一個模組導出了多個函數、變數或常量，並且您只需要其中的一些，使用命名導入可以使程式碼更加清晰和簡潔。
import {reqCategoryList} from "@/api";
const state={
    index:1,
    categoryList:[],
};
const mutations={
    CATEGORYLIST(state,categoryList)
    {
        state.categoryList=categoryList;
    }
};
const actions={
    async categoryList({commit}){
        // await 會使reqCategoryList被包裝成Promise對象，並且等待這個對象以異步的方式完成傳回返回值，
        // 如果不這麼做的話，那麼這個result有可能在還沒取得返回值的形況下，便執行console.log
        let result= await reqCategoryList();
        console.log('categoryList@home',result);
        if(result.code==200)
        {
            //將收到資料傳給mutation
            commit('CATEGORYLIST',result.data)
        }
    }
};
const getters={};
export default {
    state,
    mutations,
    actions,
    getters
}