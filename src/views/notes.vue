<template>
<!--  let id=this.$route.params.id-->
  <div class="comp">
    <el-row id="paper_title"  span='4' style="line-height:20px;margin-top: -100px ; margin-right: 20px" ><h3> Auto-Encoding Scene Graphs for Image Captioning </h3></el-row>
    <el-row span="16" offset="3">
      <el-col :span="15" :offset="5">
      <h style="margin-top: -500px ; margin-right: 20px;" offset="4"   ><font size="3">

        This is a list of 100 important natural language processing (NLP) papers that serious students and researchers working in the field should probably know about and read. This list is compiled by Masato Hagiwara. I welcome any feedback on this list.
        This list is originally based on the answers for a Quora question I posted years ago: What are the most important research papers which all NLP studnets should definitely read?. I thank all the people who contributed to the original post.
        This list is far from complete or objective, and is evolving, as important papers are being published year after year. Please let me know via pull requests and issues if anything is missing.
        Also, I didn’t try to include links to original papers since it is a lot of work to keep dead links up to date. I’m sure you can find most (if not all) of the papers listed here via a single Google search by their titles.
        A paper doesn’t have to be a peer-reviewed conference/journal paper to appear here. We also include tutorial/survey-style papers and blog posts that are often easier to understand than the original papers.
        This is a list of 100 important natural language processing (NLP) papers that serious students and researchers working in the field should probably know about and read. This list is compiled by Masato Hagiwara. I welcome any feedback on this list.
        This list is originally based on the answers for a Quora question I posted years ago: What are the most important research papers which all NLP studnets should definitely read?. I thank all the people who contributed to the original post.
        This list is far from complete or objective, and is evolving, as important papers are being published year after year. Please let me know via pull requests and issues if anything is missing.
        Also, I didn’t try to include links to original papers since it is a lot of work to keep dead links up to date. I’m sure you can find most (if not all) of the papers listed here via a single Google search by their titles.
        A paper doesn’t have to be a peer-reviewed conference/journal paper to appear here. We also include tutorial/survey-style papers and blog posts that are often easier to understand than the original papers.
        This is a list of 100 important natural language processing (NLP) papers that serious students and researchers working in the field should probably know about and read. This list is compiled by Masato Hagiwara. I welcome any feedback on this list.
        This list is originally based on the answers for a Quora question I posted years ago: What are the most important research papers which all NLP studnets should definitely read?. I thank all the people who contributed to the original post.
        This list is far from complete or objective, and is evolving, as important papers are being published year after year. Please let me know via pull requests and issues if anything is missing.
        Also, I didn’t try to include links to original papers since it is a lot of work to keep dead links up to date. I’m sure you can find most (if not all) of the papers listed here via a single Google search by their titles.
        A paper doesn’t have to be a peer-reviewed conference/journal paper to appear here. We also include tutorial/survey-style papers and blog posts that are often easier to understand than the original papers.
        This is a list of 100 important natural language processing (NLP) papers that serious students and researchers working in the field should probably know about and read. This list is compiled by Masato Hagiwara. I welcome any feedback on this list.
        This list is originally based on the answers for a Quora question I posted years ago: What are the most important research papers which all NLP studnets should definitely read?. I thank all the people who contributed to the original post.
        This list is far from complete or objective, and is evolving, as important papers are being published year after year. Please let me know via pull requests and issues if anything is missing.
        Also, I didn’t try to include links to original papers since it is a lot of work to keep dead links up to date. I’m sure you can find most (if not all) of the papers listed here via a single Google search by their titles.
        A paper doesn’t have to be a peer-reviewed conference/journal paper to appear here. We also include tutorial/survey-style papers and blog posts that are often easier to understand than the original papers.
      </font></h>
      </el-col>
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
      <el-row >Note1</el-row>
      <span> However, there are two shortcomings for this kind of strategy:
        The evaluation metric is different from the training loss. This is an common issue in many problems,like
        minimizing log-likelihood for segmentation but evaluating using mean IOU. Not only we want to get better
        evaluation metric, but also the evaluation metric has perceptual mearning. You can think of log loss as
        putting the same weight on all the words in the sentence, our proposed approach over the state-of-the-art
        methods.</span>
      <el-row>
        <el-rate
          v-model="4.5"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </el-row>
      <el-row >Note2</el-row>
      <span> However, there are two shortcomings for this kind of strategy:
        The evaluation metric is different from the training loss. This is an common issue in many problems,like
        minimizing log-likelihood for segmentation but evaluating using mean IOU. Not only we want to get better
        evaluation metric, but also the evaluation metric has perceptual mearning. You can think of log loss as
        putting the same weight on all the words in the sentence, our proposed approach over the state-of-the-art
        methods.</span>
      <el-row>
        <el-rate
          v-model="3.5"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </el-row>
      <el-row >Note3</el-row>
      <span> However, there are two shortcomings for this kind of strategy:
        The evaluation metric is different from the training loss. This is an common issue in many problems,like
        minimizing log-likelihood for segmentation but evaluating using mean IOU. Not only we want to get better
        evaluation metric, but also the evaluation metric has perceptual mearning. You can think of log loss as
        putting the same weight on all the words in the sentence, our proposed approach over the state-of-the-art
        methods.</span>
      <el-row>
        <el-rate
          v-model="1.5"
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
