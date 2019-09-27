<template>
  <div id="app">
    <div class="home">
      <el-row >
        <el-col :span="4" id="left_nav">
          <h5>catlog</h5>
          <el-menu
            default-active="computer"
            class="el-menu-vertical-demo"
            @click="handleOpen"
            @close="handleClose"
            router>
            <el-submenu index="computer">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>computer</span>
              </template>
              <el-menu-item     index="/catlog_page/AI" >AI</el-menu-item>
              <el-menu-item   index="/catlog_page/network" >network</el-menu-item>
              <el-menu-item   index="/catlog_page/embedding system" >embedding system</el-menu-item>
            </el-submenu>
            <el-submenu index="medicine">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>medicine</span>
              </template>
              <el-menu-item   index="/catlog_page/cell" >cell</el-menu-item>
              <el-menu-item   index="/catlog_page/cancer" >cancer</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-col>
        <el-col :span="12" id = "main_view">
          <h1>{{catlog}}</h1>
          <div v-for="(item,index) in paperlist">
            <el-row>
              <el-col :span="24" id="paper_display">
                <div class="grid-content bg-purple-light">
                  <el-row id="paper_title" style="line-height:20px;margin-right: 700px" ><h3>Tittle </h3></el-row>
                  <el-row id="paper_abstract" >
                    <div style="text-align: left;line-height:20px;margin-right: 80px; overflow: hidden;
                                                                                          -webkit-line-clamp: 4;
                                                                                          text-overflow: ellipsis;
                                                                                          display: -webkit-box;
                                                                                          -webkit-box-orient: vertical;">
                      <p style="margin-left: 30px">{{item.content}}</p>
                    </div>
                  </el-row>
                  <el-row id="paper_info" >
                    <span>author : {{item.author}}  </span>
                    <span>notes :  {{item.num_notes}}   </span>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>

        </el-col>

      </el-row>

    </div>
  </div>
</template>

<style>
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {

    text-align: center;
    line-height: 200px;
    line-width: 500px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 200px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
<style>
  #paper_info{
    margin-right:600px;
    line-height:30px;
    color: #B3C0D1;
    white-space: nowrap;

  }
  #paper_info.el_label{
    margin-left:40px;
  }
  #left_nav{
    margin-left:180px;
  }
  #main_view{
    margin-left:150px;

  }
  #paper_display{
    line-height: 200px;
    margin-top:20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
<script>

export default {
  name: 'home',
  props: ['catlog'],

  mounted () {
    // GET
    // RECEIVE DATA
    if (this.catlog === 'AI') {

    } else if (this.catlog === 'embedding_system') {
      console.log('catlog:' + this.catlog)
    } else if (this.catlog === 'network') {
      console.log('catlog:' + this.catlog)
    } else if (this.catlog === 'cell') {
      console.log('catlog:' + this.catlog)
    } else if (this.catlog === 'cancer') {
      console.log('catlog:' + this.catlog)
    }
  },

  data () {
    return {
      paperlist:
          [{ title: 'computer science',
            abstract: '',
            content: 'hello world',
            author: 'wang',
            date: '1101',
            num_notes: 12 },
          { title: 'cell',
            abstract: '',
            content: '',
            author: 'wang',
            date: '1101',
            num_notes: 12 },
          { title: 'cancer',
            abstract: '',
            content: '',
            author: 'wang',
            date: '1101',
            num_notes: 12 }
          ]

    }
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  },

  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
