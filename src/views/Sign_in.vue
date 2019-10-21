<template>
  <div class="sign-in">
    <el-form style="width:20%;margin-left: 40%" ref = 'loginForm'  v-loading="loading"  >
      <el-form :label-position="labelPosition" label-width="80px" >
        <el-form-item label="account" prop = "account">
          <el-input v-model="login.account"></el-input>
        </el-form-item>
        <el-form-item label="password" prop = "password">
          <el-input type="password" v-model="login.password" show-password></el-input>
        </el-form-item>
      </el-form>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')">login</el-button>
        <el-button @click="resetForm('loginForm')">reset</el-button>
      </el-form-item>
      </el-form>
  </div>
</template>

<script>
import global from '../components/common.vue'
export default {
  name: 'Sign_in',
  data () {
    return {
      loading: false,
      labelPosition: 'right',
      login: {
        account: '',
        password: ''
      },
      rules: {
        account: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }

    }
  },
  methods: {
    submitForm (formName) {
      const axios = require('axios')
      this.loading = true
      axios.post('http://127.0.0.1:5000/user_login', {
        account: this.login.account,
        password: this.login.password
      })
        .then((response) => {
          this.loading = false
          if (response.data.login === 'success') {
            global.token = response.data.uid
            global.account = response.data.account
            this.$store.commit('changeToken', response.data.uid)
            this.$store.commit('changeAccount', response.data.account)
            alert('welcome to PaperNotes')
            this.$router.push({ path: '/' })
          } else {
            alert('account or passwrod is wrong')
          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          alert('network connection is failed!')
        })
    },
    resetForm (formName) {
      this.login.account = ''
      this.login.password = ''
      this.$refs[formName].resetFields()
    }
  }
}
</script>
