<template>
  <div>
    <el-row>
      <el-label>
        tittle:
      </el-label>
      <el-input
      type="textarea"
      autosize
      placeholder="请输入内容"
      v-model="textarea1"  style="width: 50%;">
    </el-input>
    </el-row>
    <el-row style="margin-top: 30px">
      <el-label>
        abstract:
      </el-label>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 10}"
        placeholder="请输入内容"
        v-model="textarea2" :rows="30"  style="width: 50%; ">
      </el-input>
    </el-row>

    <el-row style="margin-top: 30px">
      <el-label>
        content:
      </el-label>
      <el-input
        type="textarea":rows="40"
        :autosize="{ minRows: 10, maxRows: 10}"
        placeholder="请输入内容"
        v-model="textarea2"  style="width: 50%; ">
      </el-input>

    </el-row>
    <el-row>
      <el-button @click="submit_paper" type="primary" plain style="margin-top:30px">submit</el-button>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: 'admin',

    data () {
      return {
        textarea1: '',
        textarea2: ''
      };
    },
    methods: {
      submit_paper () {
        alert("CLICK OK");
      }
    }
  }
</script>

<style scoped>

</style>
