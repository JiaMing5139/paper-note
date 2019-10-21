<template>
  <div class="comp">
    <!--    <h3   v-on:click=paper_click($event) class=id1>LINE1</h3 >-->
    <!--    <h3   onclick="paper_click_1($event)"  class="id2">LINE2</h3 >-->
    <el-row span="16" offset="3">
      <el-col :span="15" :offset="5">
        <div v-on:click="paper_click($event)">
          <span v-html="paper.content" style="margin-top: -500px ; margin-right: 20px;" offset="4"   >{{paper.content}}<font size="3">
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
        :direction="rtl"
        :before-close="handleClose">
        <div style="width:500px;height:550px;overflow:scroll;">
          <div v-for="(item,index) in noteslist" v-bind="item.id" class="infinite-list-item">
            <div class="grid-content bg-purple-light" style="margin-top: 30px">
              <el-row >{{index + 1 + '   ' }}{{'user:' + item.user}}</el-row>
              <span>{{item.notes}}</span>
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
      drawer: false,
      direction: 'rtl',
      textareaNotes: '',
      paper: {
        'id': '',
        'title': '',
        'author': '',
        'content': ''
      },
      noteslist: [
        { 'id': 123,
          'user': 'hahaha',
          'date': '',
          'notes': 'However, there are two shortcomings for this kind of strategy:\n' +
              '        The evaluation metric is different from the training loss. This is an common issue in many problems,like\n' +
              '        minimizing log-likelihood for segmentation but evaluating using mean IOU. Not only we want to get better\n' +
              '        evaluation metric, but also the evaluation metric has perceptual mearning. You can think of log loss as\n' +
              '        putting the same weight on all the words in the sentence, our proposed approach over the state-of-the-art\n' +
              '        methods',
          'rate': 4.5 },
        {
          'id': 123,
          'user': 'super man',
          'date': '',
          'notes': 'However, there are two shortcomings for this kind of strategy:\n' +
              '        The evaluation metric is different from the training loss. This is an common issue in many problems,like\n' +
              '        minimizing log-likelihood for segmentation but evaluating using mean IOU. Not only we want to get better\n' +
              '        evaluation metric, but also the evaluation metric has perceptual mearning. You can think of log loss as\n' +
              '        putting the same weight on all the words in the sentence, our proposed approach over the state-of-the-art\n' +
              '        methods',
          'rate': 3.3 },
        {
          'id': 123,
          'user': 'super man',
          'date': '',
          'notes': 'However, there are two shortcomings for this kind of strategy:\n' +
              '        The evaluation metric is different from the training loss. This is an common issue in many problems,like\n' +
              '        minimizing log-likelihood for segmentation but evaluating using mean IOU. Not only we want to get better\n' +
              '        evaluation metric, but also the evaluation metric has perceptual mearning. You can think of log loss as\n' +
              '        putting the same weight on all the words in the sentence, our proposed approach over the state-of-the-art\n' +
              '        methods',
          'rate': 3.3 },
        {
          'id': 123,
          'user': 'super man',
          'date': '',
          'notes': 'However, there are two shortcomings for this kind of strategy:\n' +
              '        The evaluation metric is different from the training loss. This is an common issue in many problems,like\n' +
              '        minimizing log-likelihood for segmentation but evaluating using mean IOU. Not only we want to get better\n' +
              '        evaluation metric, but also the evaluation metric has perceptual mearning. You can think of log loss as\n' +
              '        putting the same weight on all the words in the sentence, our proposed approach over the state-of-the-art\n' +
              '        methods',
          'rate': 3.3 }
      ]

    }
  },
  methods: {
    paper_click (events) {
      console.log('i have been clicked')
      this.drawer = true
      // eslint-disable-next-line no-unused-expressions
      var id = events.target.classList
      alert(id)
    },
    makeNotesClick () {
      // if (this.$store.getters.getToken === null) {
      //   alert('please sign in first!')
      //   return
      // }
      // var notesdict = { 'id': this.$store.getters.getToken, 'user': this.$store.getters.getAccount,'notes': this.textareaNotes,'rate': 0}
      var notesdict = { 'id': 123, 'user': 'superman', 'notes': this.textareaNotes, 'rate': 0 }
      this.noteslist.push(notesdict)
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-expressions
    var pid = this.$route.query.pid
    console.log(pid)
    // var pid = 'c7b76f96-8045-3bbd-8b98-ae30f845d213'
    const axios = require('axios')

    axios.post('http://127.0.0.1:5000/getPaperByPid', {
      pid: pid
    })
      .then((response) => {
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
