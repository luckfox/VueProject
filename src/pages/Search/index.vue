<template>
  <div>
    我是Search
    <h1>params={{keyword}}</h1>
    <h1>params={{$route.params.keyword}}</h1>
    <h1>query={{k}}</h1>
    <h1>route={{this.$route.query.k}}</h1>
    <h1>route={{$route.query.k}}</h1>
  </div>
</template>

<script>
    export default {
      // eslint-disable-next-line vue/multi-word-component-names
    name:'Search',
    props:['keyword','k'],
}
</script>
<style>
</style>