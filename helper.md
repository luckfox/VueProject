#### start

* 由本地推送到遠端倉庫

````
git remote add origin https://github.com/luckfox/VueProject.git
git push origin main
````

* 由遠端拉回本地倉庫


````
git remote add origin https://github.com/luckfox/VueProject.git
git pull origin main
````

如果本地端為一個空倉庫(`node_modules`不存在)，則執行

````
npm install
````


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

#### 1.0.2

* 完成三級分類選項

* 添加一級分類顏色光棒

   * 以`style`方式添加`hover`事件

     ````
     .item:hover{
     	background:skyblue;
     }
     ````

     

   * 以`@mouseenter`帶值傳入`changeIndex(index)`，之後以`data.currentIndex`方式存儲起來，同時在一級選項中，判斷目前`data.currentIndex`==`index`，如果成立，則產生一個`class="focus"`，如此在`style`內判斷如果有`class="foucs"`則設定`background:skyblue`。

* 二三級分類隱藏和顯示

  * 以`style`方式添加`hover`事件

    ````
    &:hover{
    	.item-list{
    		display:block;
    	}
    }
    ````

    
