<template>
  <div id="app">
    <div id="nav">

      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>

          <el-menu-item index="2">Discover</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">Rank</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>

          <el-menu-item > <router-link to="/search_page">search_pagee</router-link></el-menu-item >
          <el-menu-item > <el-input >
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input2">
          </el-input></el-menu-item>
<!--         admin</router-link></el-menu-item> <el-menu-item index="5"><router-link to="/admin">-->
          <el-menu-item v-if="this.$store.getters.getToken !== null " index="3" id ="user1"><router-link to="/user_center">{{this.$store.getters.getAccount}}</router-link></el-menu-item>
          <div v-else>
            <el-submenu index="4" id ="user">
              <template slot="title">sign in/sign up</template>
              <el-menu-item index="2-1"><router-link to="/Sign_up">Sign_up</router-link></el-menu-item>
              <el-menu-item index="2-2"><router-link to="/Sign_in">Sign_in</router-link></el-menu-item>
            </el-submenu>
          </div>
        </el-menu>
      </el-header>

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 100px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
  .el-header {
    width:80%;
    height:100px;
    position: absolute;
    left:200px;
    right: 0;
    top:0;
    text-align: center;
    line-height: 60px;

  }
  .el-input{
    text-align:center;

  }
  #user{
    top:0;
    right:0;
    position: absolute;
  }
  #user1{
    top:0;
    right:0;
    position: absolute;
  }

}
</style>
<script>
import global from './components/common.vue'
export default {
  name: 'home',

  methods: {
    handleSelect () {

    }
  },
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
    }
  }
}
</script>
