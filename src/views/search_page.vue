<template>
  <div class="login">
    <el-row id="paper_title"  span='4' style="line-height:20px;margin-top: -100px ; margin-right: 20px" ><h3> Auto-Encoding Scene Graphs for Image Captioning </h3></el-row>
    <el-row style="margin-top: -30px ">
      <el-col span="16" offset="3">
        <h style="margin-top: -300px ; margin-right: 80px;" offset="4"   ><h2>

          While spatial attention based decoders have proven to
          be effective for image captioning, they cannot determine when to rely on visual signal and when to rely on the
          language model. In this section, motivated from Merity et al. [19], we introduce a new concept – “visual senti
          nel”, which is a latent representation of what the decoder already knows. With the “
          visual sentinel”, we extend our spatial attention model, and propose an adaptive model tha
          t is able to de-termine whether it needs to attend the image to predict next word.</h2></h>
      </el-col>
      <!--      <h style="margin-top: -300px ; margin-right: 80px;" offset="4"   ><h4>-->

      <!--        While spatial attention based decoders have proven to-->
      <!--        be effective for image captioning, they cannot determine when to rely on visual signal and when to rely on the-->
      <!--        language model. In this section, motivated from Merity et al. [19], we introduce a new concept – “visual senti-->
      <!--        nel”, which is a latent representation of what the decoder already knows. With the “-->
      <!--        visual sentinel”, we extend our spatial attention model, and propose an adaptive model tha-->
      <!--        t is able to de-termine whether it needs to attend the image to predict next word.</h4></h>-->

    </el-row>
    <el-row offset='3' span='16' id="paper_abstract" style="line-height:30px;margin-right: 80px;    font-size: 30px">
      However, there are two shortcomings for this kind of strategy:
      The evaluation metric is different from the training loss. This is an common issue in many problems,
      like minimizing log-likelihood for segmentation but evaluating using mean IOU. Not only we want to get
      better evaluation metric, but also the evaluation metric has perceptual mearning. You can think of log
      loss as putting the same weight on all the words in the sentence,
      our proposed approach over the state-of-the-art methods.</el-row>

    <el-row>
      <el-rate
        v-model="value"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}">
      </el-rate>
    </el-row>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                value: 3.7
            }
        }

    }
</script>
<style scoped>

</style>
