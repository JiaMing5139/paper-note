<template>
  <div class="comp">
    <el-row id="paper_title"  span='4' style="line-height:20px;margin-top: -100px ; margin-right: 20px" ><h3> Auto-Encoding Scene Graphs for Image Captioning </h3></el-row>
    <el-row span="16" offset="3">
      <h style="margin-top: -300px ; margin-right: 80px;" offset="4"   ><h2>
        This is a list of 100 important natural language processing (NLP) papers that serious students and
        researchers working in the field should probably know about and read. This list is compiled by
        Masato Hagiwara. I welcome any feedback on this list.</h2></h>
    </el-row>
    <el-row style="margin-top: 0px ">
    <el-button @click="drawer = true" type="primary" style="margin-left: 16px;">
      Open notes
    </el-button>
    <el-drawer
      title="Notes"
      :visible.sync="drawer"
      :direction="rtl"
      :before-close="handleClose">
      <span> However, there are two shortcomings for this kind of strategy:
        The evaluation metric is different from the training loss. This is an common issue in many problems,
        like minimizing log-likelihood for segmentation but evaluating using mean IOU. Not only we want to get
        better evaluation metric, but also the evaluation metric has perceptual mearning. You can think of log
         loss as putting the same weight on all the words in the sentence,
        our proposed approach over the state-of-the-art methods.</span>
      <el-row>
        <el-rate
          v-model="value"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </el-row>
    </el-drawer>
    </el-row>
  </div>
</template>

<script>
export default {
  // data () {
  //   return {
  //     value: 3.7
  //   }
  // }
  data () {
    return {
      drawer: false,
      direction: 'rtl'
    }
  }
}
</script>
<style scoped>

</style>
