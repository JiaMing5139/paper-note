<!--<template>-->
<!--  <div class='search_page'>-->
<!--    <el-container>-->
<!--      <el-main>-->
<!--        <div style="margin: 0px 0;">-->
<!--        <el-row >-->
<!--          <el-col span="4" offset="2">-->
<!--            <div class="demo-type">-->
<!--              <div>-->
<!--                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>-->
<!--              </div>-->
<!--            </div>-->
<!--            <el-col >-->
<!--               Nick  name-->
<!--            </el-col>-->
<!--          </el-col>-->
<!--          <el-col :span="4" :offset="18">-->
<!--            <el-button @click="Edit">Edit</el-button>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--          <el-divider></el-divider>-->
<!--        <el-row>-->
<!--          <el-col :span="2" :offset="0">-->
<!--            <el-button @click="myrecommendation">My recommendation</el-button>-->
<!--          </el-col>-->
<!--          <el-col :span="2" :offset="12">-->
<!--            <el-button @click="myrecommendation">123123441</el-button>-->
<!--          </el-col>-->
<!--          <el-col :span="1" :offset="1">-->
<!--            <el-button @click="myrecommendation">My6585</el-button>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--&lt;!&ndash;        <el-row>&ndash;&gt;-->
<!--&lt;!&ndash;          <div style="margin: 20px 0;"></div>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-row>&ndash;&gt;-->
<!--        <el-row>-->
<!--          <el-col :span="2" :offset="0">-->
<!--            <el-button @click="ControllableParapharseGenerationwithaSyntacticExemplar">Controllable Parapharse Generation with a Syntactic Exemplar</el-button>-->
<!--          </el-col>-->
<!--          <el-col :span="2" :offset="12">-->
<!--            <el-button @click="recentlyread">Recently read</el-button>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--&lt;!&ndash;        <el-row>&ndash;&gt;-->
<!--&lt;!&ndash;          <div style="margin: 20px 0;"></div>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-row>&ndash;&gt;-->
<!--        <el-row>-->
<!--          <el-col :span="2" :offset="0">-->
<!--            <el-button @click="DocREDALarge-ScaleDocument-LevelRelationExtractionDataset">DocRED:A Large-Scale Document-Level Relation Extraction Dataset</el-button>-->
<!--          </el-col>-->
<!--          <el-col :span="2" :offset="12">-->
<!--            <el-button @click="myquestions">My questions</el-button>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--&lt;!&ndash;        <el-row>&ndash;&gt;-->
<!--&lt;!&ndash;          <div style="margin: 20px 0;"></div>&ndash;&gt;-->
<!--&lt;!&ndash;        </el-row>&ndash;&gt;-->
<!--        <el-row>-->
<!--          <el-col :span="2" :offset="0">-->
<!--            <el-button @click="TowardsComplexText-to-SQLinCross-DomainDatabasewithintermediate">Towards Complex Text-to-SQL in Cross-Domain Database with intermediate</el-button>-->
<!--          </el-col>-->
<!--          <el-col :span="2" :offset="12">-->
<!--            <el-button @click="mynotes">My notes</el-button>-->
<!--          </el-col>-->
<!--        </el-row>-->
<!--        </div>-->
<!--      </el-main>-->
<!--    </el-container>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  methods: {-->
<!--    myrecommendation () {-->
<!--      console.log('111')-->
<!--    }-->
<!--  },-->
<!--  data () {-->
<!--    return {-->
<!--      src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<template>
  <div id="app">
    <div class="home">
      <el-row >
        <el-col>
          <el-col span="4" offset="20">
            <div class="demo-type">
              <div>
                <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              </div>
            </div>
            <el-col >
              Nick  name
            </el-col>
          </el-col>
        </el-col>
        <el-col :span="4" id="left_nav">
          <h5>functions</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>My recommendation</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>My followers883</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location" span="2"></i>
                <span>My questions</span>
<!--                <span :title="node.label">Controllable Parapharse Generation with a Syntactic Exemplar</span>-->
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>Recently read</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>My notes</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>123123441_star</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template slot="title">选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu>
        </el-col>
<!--        <el-col :span="12" id = "main_view">-->
<!--          <h style="margin-right: 700px">paper ground</h>-->
<!--          <div v-for="(item,index) in paperlist">-->
<!--            <el-row>-->
<!--              <el-col :span="24" id="paper_display">-->
<!--                <div class="grid-content bg-purple-light">-->
<!--                  <el-row id="paper_title" style="line-height:20px;margin-right: 700px" ><h1>Tittle </h1></el-row>-->
<!--                  <el-row id="paper_abstract" style="line-height:20px;margin-right: 80px">Those books included in the Bible by a tradition or group are called canonical. A number of Bible canons have evolved, with overlapping and diverging contents.[2] The Hebrew Bible overlaps with the Greek Septuagint and the Christian Old Testament. The Christian New Testament is a collection of writings by early Christians, believed to be mostly Jewish disciples of Christ, written in first-century Koine Greek. A</el-row>-->
<!--                  <el-row id="paper_info" >-->
<!--                    <el-label>author : {{item.author}}  </el-label>-->
<!--                    <el-label>notes :  {{item.num_notes}}   </el-label>-->
<!--                  </el-row>-->
<!--                </div>-->
<!--              </el-col>-->
<!--            </el-row>-->
<!--          </div>-->

<!--        </el-col>-->

      </el-row>

    </div>
  </div>
</template>

<style>
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {

    text-align: center;
    line-height: 200px;
    line-width: 500px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 200px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-tree {
    width: 100%;
    height: 100%;
    overflow-x: scroll;
    overflow-y: scroll;
  }

  .span-ellipsis {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .show-ellipsis {
    display: block;
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
<style>
  #paper_info{
    margin-right:600px;
    line-height:30px;
    color: #B3C0D1;

  }
  #paper_info.el_label{
    margin-left:40px;
  }
  #left_nav{
    margin-left:180px;
  }
  #main_view{
    margin-left:150px;

  }
  #paper_display{
    line-height: 200px;
    margin-top:20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data () {
    return {
      isCollapse: true,
      paperlist: [
        { author: 'wang',
          date: '1101',
          num_notes: 12 },
        { author: 'liyong',
          date: '1103',
          num_notes: 15 }
      ]
    }
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
  },

  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
