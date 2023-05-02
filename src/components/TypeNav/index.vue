<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveShow" @mouseenter="enterShow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" v-show="show">
            <!--        利用事件委派+編程式導航實現路由器跳轉以及傳遞參數-->
            <!--        將事件回調函數，置放在所有的節點的上層，並且將想要傳遞的參數，以自訂屬性的方式儲存，
                        稍後在回調函數中，由內定的event參數取得觸發的元素(event.target)，判斷是從何而來,以及所夾帶的資料
                        便可達到效果-->
            <div class="all-sort-list2" @click="handleClick">
              <div class="item" v-for="(c1,index) in categoryList" :key="c1.categoryId" :class="{focus:currentIndex==index}">
                <h3 @mouseenter="changeIndex(index)" @mouseleave="resetIndex">

                  <!--              在多層for迴圈中，如果使用靜態的router-link，將會使系統產生多個組件，造成囤積大量的內存，嚴重影響效能-->
                  <!--                  因此要以編程式導航來取代-->
                  <!--              <a  @click="handleClick(index)">{{c1.categoryName}}</a>-->
                  <!--                  <router-link :to="'/Search/'+index">{{c1.categoryName}}</router-link>-->

                  <a :data-categoryName="c1.categoryName" :data-categoryId="c1.categoryId">{{c1.categoryName}}</a>

                </h3>
                <div class="item-list clearfix" :style="{display:currentIndex==index?'block':'none'}">
                  <div class="subitem" v-for="(c2) in c1.categoryChild" :key="c2.categoryId">
                    <dl class="fore">
                      <dt>
                        <!--                    <a href="">{{ c2.categoryName }}</a>-->
                        <!--                    <router-link to="/Search">{{c2.categoryName}}</router-link>-->
                        <a :data-categoryName="c2.categoryName" :data-categoryId="c2.categoryId">{{c2.categoryName}}</a>

                      </dt>
                      <dd>
                        <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                          <!--                      <a href="">{{c3.categoryName}}</a>-->
                          <!--                      <router-link to="/Search">{{c3.categoryName}}</router-link>-->
                          <a :data-categoryName="c3.categoryName" :data-categoryId="c3.categoryId">{{c3.categoryName}}</a>

                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>
<script>
import {mapState} from 'vuex'
//完全引入，浪費較多資源
import _ from 'lodash'
//根據需要部份引入
// import {throttle} from "lodash";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'TypeNav',
  data(){
    return {
      currentIndex:-1,
      show:true
    }
  },
  mounted() {
    this.$store.dispatch('categoryList');
    // 當組件掛載完畢，讓show屬性變為false
    // 如果不是Home路由組件，將本組件隱藏
    if(this.$route.name!='Home') this.show=false;
  },
  methods:{
    handleClick(event){
      let element=event.target;
      //獲取自定義屬性
      console.log(element);
      // 對象解構賦值的語法，亦即從element.dataset內的屬性名稱對應到'categoryname','category1id','category2id,'category3id'並且賦值。
      let {categoryname,category1id,category2id,category3id}=element.dataset;
      if(categoryname)
      {
        let location={name:'Search'}
        let query={categoryName:categoryname}
        if(category1id){
          query.category1Id=category1id;
        }else if(category2id){
          query.category2Id=category2id;
        }else {
          query.category3Id=category3id;
        }
          location.query=query;
          this.$router.push(location);
      }

    },
    c1click(index){
      console.log('c1 click item='+index)
      this.$router.push("/Search/"+index+"?k="+index)
    },
    resetIndex(){
      // this.currentIndex=-1;
    },
    leaveShow()
    {
       // 如果是在home之下，一級標題應該都要存在
      if(this.$route.name=='Home') return ;
      this.currentIndex=-1;
      this.show=false;
    },
    enterShow()
    {
      this.show=true;
    },
    // changeIndex(index){
    //   this.currentIndex=index;
    // },
    //以lodash的節流方式處理，此處的callback如果用=>函數可能會有this上的問題
    changeIndex:_.throttle(function (index){
      this.currentIndex=index;
    })

  },
  computed:{
    ...mapState({
      //裡面所傳入的state，便是指$store.state
      //因此以下意思為，當$store.state發生變化，那麼就執行以下函數運算，傳入值為$store.state，
      //因此我可以透過以下方式，將$store.state.home.categoryList映射到本地端的categoryList
      //另外mapState裡面的屬性值無需要在data在定義。
      //以下可以在簡寫為 categoryList:state=>state.home.categoryList;

      categoryList:(state)=>{
        console.log('***',state);
        return state.home.categoryList;
      }

    })
  }
}
</script>
<style scoped lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          //&:hover {
          //  .item-list {
          //    display: block;
          //  }
          //}
        }
        .focus {
          background: skyblue;
        }
      }
    }
    //過場動畫樣式
    //過場動畫開始狀態(進入)
    .sort-enter
    {
      height:0px;
      transfrom:rotate(0deg)
    }
    //過場動畫結束狀態(進入)
    .sort-enter-to
    {
      height:461px;
      transform:rotate(1440deg)
    }
    //定義動畫時間，速率
    .sort-enter-active
    {
      transition: all .5s linear;
    }


  }
}
</style>