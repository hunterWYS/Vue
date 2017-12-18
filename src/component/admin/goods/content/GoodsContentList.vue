<template>
  <div class="content_List">
      <!-- ===面包屑导航=== -->
     <el-breadcrumb separator="/">
        <el-breadcrumb-item>购物商城</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>内容管理</el-breadcrumb-item>
    </el-breadcrumb>

    <div class="list">
    <!-- ===button左边按钮=== -->
        <div class="list_btn">
            <el-button plain size="small"><i class="el-icon-plus"></i><span>新增</span></el-button>
            <el-button plain size="small"> <i class="el-icon-check"></i> <span>全选</span></el-button>
            <el-button plain size="small"><i class="el-icon-delete"></i><span>删除</span></el-button>
        </div>
        <!-- ===右边搜索框=== -->
        <div class="list_search">
          <!-- ===当焦点离开时，调用接口获取搜索后的数据列表=== -->
            <el-input @blur="getTableList" v-model="query.searchvalue" size="small"  placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
        </div>
        </div>
         <!-- ===表格=== -->
        <el-table ref="multipleTable" :data="tableList" tooltip-effect="dark" style="width: 100%">
         <!-- ===多选框列=== -->
            <el-table-column  type="selection"> </el-table-column>
        <!-- ===普通列:lable用于设置表头，prop用于指定该列展示的字段名称=== -->
            <el-table-column label="商品名称" prop="title"></el-table-column>
            <el-table-column label="所属分类" width="100" prop="categoryname"></el-table-column>
            <el-table-column label="库存" width="100" prop="stock_quantity"></el-table-column>
            <el-table-column label="市场价" width="100" prop="market_price"></el-table-column>
            <el-table-column label="销售价" width="100" prop="sell_price"></el-table-column>
          <!-- 普通列:lable用于设置表头，template用于设定任意HTML的结构 -->
            <el-table-column label="属性" width="100">
              <!-- 在template需要通过scope.ros拿到属性 -->
              <template slot-scope="scope">
                <i :class="['el-icon-picture', scope.row.is_top? 'active': '']"></i>
                <i :class="['el-icon-upload', scope.row.is_hot? 'active': '']"></i>
                <i :class="['el-icon-star-on', scope.row.is_slide? 'active': '']"></i>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="100">
              <template slot-scope="scope">
                <a href="">修改</a>
              </template>
            </el-table-column>
        </el-table>
        <!-- 分页：size-change用于监听每页展示条目的变化，current-change用于监听页码的变化 -->
        <!-- 分页：current-page属性用于设置当前处于第几页，page-size属性用于设置每页条目的可选项 -->
        <!-- 分页：layout用于设置要使用那些分页小组件，total用于设置数量总数 -->
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
      :current-page="query.pageIndex" :page-size="query.pageSize" :page-sizes="[10,20,30,40]"
      layout="total,sizes, prev, pager, next,jumper" :total="totalcount">
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //请求接口所需的查询字符串，在分页组件里也可以修改
      query:{
        pageIndex:1,
        pageSize:10,
        searchvalue:''
      },
      //数据总量
      totalcount:0,
      //列表数据
      tableList:[],
    };
  },
  methods: {
    //获取商品列表
        getTableList(){
          //get方法的第二个参数可以用来指定查询字符串，header信息等内容
          this.$http.get(this.$api.gsList,{params:this.query})
          .then(rsp=>{
            console.log(rsp.data.message);
            this.tableList=rsp.data.message;
            this.totalcount=rsp.data.totalcount;
          })
        },
        //每页数量变化是时触发
        handleSizeChange(pageSize){
          this.query.pageSize=pageSize;
          this.getTableList();
        },
        //页码变化时触发
        handleCurrentChange(pageIndex){
          this.query.pageIndex=pageIndex;
          this.getTableList();
        }
       },
  created(){
    //页面一进来就请求接口获取展示列表
    this.getTableList();
  }
};
</script>
<style scoped lang="less">
.content_List {
  /* ===面包屑导航===  */
  .el-breadcrumb {
    font-size: 14px;
    line-height: 1;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
  }
  /* 左边按钮与有边搜索框 */
  .list {
    padding: 15px 10px;
    border: 1px solid #ccc;
    border-radius: 15px;
    overflow: hidden;
    /*  ===button左边按钮=== */
    .list_btn {
      line-height: 0;
      float: left;
    }
    /* ===右边搜索框=== */
    .list_search {
      line-height: 0px;
      float: right;
      border-radius: 7px;
    }
  }
     /* ===表头的行高=== */
  .el-table {
     line-height: 0px;
  }
   /* ===底部分页的的行高=== */
   .el-pagination {
     line-height: 0;
   }
  /* ===属性icon的图标色=== */
  .active{
    color: #000000;
  }
}
</style>
