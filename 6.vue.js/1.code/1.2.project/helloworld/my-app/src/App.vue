<template>
  <div id="app">

  <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/product">상품 정보</router-link>
      <router-link to="/product" tag="button">상품 정보</router-link>
      <router-link :to="{path : 'product'}">상품 정보</router-link>
      <router-link :to="{path : 'product', query : {page : 1}}">상품 정보</router-link>
      <router-link :to="{name : 'product', params : {id : 1}}">상품 정보</router-link>
  </nav>
  <router-view>
    <!-- 경로가 일치하는 컴포넌트가 들어감 -->
  </router-view>
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
  </div>
</template>


<script>

// this.$router.push('/product')
// this.$router.push({name : 'product', params:{id : 1}})

import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
