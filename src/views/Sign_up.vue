<template>
<!--  function: input user information-->
  <div class="in">
    <el-row :gutter="20">
      <el-col :span="6" :offset="8">
        <el-form ref="form" :model="form" status-icon :rules="rules" label-width="160px">
          <el-upload
            style="margin-left: 30%"
            class="avatar-uploader"
            action="http://127.0.0.1:5000/photo_upload"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
          <el-form-item label="Your First name">
            <el-input v-model="form.firstname"></el-input>
          </el-form-item>
          <el-form-item label="Your Last name">
            <el-input v-model="form.lastname"></el-input>
          </el-form-item>
          <el-form-item label="Account Name" prop="accountname">
            <el-input v-model="form.accountname"></el-input>
          </el-form-item>
          <el-form-item   label="Password" prop="password1" show-pass>
            <el-input type="password" v-model="form.password1"></el-input>
          </el-form-item>
          <el-form-item  label="Confirm Password" prop="password2">
            <el-input type="password"  v-model="form.password2"></el-input>
          </el-form-item>
          <el-form-item label="E-mail" prop="email">
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
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
<script>

export default {
  name: 'Sign_up',
  data () {
    var validatePass1 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your account'))
      } else {
        if (this.form.accountname !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your password'))
      } else if (value === '') {} else {
        if (this.form.password1 !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please confirm your password'))
      } else if (value !== this.form.password1) {
        callback(new Error('The two passwords do not match!'))
      } else {
        callback()
      }
    }
    var validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please enter your email'))
      } else {
        if (this.form.email !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    return {
      imageUrl: '',
      photoName: 'DUCK.jpg',
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
        ],
        accountname: [
          { validator: validatePass1, trigger: 'blur' }
        ],
        email: [
          { validator: validatePass3, trigger: 'blur' }
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
        email: this.form.email,
        photoName: this.photoName
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
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      this.photoName = file.name
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    }

  }
}
</script>
<!--!!!!-->
<style scoped>

</style>
