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
                <router-link :to="{name: 'Profile_page', params: {UserName:item.account}}">
                  {{index + 1 + '   ' }}
                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="margin-left: 5%"></el-avatar>
                  <span style="margin-left: 5%">{{item.account}}</span>
                </router-link>
              </el-row>
              <el-row  style="color: #333333;font-size: 20px;margin-left: 7%; margin-top: 2% ;text-align: justify;width: 70%;  " >{{item.note }}</el-row>
              <el-row style="margin-left: 18%">
                <el-button type="text" >like  {{item.thumup}}</el-button >
                <el-button type="text" style="margin-left: 10%" @click="replyclick(item.ifClickReply,item.id)">reply</el-button>
                <el-button type="text" STYLE="color: cornflowerblue;margin-left:10%" v-if="item.numOfReply" @click="viewComentsClick(item.id, index)">▾ view {{item.numOfReply}} comments</el-button>

              </el-row>

            <el-row v-if="item.ifClickReply">
             <el-row > <el-input  placeholder="please make comments here" v-model="subcomentlistInput[index]" > </el-input></el-row>
             <el-row style="margin-left: 60%">
               <el-button size="mini" type="text"  @click="cancleReply(item.id)">cancle</el-button>
               <el-button size="mini" type="text"  @click="commentComment(item.id, subcomentlistInput[index], index,item.uid,item.account)" style="margin-left: 10%">comment</el-button>
             </el-row>
            </el-row>

            <span v-if="item.ifViewComment">
              <div v-for = "(subitem,subindex) in subcomentlist[index]" v-bind = "subitem.id" style="margin-left: 8%;font-size: 15px;" >
                <el-row  > {{(index + 1) + '-' + (subindex+1)  + '  ' }}
                  <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"  size="mini"></el-avatar>
                  <span style="margin-left: 2%">{{subitem.account}}</span></el-row>
                <el-row style="font-size: 18px;margin-left: 7%; width: 60%">{{subitem.note }}</el-row>
                <el-row style="margin-left: 15%">
                  <el-button type="text" >like  {{item.thumup}}</el-button >
                  <el-button disabled type="text" @click="replyclick(item.ifClickReply,item.id)">reply</el-button>
                </el-row>
              </div>
            </span>
<!--            <div v-for="(subitem,subindex) in subcomentlist[index]" v-bind="subitem.id"  style="margin-left: 10%">-->
<!--              &lt;!&ndash;            <div class="grid-content bg-purple-light" style="margin-top: 30px">&ndash;&gt;-->
<!--              <el-row >-->
<!--                {{(index + 1) + '-' + (subindex+1)  + '  ' }}-->
<!--                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" style="margin-left: 5%"></el-avatar>-->
<!--                <span style="margin-left: 5%">{{subcomentlist.account}}</span> </el-row>-->
<!--              <el-row style="color: #333333;font-size: 24px;margin-left: 18%; margin-top: 5%  " >{{subcomentlist.note }}</el-row>-->
<!--              <el-row style="margin-left: 18%">-->
<!--                <el-button type="text" >like  {{subcomentlist.thumup}}</el-button >-->
<!--                &lt;!&ndash;                </el-badge>&ndash;&gt;-->
<!--                &lt;!&ndash;                <el-badge :value="2" class="item" type="primary">&ndash;&gt;-->
<!--                <el-button type="text" style="margin-left: 10%" @click="replyclick(subcomentlist.ifClickReply,subcomentlist.id)">reply</el-button>-->
<!--                <el-row STYLE="color: cornflowerblue;margin-left:40%" v-if="subcomentlist.numOfReply">▾ view {{subcomentlist.numOfcomments}} comments</el-row>-->

<!--              </el-row>-->

<!--              <el-row v-if="subcomentlist.ifClickReply">-->
<!--                <el-row > <el-input  placeholder="please make comments here" v-model="subcomentlistInput[index]" > </el-input></el-row>-->
<!--                <el-row style="margin-left: 60%">-->
<!--                  <el-button size="mini" type="text"  @click="cancleReply(subcomentlist.id)">cancle</el-button>-->
<!--                  <el-button size="mini" type="text"  @click="commentComment(subcomentlist.id, subcomentlist.note, index)" style="margin-left: 10%">comment</el-button>-->
<!--                </el-row>-->
<!--              </el-row>-->

<!--              <el-divider></el-divider>-->
<!--            </div>-->

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
      // bool in index is for v-if view comments
      subcomentlist: [],
      // ,{ 'id': 123, 'account': this.$store.getters.getAccount, 'note': 112323321, 'rate': 0, 'numOfcomments': 0, 'thumup': 0, 'ifClickReply': false, 'numOfReply': 0 }]],
      subcomentlistInput: [[]],
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
    viewComentsClick (paraentNoteId, index) {
    //  alert("go close")
      // do http request for notelist
      if (this.noteslist[index]['ifViewComment'] === true) {
        var newnode1 = this.noteslist[index]
        newnode1['ifViewComment'] = false
        this.noteslist.splice(index, 1, newnode1)
        return
      } else {
        var newnode2 = this.noteslist[index]
        newnode2['ifViewComment'] = true
        this.noteslist.splice(index, 1, newnode2)
      }

      this.loading_note = true
      const axios = require('axios')
      axios.post('http://127.0.0.1:5000/subnote_get', {
        type: 'subnote',
        note: this.textareaNotes,
        uid: this.$store.getters.getToken,
        sid: this.curretCus,
        pid: this.pid,
        parentid: paraentNoteId
      })
        .then((response) => {
          this.loading_note = false
          if (response.data.state === 'success') {
            var notesdict = response.data.notes_json
            this.subcomentlist[index] = notesdict
          } else {

          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          console.log(error)
          this.$message.error('network connection is failed!')
        })
    },
    commentComment: function (paraentNoteId, noteContent, index, paraentUserID, paraentUserAccount) {
    //  alert(paraentNoteId + noteContent + this.subcomentlist[index])

      // open the comment comments list
      var newnode2 = this.noteslist[index]
      newnode2['ifViewComment'] = true
      this.noteslist.splice(index, 1, newnode2)

      // do http request
      if (this.$store.getters.getToken === null) {
        this.$message.error('please sign in first!')
        return
      }
      this.loading_note = true
      const axios = require('axios')
      this.loading_note = true
      axios.post('http://127.0.0.1:5000/subnote_add', {
        note: noteContent,
        uid: this.$store.getters.getToken,
        senderAccount: this.$store.getters.getAccount,
        parentid: paraentNoteId,
        sid: this.curretCus,
        pid: this.pid,
        paraentUserID: paraentUserID,
        paraentUserAccount: paraentUserAccount
      })
        .then((response) => {
          this.loading_note = false
          if (response.data.state === 'success') {
            var id = response.data.new_id

            var notesdict = { 'id': id, 'account': this.$store.getters.getAccount, 'note': noteContent, 'rate': 0, 'numOfcomments': 0, 'thumup': 0, 'numOfReply': 0 }
            if (this.subcomentlist[index] === undefined) {
              this.subcomentlist[index] = []
            }
            this.subcomentlist[index].push(notesdict)

            var node = this.noteslist[index]
            node['numOfReply'] += 1
            this.noteslist.splice(index, 1, node)
            console.log(this.noteslist[index])
          } else if (response.data.state === 'badcomment') {
            this.textareaNotes = ''
            this.$message.error('bad comment')
          } else {
            this.textareaNotes = ''
            this.$message.error('Fail!')
          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          this.$message.error('network connection is failed!')
        })
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
              this.noteslist[index]['ifViewComment'] = false
            }
            console.log(this.noteslist)
          } else {

          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          console.log(error)
          this.$message.error('network connection is failed!')
        })
      this.drawer = true
    },
    makeNotesClick () {
      if (this.$store.getters.getToken === null) {
        this.$message.error('please sign in first!')
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

            this.$message.success('Successful!')
            var notesdict = { 'id': id, 'account': this.$store.getters.getAccount, 'note': this.textareaNotes, 'rate': 0, 'numOfcomments': 0, 'thumup': 0, 'ifClickReply': false, 'ifViewComment': false, 'numOfReply': 0 }
            this.noteslist.push(notesdict)
            this.textareaNotes = ''
          } else if (response.data.state === 'badcomment') {
            this.textareaNotes = ''
            this.$message.error('you cant make this comment!!', 'error')
          } else {
            this.textareaNotes = ''
            this.$message.error('Fail!')
          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          this.$message.error('network connection is failed!')
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
        this.$message.error('network connection is failed!')
      })
  }

}
</script>
<style scoped>

</style>
