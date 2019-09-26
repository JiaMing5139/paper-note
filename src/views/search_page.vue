<template>
  <div id="app">
    <div class="search_page">
      <el-row >
        <el-col :span="4" id="left_nav">
          <h5>catlog</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>computer</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>medicine</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>engineer</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>

          </el-menu>
        </el-col>
        <el-col :span="12" id = "main_view">
          <h style="margin-right: 700px"><h1>Search Result</h1></h>
          <div v-for="(item,index) in paperlist">
            <el-row>
              <el-col :span="24" id="paper_display">
                <div class="grid-content bg-purple-light">
                  <el-row id="paper_title" style="line-height:20px;margin-right: 700px" ><h3>Tittle </h3></el-row>
                  <el-row id="paper_abstract" style="line-height:20px;margin-right: 80px;    overflow: hidden;
                                                                                    -webkit-line-clamp: 4;
                                                                                    text-overflow: ellipsis;
                                                                                    display: -webkit-box;
                                                                                    -webkit-box-orient: vertical;">
                    Those books included in the Bible by a tradition or group are called canonical. A number of Bible canons have evolved, with overlapping and diverging contents.[2] The Hebrew Bible overlaps with the Greek Septuagint and the Christian Old Testament. The Christian New Testament is a collection of writings by early Christians, believed to be mostly Jewish disciples of Christ, written in first-century Koine Greek. A</el-row>
                  <el-row id="paper_info" >
                    <el-label>author : {{item.author}}  </el-label>
                    <el-label>notes :  {{item.num_notes}}   </el-label>
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
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'

  export default {
    name: 'home',
    data () {
      return {
        isCollapse: true,
        paperlist: [
          { author: 'wang',
            date: '1101',
            num_notes: 12 },
          { author: 'liyong',
            date: '1103',
            num_notes: 15 },
          { author: 'liyong',
            date: '1103',
            num_notes: 15 },
          { author: 'liyong',
            date: '1103',
            num_notes: 15 },
          { author: 'liyong',
            date: '1103',
            num_notes: 15 },
          { author: 'liyong',
            date: '1103',
            num_notes: 15 },
          { author: 'liyong',
            date: '1103',
            num_notes: 15 }

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
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
