<template>
  <main>
    <el-container>
        <!-- 页面左侧是公共的导航 -->
        <el-aside width="200px">
            <app-aside></app-aside>
        </el-aside>
        <!-- 页面右侧 -->
    <el-container>
        <!-- 头部是公共的 -->
    <el-header>
        <app-header></app-header>
    </el-header>
    <!-- 这一块是动态变化的，将来通过子路由控制 -->
    <el-main>
        <router-view></router-view>
    </el-main>
    </el-container>
    </el-container>
  </main>
</template>

<script>
// 导入公共的左侧与头部组件，注册成专属组件使用
  import AsideComponent from './frame/Aside.vue';
  import HeaderComponent from './frame/Header.vue';
export default {
    data(){
        return{

        };
    },

    methods:{

    },

    components:{
        appAside:AsideComponent,
        appHeader:HeaderComponent,
    }
}
</script>

<style scoped lang="less">
main{
    min-height: 0;
}
.el-container{
    height: 100%;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
</style>
