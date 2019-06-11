<template>
  <div>
    <el-form :inline="true" class="toolbar">
      <el-form-item>
        <el-input placeholder="服务名称" v-model="tiao.service_name" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="tiao.service_phone" placeholder="联系电话" clearable></el-input>
      </el-form-item>
      <el-form-item>
        <el-select v-model="tiao.service_type_name" placeholder="请选择用户类型" clearable>
          <el-option
            v-for="item in serviceTypeData"
            :key="item.service_type_id"
            :label="item.service_type_name"
            :value="item.service_type_id"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-date-picker v-model="tiao.start_time" placeholder="选择开始日期" type="date"></el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-date-picker
          v-model="tiao.shortcut_time"
          align="right"
          type="date"
          placeholder="选择日期"
          :picker-options="pickerOptions"
        ></el-date-picker>
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
        service_type_name: '',
        start_time: '',
        shortcut_time: ''
      },
      serviceTypeData: [],
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date());
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            picker.$emit('pick', date);
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            picker.$emit('pick', date);
          }
        }]
      },
    };
  },
  mounted () {
    this.getServiceTypeData();

  },
  methods: {
    getServiceTypeData () {
      this.serviceTypeData.push(
        {
          service_type_id: 111,
          service_type_name: '类型1'
        }, {
          service_type_id: 222,
          service_type_name: '类型2'
        }, {
          service_type_id: 333,
          service_type_name: '类型3'
        })
    }
  },
}
</script>

<style lang="less" scoped>
.toolbar {
  background: #eef1f6;
  padding: 10px 10px 0;
  height: auto;
  margin: 10px 0;
  border-radius: 5px;
  .el-form-item {
    margin-bottom: 10px;
  }
}
</style>


