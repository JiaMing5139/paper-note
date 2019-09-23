<template>
  <div class='search_pagee'>
    <el-container>
      <el-main>
        <el-row>
          <el-col  :span="12" :offset="6" style="font-size: 40px " cell-style="font-weight: 100;" font-family="Helvetica Neue">
            Make notes wherever you want
          </el-col>
        </el-row>
        <el-row>
        <el-divider></el-divider>
        </el-row>
        <el-row>
          <el-col :span="2" :offset="0">
            <el-button type="danger">Computerscience</el-button>
          </el-col>
          <el-col :span="8" :offset="2">
            <!--            <el-button @click="searchresult">search result</el-button>-->
            <el-link type="primary" style="font-size: 40px"  >search result</el-link>
          </el-col>
        </el-row>
        <el-row>
          <div style="margin: 10px 0;"></div>
        </el-row>
        <el-row>
          <el-col :span="2" :offset="0">
            <el-button type="danger">Bioengineering</el-button>
          </el-col>
          <el-row>
            <el-col :span="8" :offset="2">
              <!--            <el-button @click="searchresult">search result</el-button>-->
              <el-link type="primary" style="font-size: 40px"  >search result</el-link>
            </el-col>
          </el-row>
<!--          <el-col :span="10" :offset="8" style="font-size: 40px">-->
<!--            <el-button @click="searchresult">search result</el-button>-->
<!--&lt;!&ndash;            <el-button type="text">search result</el-button>&ndash;&gt;-->
<!--          </el-col>-->
        </el-row>
        <el-row>
          <div style="margin: 10px 0;"></div>
        </el-row>
        <el-row>
          <el-col :span="2" :offset="0">
            <el-button type="danger">Medical science</el-button>
<!--            <el-button @click="mdeicalscience">Medical science</el-button>-->
          </el-col>
          <el-col :span="8" :offset="2">
            <!--            <el-button @click="searchresult">search result</el-button>-->
            <el-link type="primary" style="font-size: 40px"  >search result</el-link>
          </el-col>
        </el-row>
        <el-row>
          <div style="margin: 10px 0;"></div>
          <el-col :span="8" :offset="4">
<!--            <el-button @click="searchresult">search result</el-button>-->
            <el-link type="primary" style="font-size: 40px"  >search result</el-link>
          </el-col>
        </el-row>
        <el-row>
          <div style="margin: 10px 0;"></div>
          <el-col :span="8" :offset="4">
            <!--            <el-button @click="searchresult">search result</el-button>-->
            <el-link type="primary" style="font-size: 40px"  >search result</el-link>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'search_pagee.vue'
}
</script>

<style scoped>

</style>
