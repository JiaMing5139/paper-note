<template>
  <el-tabs type="border-card" style="width: 70%;margin-left: 200px" v-loading="loading">
    <el-tab-pane label="upload paper">
      <el-upload
        class="upload-demo"
        drag
        accept = ".docx"
        action="http://127.0.0.1:5000/paper_upload"
        :on-success="onSuccess"
        :on-progress="onProcess"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">drag files here，or<em> click to upload</em></div>
        <div class="el-upload__tip" slot="tip">Docx only</div>
      </el-upload>
    </el-tab-pane>
    <el-tab-pane label="status">

    </el-tab-pane>

  </el-tabs>
</template>

<script>
export default {
  name: 'admin',
  data: function () {
    return { message: 'hellow',
      loading: false }
  },
  methods: {
    onSuccess (response, file, fileList) {
      this.loading = false
      alert(file.name + 'upload success')
    },
    function (event, file, fileList) {
      this.loading = true
    }
  }
}
</script>

<style scoped>

</style>
