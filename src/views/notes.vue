<template>
  <div class="comp">
    <!--    <h3   v-on:click=paper_click($event) class=id1>LINE1</h3 >-->
    <!--    <h3   onclick="paper_click_1($event)"  class="id2">LINE2</h3 >-->
    <el-row span="16" offset="3">
      <el-col :span="15" :offset="5">
        <div v-on:click="paper_click($event)">
          <span v-loading="loading_paper" v-html="paper.content" style="margin-top: -500px ; margin-right: 20px;" offset="4"   >{{paper.content}}<font size="3">
         </font></span>
        </div>
      </el-col>
    </el-row>
    <el-row style="margin-top: 0px "  >
<!--      <el-button @click="drawer = true" type="primary" style="margin-left: 16px">-->
<!--        Open notes-->
<!--      </el-button>-->
      <el-drawer
        title="Notes"
        :visible.sync="drawer"
         @close="drawer_close">
        <div style="width:600px;height:550px;overflow:scroll;"  v-loading="loading_note">
          <div v-for="(item,index) in noteslist" v-bind="item.id" class="infinite-list-item" >
<!--            <div class="grid-content bg-purple-light" style="margin-top: 30px">-->
              <el-row >
                {{index + 1 + '   ' }}
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                {{item.account}}</el-row>
              <span style="color: cadetblue;font-size: 24px;margin-left: 50px">{{item.note}}</span>
              <el-row>
                <el-button size="mini" >like  {{item.thumup}}</el-button>
                <!--                </el-badge>-->
                <!--                <el-badge :value="2" class="item" type="primary">-->
                <el-button size="mini" @click="replyclick(item.ifClickReply,item.id)">reply</el-button>
                <el-row STYLE="color: cornflowerblue;margin-left:40%" v-if="item.numOfReply">▾ view {{item.numOfcomments}} comments</el-row>

              </el-row>
            <el-row v-if="item.ifClickReply">
             <el-row > <el-input  placeholder="please make comments here" v-model="subcomentlist[index]" > </el-input></el-row>
             <el-row style="margin-left: 60%">
               <el-button size="mini" @click="cancleReply(item.id)">cancle</el-button>
               <el-button size="mini" @click="commentComment(item.id, item.note, index)">comment</el-button>
             </el-row>
            </el-row>
              <el-divider></el-divider>
            </div>
<!--          </div>-->
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

export default {
  data () {
    return {
      subcomentlist: [],
      pid: '',
      loading_paper: false,
      loading_note: false,
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
    commentComment (paraentNoteId, noteContent, index) {
      alert(paraentNoteId + noteContent + this.subcomentlist[index])
      // if (this.$store.getters.getToken === null) {
      //   alert('please sign in first!')
      //   return
      // }
      // this.loading_note = true
      // const axios = require('axios')
      // console.log('编号:' + this.curretCus + 'END')
      // axios.post('http://127.0.0.1:5000/note_add', {
      //   note: noteContent,
      //   uid: this.$store.getters.getToken,
      //   paraentId: paraentNoteId
      // })
      //   .then((response) => {
      //     this.loading_note = false
      //     if (response.data.state === 'success') {
      //       var id = response.data.new_id
      //       // global.token = response.data.uid
      //       // global.account = response.data.account
      //       // this.$store.commit('changeToken', response.data.uid)
      //       // this.$store.commit('changeAccount', response.data.account)
      //       alert('Successful!')
      //       var notesdict = { 'id': id, 'account': this.$store.getters.getAccount, 'note': this.textareaNotes, 'rate': 0, 'numOfcomments': 0, 'thumup': 0, 'ifClickReply': false, 'numOfReply': 0 }
      //       this.noteslist.push(notesdict)
      //       // this.$router.push({ path: '/' })
      //       this.textareaNotes = ''
      //     } else if (response.data.state === 'badcomment') {
      //       this.textareaNotes = ''
      //       alert('bad comment')
      //     } else {
      //       this.textareaNotes = ''
      //       alert('Fail!')
      //     }
      //   })
      //   // eslint-disable-next-line handle-callback-err
      //   .catch(function (error) {
      //     alert('network connection is failed!')
      //   })
    },
    cancleReply (id) {
      for (var index = 0; index < this.noteslist.length; index++) {
        if (this.noteslist[index]['id'] === id) {
          var newnode = this.noteslist[index]
          newnode['ifClickReply'] = false
          this.noteslist.splice(index, 1, newnode)
          break
        }
      }
    },
    replyclick (ifClickReply, id) {
      ifClickReply = true
      for (var index = 0; index < this.noteslist.length; index++) {
        if (this.noteslist[index]['id'] === id) {
          var newnode = this.noteslist[index]
          newnode['ifClickReply'] = true
          this.noteslist.splice(index, 1, newnode)
          break
        }
      }
      console.log(this.noteslist)
      var liscpy = this.noteslist
      this.noteslist = liscpy
      var text = this.textareaNotes
      this.textareaNotes = text
    },
    drawer_close () {
      document.getElementsByClassName(this.curretCus)[0].style.color = '#000000'
      this.ifReply = false
      this.noteslist = []
      this.subcomentlist = []
    },
    paper_click (events) {
      console.log('i have been clicked')
      this.drawer = true

      // eslint-disable-next-line no-unused-expressions
      var id = events.target.classList
      this.curretCus = id
      // alert(this.curretCus)

      document.getElementsByClassName(id)[0].style.color = '#8A2BE2'
      //  console.log(this.notesdict.hasOwnProperty(this.curretCus))
      this.loading_note = true
      const axios = require('axios')
      console.log('编号:' + this.curretCus + 'END')
      axios.post('http://127.0.0.1:5000/note_get', {
        note: this.textareaNotes,
        uid: this.$store.getters.getToken,
        sid: this.curretCus,
        pid: this.pid
      })
        .then((response) => {
          this.loading_note = false
          if (response.data.state === 'success') {
            this.noteslist = response.data.notes_json
            for (var index = 0; index < this.noteslist.length; index++) {
              this.noteslist[index]['ifClickReply'] = false
            }
            console.log(this.noteslist)
          } else {

          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          alert('network connection is failed!')
        })
      this.drawer = true
    },
    makeNotesClick () {
      if (this.$store.getters.getToken === null) {
        alert('please sign in first!')
        return
      }
      this.loading_note = true
      const axios = require('axios')
      console.log('编号:' + this.curretCus + 'END')
      axios.post('http://127.0.0.1:5000/note_add', {
        note: this.textareaNotes,
        uid: this.$store.getters.getToken,
        sid: this.curretCus,
        pid: this.pid

      })
        .then((response) => {
          this.loading_note = false
          if (response.data.state === 'success') {
            var id = response.data.new_id
            // global.token = response.data.uid
            // global.account = response.data.account
            // this.$store.commit('changeToken', response.data.uid)
            // this.$store.commit('changeAccount', response.data.account)
            alert('Successful!')
            var notesdict = { 'id': id, 'account': this.$store.getters.getAccount, 'note': this.textareaNotes, 'rate': 0, 'numOfcomments': 0, 'thumup': 0, 'ifClickReply': false, 'numOfReply': 0 }
            this.noteslist.push(notesdict)
            // this.$router.push({ path: '/' })
            this.textareaNotes = ''
          } else if (response.data.state === 'badcomment') {
            this.textareaNotes = ''
            alert('bad comment')
          } else {
            this.textareaNotes = ''
            alert('Fail!')
          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          alert('network connection is failed!')
        })

      // console.log('currentcus:' + this.curretCus)
      // this.notesdict[this.curretCus].push(notesdict)
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-expressions
    this.loading_paper = true
    var pid = this.$route.query.pid
    this.pid = pid
    console.log(pid)
    // var pid = 'c7b76f96-8045-3bbd-8b98-ae30f845d213'
    const axios = require('axios')

    axios.post('http://127.0.0.1:5000/getPaperByPid', {
      pid: pid
    })
      .then((response) => {
        this.loading_paper = false
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
