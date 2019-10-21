<template>
  <div class="comp">
    <!--    <h3   v-on:click=paper_click($event) class=id1>LINE1</h3 >-->
    <!--    <h3   onclick="paper_click_1($event)"  class="id2">LINE2</h3 >-->
    <el-row span="16" offset="3">
      <el-col :span="15" :offset="5">
        <div v-on:click="paper_click($event)">
          <span v-loading="loading" v-html="paper.content" style="margin-top: -500px ; margin-right: 20px;" offset="4"   >{{paper.content}}<font size="3">
         </font></span>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 0px ">
<!--      <el-button @click="drawer = true" type="primary" style="margin-left: 16px">-->
<!--        Open notes-->
<!--      </el-button>-->
      <el-drawer
        title="Notes"
        :visible.sync="drawer"
         @close="drawer_close">
        <div style="width:500px;height:550px;overflow:scroll;">
          <div v-for="(item,index) in noteslist" v-bind="item.id" class="infinite-list-item">
            <div class="grid-content bg-purple-light" style="margin-top: 30px">
              <el-row >{{index + 1 + '   ' }}{{item.user}}</el-row>
              <span style="color: cadetblue;font-size: 24px;margin-left: 50px">{{item.notes}}</span>
              <el-row>
                <el-rate
                  v-model=item.rate
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
                </el-rate>
              </el-row>
            </div>
          </div>
        </div>
        <el-input
          type="textarea"
          :rows="5"
          resize = "none"
          placeholder="please make notes here"
          v-model="textareaNotes" style="margin-top: 10%; width:80%;margin-left: 10%">
        </el-input>
        <el-button type="primary" style="margin-left:60% ;margin-top: 2%" @click="makeNotesClick">make notes</el-button>
      </el-drawer>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
export default {

  data () {
    return {
      loading: false,
      drawer: false,
      direction: 'rtl',
      textareaNotes: '',
      curretCus: '',
      paper: {
        'id': '',
        'title': '',
        'author': '',
        'content': ''
      },
      noteslist: [],
      notesdict: {}

    }
  },
  methods: {
    drawer_close () {
      document.getElementsByClassName(this.curretCus)[0].style.color = '#000000'
      this.noteslist = []
    },
    paper_click (events) {
      console.log('i have been clicked')
      this.drawer = true

      // eslint-disable-next-line no-unused-expressions
      var id = events.target.classList
      this.curretCus = id
      // alert(id)

      document.getElementsByClassName(id)[0].style.color = '#8A2BE2'
      //  console.log(this.notesdict.hasOwnProperty(this.curretCus))
      if (this.notesdict[this.curretCus] !== undefined) {
        this.noteslist = this.notesdict[this.curretCus].slice(0)
      } else {
        this.noteslist = []
        // eslint-disable-next-line no-unused-expressions
        this.notesdict[this.curretCus] = []
      }
      console.log(this.notesdict)
      this.drawer = true
    },
    makeNotesClick () {
      if (this.$store.getters.getToken === null) {
        alert('please sign in first!')
        return
      }
      // var notesdict = { 'id': this.$store.getters.getToken, 'user': this.$store.getters.getAccount,'notes': this.textareaNotes,'rate': 0}
      var notesdict = { 'id': 123, 'user': this.$store.getters.getAccount, 'notes': this.textareaNotes, 'rate': 0 }
      this.noteslist.push(notesdict)
      console.log('currentcus:' + this.curretCus)
      this.notesdict[this.curretCus].push(notesdict)
      this.textareaNotes = ''
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-expressions
    this.loading = true
    var pid = this.$route.query.pid
    console.log(pid)
    // var pid = 'c7b76f96-8045-3bbd-8b98-ae30f845d213'
    const axios = require('axios')

    axios.post('http://127.0.0.1:5000/getPaperByPid', {
      pid: pid
    })
      .then((response) => {
        this.loading = false
        this.paper.id = response.data.id
        this.paper.title = response.data.title
        this.paper.author = response.data.author
        this.paper.content = response.data.content
      })
    // eslint-disable-next-line handle-callback-err
      .catch(function (error) {
        alert('network connection is failed!')
      })
  }

}
</script>
<style scoped>

</style>
