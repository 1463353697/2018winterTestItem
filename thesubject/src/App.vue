<template>
  <div id="app">
    
    <div>
      <router-link to="/">登录</router-link>
      <router-link to="/signIn">注册</router-link>
      
      <router-link to="/mainPage">进入论坛</router-link>
      <router-link to="/personIfm">个人中心</router-link>
      
    </div>
   
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    margin: 0px;
    padding: 0px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* text-align: center; */
    color: #2c3e50; 
    
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  
</style>
