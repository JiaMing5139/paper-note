<template>
  <div class='search_page'>
    <el-container>
      <el-main>
<!--        <div style="margin: 20px 0;">-->
        <el-row>
          <el-col span="4" offset="2">
            <div class="demo-type">
              <div>
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              </div>
            </div>
            <el-col >
               Nick  name
            </el-col>
          </el-col>
          <el-col :span="4" :offset="18">
            <el-button @click="Edit">Edit</el-button>
          </el-col>
        </el-row>
          <el-divider></el-divider>
        <el-row>
          <el-col :span="2" :offset="0">
            <el-button @click="myrecommendation">My recommendation</el-button>
          </el-col>
          <el-col :span="2" :offset="12">
            <el-button @click="myrecommendation">123123441</el-button>
          </el-col>
          <el-col :span="1" :offset="1">
            <el-button @click="myrecommendation">My6585</el-button>
          </el-col>
        </el-row>
        <el-row>
          <div style="margin: 20px 0;"></div>
        </el-row>
        <el-row>
          <el-col :span="2" :offset="0">
            <el-button @click="ControllableParapharseGenerationwithaSyntacticExemplar">Controllable Parapharse Generation with a Syntactic Exemplar</el-button>
          </el-col>
          <el-col :span="2" :offset="12">
            <el-button @click="recentlyread">Recently read</el-button>
          </el-col>
        </el-row>
        <el-row>
          <div style="margin: 20px 0;"></div>
        </el-row>
        <el-row>
          <el-col :span="2" :offset="0">
            <el-button @click="DocREDALarge-ScaleDocument-LevelRelationExtractionDataset">DocRED:A Large-Scale Document-Level Relation Extraction Dataset</el-button>
          </el-col>
          <el-col :span="2" :offset="12">
            <el-button @click="myquestions">My questions</el-button>
          </el-col>
        </el-row>
        <el-row>
          <div style="margin: 20px 0;"></div>
        </el-row>
        <el-row>
          <el-col :span="2" :offset="0">
            <el-button @click="TowardsComplexText-to-SQLinCross-DomainDatabasewithintermediate">Towards Complex Text-to-SQL in Cross-Domain Database with intermediate</el-button>
          </el-col>
          <el-col :span="2" :offset="12">
            <el-button @click="mynotes">My notes</el-button>
          </el-col>
        </el-row>
<!--        </div>-->
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  methods: {
    myrecommendation () {
      console.log('111')
    }
  },
  data () {
    return {
      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
    }
  }
}
</script>
