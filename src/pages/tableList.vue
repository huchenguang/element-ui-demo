<template>
  <section class="dt-container">
    <!--工具栏-->
    <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item>
          <el-input placeholder="类型名称" v-model="tiao.service_type_name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList">查询</el-button>
          <el-button type="primary" @click.native="addFormVisible = true">新增</el-button>
        </el-form-item>
      </el-form>
    </el-col>

    <!--数据展示-->
    <el-table :data="dataList" v-loading="listLoad" border stripe style="width: 100%;">
      <el-table-column prop="current_page" label="当前页" width="100"></el-table-column>
      <el-table-column prop="page_size" label="当前页个数" width="100"></el-table-column>
      <el-table-column prop="sort_value" label="排序值" width="100"></el-table-column>
      <el-table-column prop="icon_url" label="图标" width="80">
        <template slot-scope="scope">
          <img :src="scope.row.icon_url" width="40" height="40" v-image-preview class="head_pic">
        </template>
      </el-table-column>
      <el-table-column prop="service_type_name" label="类别名称" width="160"></el-table-column>
      <el-table-column prop="backgroud_url" label="背景图" width="150">
        <template slot-scope="scope">
          <img :src="scope.row.backgroud_url" width="50" height="50" v-image-preview class="image">
        </template>
      </el-table-column>
      <!-- <el-table-column prop="remarks" label="描述" width="300"></el-table-column> -->
      <el-table-column label="操作" fixed="right">
        <template slot-scope="scope">
          <!-- <el-button type="info" size="small" @click="getDetail(scope.row.id)">详情</el-button>  -->
          <el-button type="primary" size="small" @click="showChooseDlg(scope.row)">选择</el-button>
          <el-button type="danger" size="small" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--分页-->
    <el-col :span="24" class="toolbar">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage"
        :page-sizes="[1,10, 15, 20, 30]"
        :page-size="pageCount"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listCount"
        style="float:right"
      ></el-pagination>
    </el-col>

    <!--选择-->
    <el-dialog title="选择顾客" :visible.sync="chooseCustomerDlgVisible">
      <el-table :data="customerList" border stripe>
        <el-table-column label="当前页" prop="current_page"></el-table-column>
        <el-table-column label="当前页个数" prop="page_size"></el-table-column>
        <el-table-column label="姓名" prop="name"></el-table-column>
        <el-table-column label="手机号" prop="phone"></el-table-column>
      </el-table>

      <!--分页-->
      <el-col :span="24" class="toolbar">
        <el-pagination
          background
          @size-change="handleCustomerSizeChange"
          @current-change="handleCustomerCurrentChange"
          :current-page.sync="currentCustomerPage"
          :page-sizes="[1,10, 15, 20, 30]"
          :page-size="customerPageCount"
          layout="total, sizes, prev, pager, next, jumper"
          :total="customerListCount"
          style="float:right"
        ></el-pagination>
      </el-col>
    </el-dialog>
  </section>
</template>

<script>
export default {
  data () {
    return {
      //查询条件
      tiao: {
        service_type_name: '',
      },
      listLoad: false,
      dataList: [], //数据列表
      currentPage: 1,
      pageCount: 10,
      listCount: 0,
      chooseCustomerDlgVisible: false,
      customerList: [],
      currentCustomerPage: 0,
      customerPageCount: 10,
      customerListCount: 0,
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    showChooseDlg () {
      this.chooseCustomerDlgVisible = true
      this.getCustomerList()
    },
    handleCustomerSizeChange (pageCount) {
      this.customerPageCount = pageCount
      this.getCustomerList()
    },
    handleCustomerCurrentChange (page) {
      this.currentCustomerPage = page
      this.getCustomerList()
    },
    getCustomerList () {
      this.customerList = []
      for (var i = 0; i < this.customerPageCount; i++) {
        this.customerList.push({
          current_page: this.currentCustomerPage,
          page_size: this.customerPageCount,
          name: '小胡',
          phone: '1376200000' + i
        })
      }
      this.customerListCount = 50
    },

    handleSizeChange (count) {
      this.pageCount = count
      this.getList()
    },
    handleCurrentChange (page) {
      this.currentPage = page
      this.getList()
    },
    getList () {
      this.dataList = []
      for (var i = 0; i < this.pageCount; i++) {
        this.dataList.push({
          current_page: this.currentPage,
          page_size: this.pageCount,
          sort_value: i,
          icon_url: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3300305952,1328708913&fm=27&gp=0.jpg',
          service_type_name: '金融服务',
          backgroud_url: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1718395925,3485808025&fm=27&gp=0.jpg'
        })
      }

      this.listCount = 50
    }
  }
}
</script>

<style lang="less">
/*各个页面的工具栏样式(查询条件)*/
.dt-container {
  .toolbar {
    background: #eef1f6;
    padding: 10px;
    height: auto;
    margin: 10px 0px;
    border-radius: 5px;
    float: none;
    height: 62px;
    .el-form-item {
      margin-bottom: 10px;
    }
    .el-pagination {
      padding: 10px 5px;
    }
  }
}
</style>


