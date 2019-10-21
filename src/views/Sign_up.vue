<template>
<!--  function: input user information-->
  <div class="in">
    <el-row :gutter="20">
      <el-col :span="6" :offset="8">
        <el-form ref="form" :model="form" status-icon :rules="rules" label-width="160px">

          <el-form-item label="Your First name">
            <el-input v-model="form.firstname"></el-input>
          </el-form-item>
          <el-form-item label="Your Last name">
            <el-input v-model="form.lastname"></el-input>
          </el-form-item>
          <el-form-item label="Account Name">
            <el-input v-model="form.accountname"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password1">
            <el-input v-model="form.password1"></el-input>
          </el-form-item>
          <el-form-item label="Confirm Password" prop="password2">
            <el-input v-model="form.password2"></el-input>
          </el-form-item>
          <el-form-item label="E-mail">
            <el-input v-model="form.email"></el-input>
          </el-form-item>
          <el-form-item label="Birthday">
            <el-col :span="50">
              <el-date-picker type="date" placeholder="Choose date" v-model="form.date1" style="width: 100%;"></el-date-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="I have read this agreement">
            <el-switch v-model="form.delivery"></el-switch>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6" :offset="8">
        <el-form ref="form" :model="form" label-width="160px">
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">I Agree</el-button>
            <el-button>I Disagree</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Sign_up',
  data () {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.password1 !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password1) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        firstname: '',
        lastname: '',
        accountname: '',
        password1: '',
        password2: '',
        email: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        password1: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password2: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submitForm (formName) {
      const axios = require('axios')

      axios.post('http://127.0.0.1:5000/user_register', {
        accountname: this.form.accountname,
        firstname: this.form.firstname,
        lastname: this.form.lastname,
        password: this.form.password1,
        email: this.form.email
      })
        .then((response) => {
          if (response.data.register === 'success') {
            // global.token = response.data.uid
            // global.account = response.data.account
            // this.$store.commit('changeToken', response.data.uid)
            // this.$store.commit('changeAccount', response.data.account)
            alert('Successful!')
            this.$router.push({ path: '/Sign_in' })
          } else {
            alert('Fail!')
          }
        })
      // eslint-disable-next-line handle-callback-err
        .catch(function (error) {
          alert('network connection is failed!')
        })
    }
  }
}
</script>
<!--!!!!-->
<style scoped>

</style>
