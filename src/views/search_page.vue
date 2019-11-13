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
          <h1>Key Word:{{this.$route.query.keyword}}</h1>
          <span  v-loading="loading">
          <div v-for="(item,index) in SearchResultList"  v-loading="loading" >
            <el-row>
              <el-col :span="24" id="paper_display" @click="jumpToPaperPage(item.id)">
                <div class="grid-content bg-purple-light" @click="jumpToPaperPage(item.id)">
                  <el-row id="paper_title" style="line-height:20px;margin-right: 700px;white-space: nowrap"   @click="jumpToPaperPage(item.id)"><h3>{{item.title}} </h3></el-row>
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
                    <el-col>
<!--                      <el-button @click="jump">Enter the notes</el-button>-->
                    </el-col>
                  </el-row>
                </div>
              </el-col>
            </el-row>
          </div>
          </span>
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
      catlog: '',
      keyword: '',
      loading: false,
      value: 4.4,
      paperlist:
                    [{ title: 'computer science',
                      abstract: '',
                      content: 'This is a list of 100 important natural language processing (NLP) papers that serious students and researchers working in the field should probably know about and read. This list is compiled by Masato Hagiwara. I welcome any feedback on this list.',
                      author: 'wang',
                      date: '1101',
                      num_notes: 12 },
                    { title: 'network',
                      abstract: '',
                      content: 'This list is originally based on the answers for a Quora question I posted years ago: What are the most important research papers which all NLP studnets should definitely read?. I thank all the people who contributed to the original post.',
                      author: 'wang',
                      date: '1101',
                      num_notes: 12 },
                    { title: 'block-chain',
                      abstract: '',
                      content: 'This list is far from complete or objective, and is evolving, as important papers are being published year after year. Please let me know via pull requests and issues if anything is missing.',
                      author: 'wang',
                      date: '1101',
                      num_notes: 12 }
                    ],
      SearchResultList: []
    }
  },
  methods: {
    jumpToPaperPage (id) {
      if (id === null) {
        return
      }
      this.$router.push({ path: '/notes', query: { pid: id } })
    },

    handleOpen (key, keyPath) {
      console.log(key, keyPath)
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
      this.$router.push({ path: '/notes' })
      // this.$router.go(-2)
      // 后退两步
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  mounted () {
    this.SearchResultList = []

    this.catlog = this.$route.query.catlog
    this.keyword = this.$route.query.keyword
    this.loading = true
    const axios = require('axios')
    axios.post('http://127.0.0.1:5000/paper_search', {
      catlog: this.$route.query.catlog,
      keyword: this.$route.query.keyword
    })

      .then((response) => {
        if (response.data.state === 'success') {
          if (this.$route.query.catlog === 'note') {
            if (response.data.notes_json.length === 0) {
              this.SearchResultList.push({ 'title': 'Noting found', 'content': '' })
            }

            for (var index = 0; index < response.data.notes_json.length; index++) {
              this.SearchResultList.push({ 'id': response.data.notes_json[index].pid, 'title': response.data.notes_json[index].account, 'content': response.data.notes_json[index].note })
            }
            console.log('note')
            console.log(this.SearchResultList)

            this.loading = false
          } else if ((this.$route.query.catlog === 'paper')) {
            this.loading = false
            if (response.data.paper_json.length === 0) {
              this.SearchResultList.push({ 'title': 'Noting found', 'content': '' })
              return
            }
            this.SearchResultList = response.data.paper_json
            console.log('paper')
            console.log(this.SearchResultList)
            this.loading = false
          }
        } else {
          this.$message.error('search error')
        }
      })
      // eslint-disable-next-line handle-callback-err
      .catch(function (error) {
        this.$message.error('network connection is failed!')
      })
  },
  watch: {
    $route () {
      if (this.$route) {
        this.SearchResultList = []

        this.catlog = this.$route.query.catlog
        this.keyword = this.$route.query.keyword
        this.loading = true
        const axios = require('axios')
        axios.post('http://127.0.0.1:5000/paper_search', {
          catlog: this.$route.query.catlog,
          keyword: this.$route.query.keyword
        })

          .then((response) => {
            if (response.data.state === 'success') {
              if (this.$route.query.catlog === 'note') {
                if (response.data.notes_json.length === 0) {
                  this.SearchResultList.push({ 'title': 'Noting found', 'content': '' })
                }

                for (var index = 0; index < response.data.notes_json.length; index++) {
                  this.SearchResultList.push({ 'title': response.data.notes_json[index].account, 'content': response.data.notes_json[index].note })
                }
                console.log('note')
                console.log(this.SearchResultList)

                this.loading = false
              } else if ((this.$route.query.catlog === 'paper')) {
                this.loading = false
                if (response.data.paper_json.length === 0) {
                  this.SearchResultList.push({ 'title': 'Noting found', 'content': '' })
                  return
                }
                this.SearchResultList = response.data.paper_json
                console.log('paper')
                console.log(this.SearchResultList)
                this.loading = false
              }
            } else {
              this.$message.error('search error')
            }
          })
        // eslint-disable-next-line handle-callback-err
          .catch(function (error) {
            this.$message.error('network connection is failed!')
          })
      }
    }
  },

  updated () {

    // this.$message.success("updated")

    // this.catlog = this.$route.query.catlog
    // this.keyword = this.$route.query.keyword
    // alert('updated')
    // this.loading = true
    //
    // const axios = require('axios')
    //
    // axios.post('http://127.0.0.1:5000/paper_search', {
    //   catlog: this.$route.query.catlog,
    //   keyword: this.$route.query.keyword
    // })
    //
    //   .then((response) => {
    //     if (response.data.state === 'success') {
    //       if (this.$route.query.catlog === 'note') {
    //         for (var index = 0; index < response.data.notes_json.length; index++) {
    //           this.SearchResultList.push({ 'title': response.data.notes_json[index].account, 'content': response.data.notes_json[index].note })
    //         }
    //         console.log(this.SearchResultList)
    //
    //         this.loading = false
    //       } else {
    //
    //       }
    //     }
    //   })
    // // eslint-disable-next-line handle-callback-err
    //   .catch(function (error) {
    //     this.$message.error('network connection is failed!')
    //   })
  }
}
</script>
