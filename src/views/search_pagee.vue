<!--<template>-->
<!--  <div class='search_pagee'>-->
<!--    <el-container>-->
<!--      <el-main>-->
<!--        <el-row style="margin-top:-20px">-->
<!--          <el-col  :span="16" :offset="6" style="font-size: 40px " cell-style="font-weight: 100;" font-family="Helvetica Neue">-->
<!--            Make notes wherever you want-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--&lt;!&ndash;        <el-row>&ndash;&gt;-->
<!--&lt;!&ndash;        <el-divider></el-divider>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-row>&ndash;&gt;-->
<!--        <el-row style="line-height: 60px">-->
<!--          <el-col :span="2" :offset="0" >-->
<!--&lt;!&ndash;            <el-button @click="Computerscience">Computerscience</el-button>&ndash;&gt;-->
<!--            <el-button type="danger">Computerscience</el-button>-->
<!--          </el-col>-->
<!--          <el-col :span="8" :offset="2">-->
<!--            &lt;!&ndash;            <el-button @click="searchresult">search result</el-button>&ndash;&gt;-->
<!--            <el-link type="primary" style="font-size: 40px"  >search result</el-link>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--&lt;!&ndash;        <el-row>&ndash;&gt;-->
<!--&lt;!&ndash;          <div style="margin: -100px;"></div>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-row>&ndash;&gt;-->
<!--        <el-row style="line-height: 40px">-->
<!--          <el-col :span="2" :offset="0">-->
<!--            <el-button type="danger">Bioengineering</el-button>-->
<!--          </el-col>-->
<!--          <el-row>-->
<!--            <el-col :span="8" :offset="2">-->
<!--              &lt;!&ndash;            <el-button @click="searchresult">search result</el-button>&ndash;&gt;-->
<!--              <el-link type="primary" style="font-size: 40px"  >search result</el-link>-->
<!--            </el-col>-->
<!--          </el-row>-->
<!--&lt;!&ndash;          <el-col :span="10" :offset="8" style="font-size: 40px">&ndash;&gt;-->
            <el-button @click="searchresult">search result</el-button>
<!--&lt;!&ndash;&lt;!&ndash;            <el-button type="text">search result</el-button>&ndash;&gt;&ndash;&gt;-->
<!--&lt;!&ndash;          </el-col>&ndash;&gt;-->
<!--        </el-row>-->
<!--        <el-row>-->
<!--          <div style="margin: 10px 0;"></div>-->
<!--        </el-row>-->
<!--        <el-row style="line-height: 40px">-->
<!--          <el-col :span="2" :offset="0" >-->
<!--            <el-button type="danger">Medical science</el-button>-->
<!--&lt;!&ndash;            <el-button @click="mdeicalscience">Medical science</el-button>&ndash;&gt;-->
<!--          </el-col>-->
<!--          <el-col :span="8" :offset="2">-->
<!--            &lt;!&ndash;            <el-button @click="searchresult">search result</el-button>&ndash;&gt;-->
<!--            <el-link type="primary" style="font-size: 40px"  >search result</el-link>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--        <el-row>-->
<!--&lt;!&ndash;          <div style="margin: 10px 0;"></div>&ndash;&gt;-->
<!--          <el-col :span="8" :offset="4" style="line-height: 40px">-->
<!--&lt;!&ndash;            <el-button @click="searchresult">search result</el-button>&ndash;&gt;-->
<!--            <el-link type="primary" style="font-size: 40px"  >search result</el-link>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--        <el-row style="line-height: 40px">-->
<!--          <div style="margin: 10px 0;"></div>-->
<!--          <el-col :span="8" :offset="4" >-->
<!--            &lt;!&ndash;            <el-button @click="searchresult">search result</el-button>&ndash;&gt;-->
<!--            <el-link type="primary" style="font-size: 40px"  >search result</el-link>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--      </el-main>-->
<!--    </el-container>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: 'search_pagee.vue'-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->

<template>
  <div id="app">
    <div class="home">
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
                <span>computer science</span>
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
                <span>bioengineering</span>
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
                <span>medical science</span>
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

<!--        <el-col :span="12" id = "main_view">-->
<!--          <h style="margin-right: 700px">paper ground</h>-->
<!--          <div v-for="(item,index) in paperlist">-->
<!--            <el-row>-->
<!--              <el-col :span="24" id="paper_display">-->
<!--                <div class="grid-content bg-purple-light">-->
<!--                  <el-row id="paper_title" style="line-height:20px;margin-right: 700px" ><h1>Tittle </h1></el-row>-->
<!--                  <el-row id="paper_abstract" style="line-height:20px;margin-right: 80px">Those books included in the Bible by a tradition or group are called canonical. A number of Bible canons have evolved, with overlapping and diverging contents.[2] The Hebrew Bible overlaps with the Greek Septuagint and the Christian Old Testament. The Christian New Testament is a collection of writings by early Christians, believed to be mostly Jewish disciples of Christ, written in first-century Koine Greek. A</el-row>-->
<!--                  <el-row id="paper_info" >-->
<!--                    <el-label>author : {{item.author}}  </el-label>-->
<!--                    <el-label>notes :  {{item.num_notes}}   </el-label>-->
<!--                  </el-row>-->
<!--                </div>-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </div>-->
<!--        </el-col>-->

      </el-row>
      <el-row>
        <el-row>
          <el-col span="4" offset="10">
            <el-row style="font-size: 40px ">
              <el-button style="font-size: 40px " @click="searchresult">search result</el-button>
            </el-row>
            <el-row>
              <el-button style="font-size: 40px " @click="searchresult">search result</el-button>
            </el-row>
            <el-row>
              <el-button style="font-size: 40px " @click="searchresult">search result</el-button>
            </el-row>
            <el-row>
              <el-button style="font-size: 40px " @click="searchresult">search result</el-button>
            </el-row>
            <el-button style="font-size: 40px " @click="searchresult">search result</el-button>
          </el-col>
        </el-row>
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
// import HelloWorld from '@/components/HelloWorld.vue'

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
