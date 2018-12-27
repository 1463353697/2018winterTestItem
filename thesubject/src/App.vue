<template>
  <div id="app">
    
    <div class="nav">
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
    
    font: normal 100% Helvetica, Arial, sans-serif;

    
  }
  button {
    cursor: pointer;
  }
  a {
    text-decoration: none;
  }
  
</style>
<style scoped>
  .nav {
    display:flex;
    width:25%;
    height: 12%;
    color:#fff;
    background-color: rgb(68, 124, 170);
    padding: 1% 1%;
    margin-bottom: 3%;
  }
  a {
    color:#fff;
   
    margin-right: 5%;
    font-size: 0.8em;

  }
</style>

