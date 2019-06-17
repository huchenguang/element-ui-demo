<template>
  <div>
    <el-form :inline="true" class="toolbar" label-position="left">
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
      <el-form-item>
        <el-date-picker
          v-model="tiao.times"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
        ></el-date-picker>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="query('查询')">查询</el-button>
        <el-button type="danger" @click="del('删除')">删除</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="courses">
      <el-table-column width="150" label="姓名" prop="name"></el-table-column>
      <el-table-column width="150" label="头像" prop="avatar">
        <template slot-scope="scope">
              <img :src="scope.row.avatar" width="50" height="50" v-image-preview/>
          </template>
      </el-table-column>
      <el-table-column width="150" label="性别"  prop="sex"></el-table-column>
      <el-table-column width="150" label="语文" prop="yuwen"></el-table-column>
      <el-table-column width="150" label="数学" prop="shuxue"></el-table-column>
      <el-table-column width="150" label="英语" prop="yingyu"></el-table-column>
          
    </el-table>
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
        shortcut_time: '',
        times: [],
        dates: [],
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
      courses:[],
    };
  },
  mounted () {
    this.getServiceTypeData();
    this.courses.push(
      {
        name:'刘备',
        avatar:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=3216367814,3189880209&fm=58&bpow=872&bpoh=1258',
        sex:'男',
        yuwen:120,
        shuxue:118,
        yingyu:109,
    },{
        name:'关羽',
        avatar:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3693367251,516569648&fm=27&gp=0.jpg',
        sex:'男',
        yuwen:30,
        shuxue:20,
        yingyu:10,
    },{
        name:'张飞',
        avatar:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2446825279,91432748&fm=27&gp=0.jpg',
        sex:'男',
        yuwen:130,
        shuxue:140,
        yingyu:120,
    },{
        name:'赵云',
        avatar:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4259827520,165126908&fm=27&gp=0.jpg',
        sex:'男',
        yuwen:100,
        shuxue:100,
        yingyu:100,
    })
  },
  methods: {
    query (text) {
      alert(text)
    },
    del(text){
      alert(text)
    },
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

<style lang="less">
.toolbar {
  background: #eef1f6;
  padding: 10px 10px 0;
  height: auto;
  margin: 10px 0;
  border-radius: 5px;
  text-align: left;
  .el-form-item {
    padding-bottom: 10px;
    margin-bottom: 0px;
  }
}
.el-table th>.cell{
color: #000;
}
</style>


