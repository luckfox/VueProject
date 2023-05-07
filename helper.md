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

#### 1.02

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

  * 一樣是採用`data.currentIndex==index`的做法

    ````
     <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
    ````

#### 1.03

 * 防抖動處理：在某些情景下，例如滑鼠經過一連串的表列選單，因而引發一連串的表列選單事件被觸發，然而瀏覽器又來不及處理，因而造成所謂的抖動現象，如果要解決就得要用延遲觸發，比如說滑鼠停留在某個表單上`100ms`後才會被觸發。也就是前面的事件都將被取消，只有再停留時間超過一定時間，此事件才會被觸發。
   * 使用`lodash`，https://www.lodashjs.com/
   * 範例：`/src/assets/resource/custom/test1.html`

* 節流處理：在某個時間間隔內，已經發生的事件將在此間隔不再觸發，只有當大於此間隔才會再次觸發，因而解省大量系統資源。
  * 使用`lodash`，https://www.lodashjs.com/
  * 範例：`/src/assets/resource/custom/test2.html`

#### 1.04 

 * 以節流方式改寫第一級連動

   ````
       // changeIndex(index){
       //   this.currentIndex=index;
       // },
       //以lodash的節流方式處理，此處的callback如果用=>函數可能會有this上的問題
       changeIndex:_.throttle(function (index){
         this.currentIndex=index;
       })
   ````

 * 以更有效率的方式完成多級迴圈的路由跳轉

   <尚未完成>

#### 1.05 

* 以滑鼠移動事件來控制標單是否隱藏出現。
* 過場動畫。

#### 1.06

* `typeNav`商品清單優化：在`home`(`Home\index.vue`)和`search`各別存在`typeNav`組件，亦即在兩個`home`和`search`頁面切換時，typeNav分別被銷毀又重建一次，也就是categoryList會被呼叫多次，造成資源的浪費。因此，將typeNav的以下程序移植到`App`組件

````
  mounted() {
    this.$store.dispatch('categoryList');
    if(this.$route.name!='Home') this.show=false;
  },
````

* 合併參數：目前在`TypeNav`(`TypeNav\index.vue`)以及`Header`(`Header\index.vue`)各有對`search`進行操作，使得在做搜璇時，既能根據清單層次去搜尋也兼顧到搜尋的關鍵字。



