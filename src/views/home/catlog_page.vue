<template>
  <div id="app">
    <div class="home">
      <el-row >
        <el-col :span="4" id="left_nav">
          <h5>catlog</h5>
          <el-menu
            default-active="Computer"
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
          <h1>weekly {{catlog}}</h1>
          <div v-for="(item,index) in paperlist">
            <el-row>
              <el-col :span="24" id="paper_display">
                <div class="grid-content bg-purple-light">
                  <el-row id="paper_title" style="line-height:20px;margin-right: 700px;white-space: nowrap"><h3>{{catlog}} </h3></el-row>
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
                    <span>
                        <el-rate
                        v-model="value"
                        disabled
                        show-score
                        text-color="#ff9900"
                        score-template="{value}" >
                      </el-rate>
                    </span>

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

  data () {
    return {
      value: 4.0,
      paperlist:
          [{ title: 'computer science',
            abstract: '',
            content: 'Many cancers can be prevented by not smoking, maintaining a healthy weight, not drinking too much alcohol, eating plenty of vegetables, fruits and whole grains, vaccination against certain infectious diseases, not eating too much processed and red meat and avoiding too much sunlight exposure.[14][15] Early detection through screening is useful for cervical and colorectal cancer.[16] The benefits of screening in breast cancer are controversial',
            author: 'wang',
            date: '1101',
            num_notes: 12 },
          { title: 'cell',
            abstract: '',
            content: 'Cancer is a group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body.[2][8] These contrast with benign tumors, which do not spread.[8] Possible signs and symptoms include a lump, abnormal bleeding, prolonged cough, unexplained weight loss, and a change in bowel movements.[1] While these symptoms may indicate cancer, they can also have other causes.[1] Over 100 types of cancers affect humans.[8]',
            author: 'wang',
            date: '1101',
            num_notes: 12 },
          { title: 'cancer',
            abstract: '',
            content: 'Cancer is a group of diseases involving abnormal cell growth with the potential to invade or spread to other parts of the body.[2][8] These contrast with benign tumors, which do not spread.[8] Possible signs and symptoms include a lump, abnormal bleeding, prolonged cough, unexplained weight loss, and a change in bowel movements.[1] While these symptoms may indicate cancer, they can also have other causes.[1] Over 100 types of cancers affect humans.[8]',
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
