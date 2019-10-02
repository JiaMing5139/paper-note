<template>
<!--  <p>this login</p>-->
<!--function: username and password-->
  <div class="login">
    <el-row :gutter="20">
      <el-col :span="6" :offset="8">
        <el-form ref="form" :model="form" label-width="160px">
          <el-form-item label="Account">
            <el-input placeholder="Input your account" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input placeholder="Input your password" v-model="input2" show-password></el-input>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="6" :offset="9">
        <el-button>Sign in</el-button><el-button>Forget Password ?</el-button>
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
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }
}
</script>

<style scoped>

</style>
