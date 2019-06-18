<template>
  <section>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="first">
        <template>
          <el-row :gutter="20">
            <el-col :span="4">通知标题</el-col>
            <el-col :span="20">通知内容</el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="4" >通知城市</el-col>
            <el-col :span="20">
              <el-radio-group v-model="cityOptions">
                <el-checkbox v-for="city in cityNames" :label="city" :key="city">{{city}}</el-checkbox>
              </el-radio-group>
            </el-col>
          </el-row>
        </template>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">
        <template>配置管理</template>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>
<script>
export default {
  data () {
    return {
      activeName: 'first',
      cityNames: ['上海', '北京', '广州', '深圳'],
      cityOptions: []
    }
  },
  methods: {
    handleClick () {

    }
  }
}
</script>
<style lang="less">
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
    text-align: left
  }
</style>


