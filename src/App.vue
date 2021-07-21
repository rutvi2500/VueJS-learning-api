<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Employee /> -->
    <!-- <h1>Bootstrap with VueJS</h1> -->
    <!-- <Activeboot/> -->
    <!-- <Post/> -->
    <!-- <Users/> -->  

    <nav>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </nav>

    <router-view></router-view> 



    
  </div>
</template>

<script>
// import Employee from './components/Employee.vue'
// import Activeboot from './components/Activeboot.vue'
// import Post from './components/Post.vue'
// import Users from './components/Users.vue'


export default {
  name: 'App',
  components: {
    // Employee
    // Activeboot
    // Post
    // Users,
  }
}
</script>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";

@import "~@/assets/scss/vendors/bootstrap-vue/index";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
