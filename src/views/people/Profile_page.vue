<template >
  <div id = "usercenter">
    <el-row>
      <div style="box-shadow: 0 0px 500px rgba(0,0,0,.12),0 0 15px rgba(0,0,0,.4);width: 90%;margin-left: 5%;height: 300px">
        <el-row>
          <el-avatar shape="square" :size="200" :src="squareUrl" style="margin-left: -10%;margin-top: 5%"></el-avatar>
          <span style="font-size: 64px;margin-left: 5%">{{this.$route.params.UserName}}</span>

          <el-button v-if="this.$route.params.UserName === this.$store.getters.getAccount" type="text" style="font-size: 32px;margin-left: 50%">edit</el-button>
          <el-button v-else type="text" style="font-size: 32px;color: coral;margin-left: 50%">subscribe</el-button>
        </el-row>
      </div>
    </el-row>
    <el-row>
        <div style="float:left;box-shadow: 0 0px 500px rgba(0,0,0,.12),0 0 15px rgba(0,0,0,.4);width: 60%;margin-left: 5%;height: 1000px;margin-top: 2%"></div>
        <div style="float:left;box-shadow: 0 0px 500px rgba(0,0,0,.12),0 0 15px rgba(0,0,0,.4);width: 25%;margin-left: 5%;height: 300px;margin-top: 2%">
          <div style="margin-top: 20%">
          <span style="font-size: 32px">subscribed:{{subscribed}}</span>
          <el-divider ></el-divider>
          <span style="font-size: 32px">following:{{following}}</span>
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
      subscribed: 0,
      following: 0,
      circleUrl: 'http://127.0.0.1:5000/static/DUCK.jpg',
      squareUrl: 'http://127.0.0.1:5000/static/DUCK.jpg',
      sizeList: ['large', 'medium', 'small']
    }
  },

  methods: {
    subscribe () {
      const axios = require('axios')
      this.loading = true
      axios.post('http://127.0.0.1:5000/subcribe', {
        subscribedAccount: this.$route.params.UserName,
        subscriberAccount: this.$store.getters.getAccount
      })
        .then((response) => {
          // this.loading = false
          // if (response.data.login === 'success') {
          //   global.token = response.data.uid
          //   global.account = response.data.account
          //   this.$store.commit('changeToken', response.data.uid)
          //   this.$store.commit('changeAccount', response.data.account)
          //   this.$message.success('welcome to PaperNotes')
          //   this.$router.push({ path: '/' })
          // } else {
          //   this.$message.error('account or passwrod is wrong')
          // }
        })
      // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          alert('network connection is failed!')
        })
    }
  }

}
</script>

<style scoped>

</style>
