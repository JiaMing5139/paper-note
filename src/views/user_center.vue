
<template>
  <div id="app">
    <div class="home">
      <el-row>
        <el-col :span="4" id="left_nav" style="margin-top:-120px">
          <h5>functions</h5>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>My Recommendation</span>
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
                <span>My Followers883</span>
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
                <span>My Questions</span>
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
                <span>Recently Read</span>
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
                <span>My Notes</span>
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
                <span>123123441_Star</span>
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

        <el-col span="6" offset="6" style="margin-top:-120px">
          <el-form ref="form" :model="form" label-width="80px">
            <div>
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>
            <el-form-item label="Nickname">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="Sex" >
              <el-radio-group v-model="form.type" style="width: 100%">
                <el-radio-button label="Male" value="Male"></el-radio-button>
                <el-radio-button label="Female" value="Female"></el-radio-button>
                <!--                <el-radio-button label="Conceal" value="Conceal"></el-radio-button>-->
              </el-radio-group>
            </el-form-item>
            <el-form-item label="Location">
              <el-select v-model="form.region" placeholder="Select">
                <el-option label="Texas" value="shanghai"></el-option>
                <el-option label="Beijing" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="Birthday">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="Selsect" v-model="form.date1" style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line" :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="Selsect" v-model="form.date2" style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="Recommendation">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>

            <el-form-item label="Subject">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="SE" name="type"></el-checkbox>
                <el-checkbox label="AI" name="type"></el-checkbox>
                <el-checkbox label="Medical" name="type"></el-checkbox>
                <el-checkbox label="Electrical engineering" name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <!--            <el-form-item label="特殊资源">-->
            <!--              <el-radio-group v-model="form.resource">-->
            <!--                <el-radio label="线上品牌商赞助"></el-radio>-->
            <!--                <el-radio label="线下场地免费"></el-radio>-->
            <!--              </el-radio-group>-->
            <!--            </el-form-item>-->
            <el-form-item label="Job">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">create</el-button>
              <el-button>cancel</el-button>
            </el-form-item>
          </el-form>
        </el-col>
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
        },
        // data () {
        //   return {
        //     isCollapse: true,
        //     paperlist: [
        //       { author: 'wang',
        //         date: '1101',
        //         num_notes: 12 },
        //       { author: 'liyong',
        //         date: '1103',
        //         num_notes: 15 }
        //     ]
        //   }
        // },
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
