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
       <h1>Weekly paper ground</h1>
        <div v-for="(item,index) in paperlist"   v-loading="loading">
          <el-row class="item.id"   v-on:click="say(item.id)">
            <el-col :span="24" id="paper_display"  v-on:click="say(item.id)">
                <div class="grid-content bg-purple-light"  v-on:click="say(item.id)">
                  <el-row id="paper_title" style="line-height:20px;margin-right: 700px;white-space: nowrap" ><h3>{{item.title}} </h3></el-row>
                    <el-row id="paper_abstract" >
                      <div style="text-align: left;line-height:20px;margin-right: 80px; overflow: hidden;
                                                                                          -webkit-line-clamp: 4;
                                                                                          text-overflow: ellipsis;
                                                                                          display: -webkit-box;
                                                                                          -webkit-box-orient: vertical;">
                        <p style="margin-left: 30px">{{item.abstract}}</p>
                      </div>
                    </el-row>
                  <el-row id="paper_info" >
                     <span>author : {{item.author}} notes :  {{item.num_notes}}</span>
                    <el-col>
<!--                      <el-button @click="jump">Enter the notes</el-button>-->
<!--                      <button v-on:click="say(item.id)">Enter notes</button>-->
<!--                      <button v-on:click="warn('Form cannot be submitted yet.', $item.id)">-->
<!--                      </button>-->
                    </el-col>
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
    margin-right:400px;
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
  data () {
    return {
      value: 0,
      loading:false,
      paperlist:
    [{ title: 'LOADING',
      abstract: '',
      content: 'This is a list of 100 important natural language processing (NLP) papers that serious students and researchers working in the field should probably know about and read. This list is compiled by Masato Hagiwara. I welcome any feedback on this list.',
      author: 'LOADING',
      date: 'LOADING',
      num_notes: 0 },
    ]
    }
  },
  mounted () {
    const axios = require('axios')
    this.loading = true
    axios.post('http://127.0.0.1:5000/getPaperByTopTen', {
      'numOftop': 5
    }).then((response) => {
      if (response.data.query == 'success') {
        this.loading = false
        this.paperlist = response.data.papers_json
      } else {
        alert('data required faild')
      }
    })
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    say: function (message) {
     // alert(message)
      this.$router.push({ path: '/notes' ,query:{pid:message}})
    },
    jump () {
    //   if (this.form.username === 'asdasd' && this.form.password === 'asdasd') {
    //     this.$router.push({ path: '/user_center' })
    //     this.$message.success('success')
    //   } else {
    //     this.$message.error('error')
    //   }
      // this.$router.push("/cart")
      // 传递的参数用{{ $route.query.goodsId }}获取

      this.$router.push({ path: '/notes' ,params:{
        }})
      // this.$router.go(-2)
      // 后退两步
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
