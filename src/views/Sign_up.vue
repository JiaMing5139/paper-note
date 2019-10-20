<template>
<!--  function: input user information-->
  <div class="in">
    <el-row :gutter="20">
      <el-col :span="6" :offset="8">
        <el-form ref="form" :model="form" label-width="160px">
          <el-form-item label="Your First name">
            <el-input v-model="form.firstname"></el-input>
          </el-form-item>
          <el-form-item label="Your Last name">
            <el-input v-model="form.lastname"></el-input>
          </el-form-item>
          <el-form-item label="Account Name">
            <el-input v-model="form.accountname"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input v-model="form.password1"></el-input>
          </el-form-item>
          <el-form-item label="Confirm Password">
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
            <el-button type="primary" @click="onSubmit">I Agree</el-button>
            <el-button>I Disagree</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
  <el-button onclick="myFunction('Harry Potter')">点击这里</el-button>
</template>

<script>
var a = 1
var one = 1
if(a == 1){

}else

switch (a) {
  case 1:
    break
  case 2:
    break
  case 1: // duplicate test expression
    break
  default:
    break
}
// eslint-disable-next-line no-unused-vars
function name (firstname, lastname) {
  if (firstname) {
    alert(firstname + ' ' + lastname)
    return firstname + ' ' + lastname
  }
  return 0
}

export default {
  name: 'Sign_in',
  data () {
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
      }
    }
  }
}
</script>
<!--!!!!-->
<style scoped>

</style>
