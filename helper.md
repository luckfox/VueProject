#### 1.00  

* `axios`二次封裝，在`/api/request.js`對`axios`進行二次封裝，可以在這個封裝項目內進行更完整的設置，例如攔截器設置。
  * 在攔截器裡面加上`progress`進度條的開啟與結束
* API接口統一管理：在對於多個`axios`請求中，必須要一個。
* `nprogress`設置：`npm i nprogress`。
* 跨域問題處理：使用代理方式解決
  * 在`vue.config.js`設置代理服務氣。
  * 建置`reqCategoryList`代碼
* 基本`Vuex`的`store`建置，並且切割成小`store`

#### 1.01

* 建立`/home`下的小倉庫
* 實際使用二次包裝後的request去讀取後台資料，並顯示在頁面上

