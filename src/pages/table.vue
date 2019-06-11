<template>
  <div>
    <el-form :inline="true" class="toolbar">
      <el-form-item>
        <el-input placeholder="服务名称" v-model="tiao.service_name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="tiao.service_phone" placeholder="联系电话"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tiao: {
        service_name: '',
        service_phone: '',
      }
    };
  }
}
</script>

<style lang="less" scoped>
.toolbar {
  background: #eef1f6;
  padding: 10px;
  height: auto;
  margin: 10px 0px;
  border-radius: 5px;
  .el-form-item {
    vertical-align: middle;
  }
}
</style>


