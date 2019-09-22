<template>
  <div id="app">
    <div id="nav">
      <!--<router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/profile_page">profile_page</router-link> |
      <router-link to="/sign_in">sign_in</router-link> |
      <router-link to="/sign_up">sign_up</router-link> |-->
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>

          <el-menu-item index="1">探索</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">排行</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item> <el-input>
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input2">
          </el-input></el-menu-item>

          <el-submenu index="2">
            <template slot="title">用户</template>
            <el-menu-item index="2-1">登陆</el-menu-item>
            <el-menu-item index="2-2">注册</el-menu-item>

          </el-submenu>

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
    width:100%;
    height: auto;
    position: absolute;
    left:0;
    right: 0;
    top:0;
    text-align: center;
    line-height: 60px;
  }
  .el-input{
    white-space: nowrap;
  }

}
</style>
