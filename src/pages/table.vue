<template>
<div>
    <el-table :data="tableData" style="width: 100%" ref="singleTable" :row-class-name="tableRowClassName" highlight-current-row @current-change="handleCurrentChange"
    @selection-change="handleSelectionChange"
    lazy
    :load="loadIt"
    row-key="id"  :tree-props="{children: 'children', hasChildren: 'hasChildren'}" >
    <el-table-column type="expand">
        <template slot-scope="scope">
            <el-form inline label-position="left"  class="demo-table-expand">
              <el-form-item label="姓名">{{scope.row.name}}</el-form-item>
              <el-form-item label="日期">{{scope.row.date}}</el-form-item>
              <el-form-item label="地址">{{scope.row.address}}</el-form-item>
            </el-form>
        </template>
    </el-table-column>
      <el-table-column type="selection" width="100"></el-table-column>
      <el-table-column label="索引" type="index" width="100"></el-table-column>
    <el-table-column prop="date" label="日期" width="180"></el-table-column>
    <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
                <p>姓名: {{ scope.row.name }}</p>
                <p>地址: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
        </template>

    </el-table-column>
    <el-table-column  label="地址" >
        <el-table-column label="一号">
            <el-table-column label="一号first" prop="address"></el-table-column>
            <el-table-column label="一号second" prop="address"></el-table-column>
        </el-table-column>
        <el-table-column label="二号" prop="address" width="250"></el-table-column>
    </el-table-column>
    <el-table-column>
        <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索"></el-input>
        </template>
    </el-table-column>
  </el-table>
  <div style="margin-top:20px">
    <el-button @click="setCurrentRow(tableData[1])">选中第二行</el-button>
    <el-button @click="checkIt([tableData[1],tableData[2]])">选中第二行第三行</el-button>
  </div>

  <el-table :data="numberTableData" border show-summary style="width: 100%;margin-top:30px;margin-bottom:30px" :summary-method="getSummaries"
  :span-method="arraySpanMethod">
    <el-table-column prop="id" label="ID" width="180"></el-table-column>
    <el-table-column prop="name" label="姓名"></el-table-column>
    <el-table-column prop="amount1" sortable label="数值 1"></el-table-column>
    <el-table-column prop="amount2" sortable label="数值 2"></el-table-column>
    <el-table-column prop="amount3" sortable label="数值 3"></el-table-column>
  </el-table>
</div>
</template>


<style lang="less">
.el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .demo-table-expand {
    font-size: 0;
    width: 600px;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 100%;
  }
</style>
<script>
  export default {
    data() {
      return {
        numberTableData:[{
          id: '12987122',
          name: '王小虎',
          amount1: '234',
          amount2: '3.2',
          amount3: 10
        }, {
          id: '12987123',
          name: '王小虎',
          amount1: '165',
          amount2: '4.43',
          amount3: 12
        }, {
          id: '12987124',
          name: '王小虎',
          amount1: '324',
          amount2: '1.9',
          amount3: 9
        }, {
          id: '12987125',
          name: '王小虎',
          amount1: '621',
          amount2: '2.2',
          amount3: 17
        }, {
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        },{
          id: '12987126',
          name: '王小虎',
          amount1: '539',
          amount2: '4.1',
          amount3: 15
        }]
        ,
        tableData: [{
          id:1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
        }, {
          id:2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id:3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          children: [{
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id:4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        currentRow:null,
        selections:[],
        load:false,
        search:'',
      }
    },
    methods:{
      arraySpanMethod({row,column,rowIndex,columnIndex}){
          if (columnIndex === 2) {
          if (rowIndex % 2 === 0) {
            return {
              rowspan: 2,
              colspan: 1
            };
          } else {
            return {
              rowspan: 0,
              colspan: 0
            };
          }
          }
      },
      getSummaries(param){
        const {columns,data} = param;
        const sums = [];
        columns.forEach((colum,index)=>{
           if (index === 0) {
            sums[index] = '总价';
            return;
          }
          const values = data.map(item=>{
            Number(item[columns.property])
          })
          sums.push(111)
        })
        return sums
      },
        loadIt(tree,treeNode,resolve){
            console.log(tree,"tree")
            console.log(treeNode,"treeNode")
            console.log(resolve,"resolve")
        },
         tableRowClassName({row, rowIndex}) {
            if (rowIndex === 1) {
               return 'warning-row';
            } else if (rowIndex === 3) {
                 return 'success-row';
            }
        return '';
        },
        setCurrentRow(row){
            this.$refs.singleTable.setCurrentRow(row)
        },
        handleCurrentChange(val){
            this.currentRow = val
        },
        handleSelectionChange(rows){
            this.selections = rows
            console.log(this.selections,"selections")
        },
        checkIt(rows){
            if(rows){
                rows.forEach(row => {
                    this.$refs.singleTable.toggleRowSelection(row)
                });
            }else{
                this.$refs.singleTable.clearSelection()
            }
        }
    }
  }
</script>


