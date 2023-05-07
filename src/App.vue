<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <HeaderSection/>
    <router-view></router-view>
    <footerSection/>
  </div>
</template>

<script>
import HeaderSection from './components/Header/index.vue'
import FooterSection from './components/Footer'
export default {
  name: 'App',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    HeaderSection,
    FooterSection
  },
  mounted() {
    this.$store.dispatch('categoryList');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
