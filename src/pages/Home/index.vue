<template>
<!--    因為已經註冊為全局組件，所以無需要在components註冊-->
  <div>
    <TypeNav/>
    <ListContainer/>
    <Recommand/>
    <Rank/>
    <Like/>
    <Floor/>
    <Floor/>
    <Brand/>
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import TypeNav from '../../components/TypeNav'
import Recommand from './Recommand'
import  Rank from './Rank'
import Like from './Like'
import Brand from './Brand'
import TestComponent from './TestComponent'
import Floor from "@/pages/Home/Floor";
     export default {
       // eslint-disable-next-line vue/multi-word-component-names
       name:'Home',
       components:{
         Floor,
         ListContainer,
         TypeNav,
         Recommand,
         Rank,
         Like,
         Brand,
         TestComponent
     }
 }
</script>
<style>
</style>
