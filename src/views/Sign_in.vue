<template>
  <!--  <p>this login</p>-->
  <!--function: username and password-->
  <div class="login">
    <el-row :gutter="20">
      <el-col :span="6" :offset="8">
        <el-form ref="form" :model="form" label-width="160px">
          <el-form-item label="Account" prop="username">
            <el-input placeholder="Input your account" v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="Password" prop="password">
            <el-input placeholder="Input your password" v-model="form.password" show-password></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <el-button @click="jump">Sign in</el-button>
        <el-button>Forget Password ?</el-button>

        <!--        <button @click="jump">Button-跳转到购物车页面</button>-->
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'Sign_in',
  data () {
    return {
      input: '',
      input2: '',
      form: {
        username: '',
        password: ''
      }
    }
  },

  methods: {
    jump () {
      if (this.form.username === 'asdasd' && this.form.password === 'asdasd') {
        this.$router.push({ path: '/user_center' })
        this.$message.success('success')
      } else {
        this.$message.error('error')
      }
      // this.$router.push("/cart")
      // 传递的参数用{{ $route.query.goodsId }}获取
      // this.$router.go(-2)
      // 后退两步
    }

  }
}
</script>

<style scoped>

</style>
