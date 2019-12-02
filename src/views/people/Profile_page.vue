<template >
  <div id = "usercenter" v-loading="loading_wholepage">
    <el-row>
      <div style="box-shadow: 0 0px 500px rgba(0,0,0,.12),0 0 15px rgba(0,0,0,.4);width: 90%;margin-left: 5%;height: 300px">
        <el-row>
          <el-avatar shape="square" :size="200" :src="squareUrl" style="margin-left: -10%;margin-top: 5%"></el-avatar>
          <span style="font-size: 64px;margin-left: 5%">{{this.$route.params.UserName}}</span>
          <span v-if="this.$route.params.UserName === this.$store.getters.getAccount">

            <el-button  type="text" style="font-size: 32px;margin-left: 40%" >edit</el-button>
            <el-badge v-if="messageLen != 0" :value="100" :max="messageLen" class="item" style="margin-left: 1%">
              <el-button size="small" v-on:click="MessageTableVisable = true" >MESSAGE</el-button>
            </el-badge>

            <el-dialog title="MessageBox" :visible.sync="MessageTableVisable">
              <el-table :data="Message_List">

                 <el-table-column property="type" label="type" width="150"></el-table-column>
                 <el-table-column property="dst" label="user" width="200"></el-table-column>

              </el-table>
               <el-button type="text" v-on:click="clearMessage">clear all</el-button>
            </el-dialog>

          </span>
          <el-button v-else-if="AlreadySubscribed" type="text" style="font-size: 32px;color: #99a9bf;margin-left: 40%">subscribed</el-button>
          <el-button v-else type="text" style="font-size: 32px;color: coral;margin-left: 40%" v-on:click="subscribe">subscribe</el-button>
        </el-row>
      </div>
    </el-row>
    <el-row>
        <div style="float:left;box-shadow: 0 0px 500px rgba(0,0,0,.12),0 0 15px rgba(0,0,0,.4);width: 60%;margin-left: 5%;height: 1000px;margin-top: 2%">
          <el-tabs  type="card">
            <el-tab-pane label="Moment" name="first">Moment
              <div v-for="(item,index) in notes_list"   >
                <el-row style="width: 80%;margin-left: 10%">
                  <el-col :span="24" id="paper_display" @click="jumpToPaperPage('c7b76f96-8045-3bbd-8b98-ae30f845d213')">
                    <div class="grid-content bg-purple-light" @click="jumpToPaperPage('c7b76f96-8045-3bbd-8b98-ae30f845d213')">
                      <el-row id="paper_title" style="line-height:20px;margin-right: 700px;white-space: nowrap"   @click="jumpToPaperPage(item.id)"><h3>{{item.account}} </h3></el-row>
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
            </el-tab-pane>
            <el-tab-pane label="collection" name="second">collection</el-tab-pane>
            <el-tab-pane label="Answer" name="third">Answer</el-tab-pane>
          </el-tabs>

        </div>

        <div style="float:left;box-shadow: 0 0px 500px rgba(0,0,0,.12),0 0 15px rgba(0,0,0,.4);width: 25%;margin-left: 5%;height: 300px;margin-top: 2%">
          <div style="margin-top: 20%">
          <span style="font-size: 32px">
            <el-button style="font-size: 32px" type="text" @click="dialogTableVisible = true">subscribed:{{subscribed_num}}</el-button>
                <el-dialog title="subscribed" :visible.sync="dialogTableVisible">
                  <el-table :data="subscribed_list">
                    <el-table-column property="subscriberphoto" label="subscribe" width="150">
                      <template   scope="scope">
                        <img :src="scope.row.subscriberphoto"  min-width="70" height="70" />
                      </template>
                    </el-table-column>
                    <el-table-column property="subscriberAccount" label="Account" width="200"></el-table-column>

                  </el-table>
                </el-dialog>

          </span>
          <el-divider ></el-divider>
          <span style="font-size: 32px">
            <el-button style="font-size: 32px" type="text" @click="followingTable = true">following:{{following_num}}</el-button>
                <el-dialog title="following" :visible.sync="followingTable">
                  <el-table :data="following_list">
                    <el-table-column label="subscribe" width="150">
                      <template   scope="scope">
                        <img :src="scope.row.subscribedphoto"  min-width="70" height="70" />
                      </template>
                    </el-table-column>
                    <el-table-column property="subscribedAccount" label="Account" width="200"></el-table-column>

                  </el-table>
                </el-dialog></span>
          </div>
      </div>
    </el-row>
  </div>

</template>

<script>
export default {

  name: 'profile_page',
  data () {
    return {
      MessageTableVisable: false,
      dialogTableVisible: false,
      followingTable: false,
      loading_wholepage: false,
      subscribed_num: 0,
      following_num: 0,
      circleUrl: 'http://127.0.0.1:5000/static/DUCK.jpg',
      squareUrl: '',
      sizeList: ['large', 'medium', 'small'],
      AlreadySubscribed: false,
      imageUrl: '',
      subscribed_list: [],
      following_list: [],
      Message_List: [],
      refeshControl: false,
      messageLen: 0,
      MessageStr: '',
      notes_list:
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
        ]
    }
  },

  methods: {
    jumpToPaperPage (id) {
      if (id === null) {
        return
      }
      this.$router.push({ path: '/notes', query: { pid: id } })
    },
    clearMessage () {
      this.messageLen = 0
      this.MessageTableVisable = false
    },
    refresh () {
      console.log('refresh')
      const axios = require('axios')
      this.loading_wholepage = true
      axios.post('http://127.0.0.1:5000/get_subscribed', {
        'subscriberAccount': this.$route.params.UserName
      }).then((response) => {
        if (response.data.state === 'success') {
          this.loading_wholepage = false
          this.subscribed_list = response.data.subscribed_json
          this.following_list = response.data.following_json
          this.subscribed_num = this.subscribed_list.length
          this.following_num = this.following_list.length
          this.squareUrl = 'http://127.0.0.1:5000/static/' + response.data.subscriberphoto
          this.messageLen = response.data.message_list.length
          this.Message_List = response.data.message_list
          this.notes_list = response.data.notes_list
          for (var index = 0; index < this.subscribed_list.length; index++) {
            // console.log(this.subscribed_list)
            //  alert(this.subscribed_list[index].subscriberAccount + this.$store.getters.getAccount)
            if (this.subscribed_list[index].subscriberAccount === this.$store.getters.getAccount) {
              // console.log(this.subscribed_list[index]['subscribedAccount'], this.$store.getters.getAccount)
              this.AlreadySubscribed = true
            }
          }
        } else {
          alert('data required faild')
        }
      })
    },
    subscribe () {
      // alert(this.$store.getters.getAccount)
      const axios = require('axios')
      this.loading_wholepage = true

      axios.post('http://127.0.0.1:5000/subscribe', {
        subscribedAccount: this.$route.params.UserName,
        subscriberAccount: this.$store.getters.getAccount
      })
        .then((response) => {
          // this.loading = false
          if (response.data.subscribe === 'success') {
            this.loading_wholepage = false
            this.$message.success('subscribe success')
            this.AlreadySubscribed = true
            this.subscribed_num += 1
          // } else {
          //   this.$message.error('account or passwrod is wrong')
          // }
          }
        })
      // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          alert('network connection is failed!')
        })
    }
  },
  watch: {

    '$route.params.UserName': {
      handler: function (UserName) {
        console.log('watch')
        console.log(UserName)
        this.refresh()
        this.refeshControl = true
      },
      deep: true,
      immediate: true
    }
  },
  mounted () {
    if (this.refeshControl === false) {
      console.log('mounted')
      this.refresh()
    }
  }
}
</script>

<style scoped>

</style>
