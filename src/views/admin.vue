<!--<template>-->
<!--  <div>-->
<!--    <el-row>-->
<!--      <el-label>-->
<!--        tittle:-->
<!--      </el-label>-->
<!--      <el-input-->
<!--      type="textarea"-->
<!--      autosize-->
<!--      placeholder="请输入内容"-->
<!--      v-model="textarea1"  style="width: 50%;">-->
<!--    </el-input>-->
<!--    </el-row>-->
<!--    <el-row style="margin-top: 30px">-->
<!--      <el-label>-->
<!--        abstract:-->
<!--      </el-label>-->
<!--      <el-input-->
<!--        type="textarea"-->
<!--        :autosize="{ minRows: 2, maxRows: 10}"-->
<!--        placeholder="请输入内容"-->
<!--        v-model="textarea2" :rows="30"  style="width: 50%; ">-->
<!--      </el-input>-->
<!--    </el-row>-->

<!--    <el-row style="margin-top: 30px">-->
<!--      <el-label>-->
<!--        content:-->
<!--      </el-label>-->
<!--      <el-input-->
<!--        type="textarea":rows="40"-->
<!--        :autosize="{ minRows: 10, maxRows: 10}"-->
<!--        placeholder="请输入内容"-->
<!--        v-model="textarea2"  style="width: 50%; ">-->
<!--      </el-input>-->

<!--    </el-row>-->
<!--    <el-row>-->
<!--      <el-button @click="submit_paper" type="primary" plain style="margin-top:30px">submit</el-button>-->
<!--    </el-row>-->

<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--  export default {-->
<!--    name: 'admin',-->

<!--    data () {-->
<!--      return {-->
<!--        textarea1: '',-->
<!--        textarea2: ''-->
<!--      };-->
<!--    },-->
<!--    methods: {-->
<!--      submit_paper () {-->
<!--        alert("CLICK OK");-->
<!--      }-->
<!--    }-->
<!--  }-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
<template>
  <!--  <p>this Sign_in</p>-->
  <div class="sign in">
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
