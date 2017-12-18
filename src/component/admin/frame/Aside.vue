<template>
  <main>
      <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <!-- 导航列表：key属性用于for循环渲染时性能优化，index属性必须设为不一样的值，这样才能一个一个展开 -->
      <el-submenu v-for="item in item" :key="item.title"  :index="item.title">
        <!-- 导航title -->
        <template slot="title">
          <i class="el-icon-message"></i>
          <span>{{item.title}}</span>
        </template>
        <!-- 导航item -->
        <el-menu-item-group v-for="subItem in item.children" :key="subItem.title" :index="subItem.title">
          <!-- 每个子title都是一个a链接，可以点击，所以使用router-link，记得设置to属性 -->
          <router-link :to="subItem.path"><i class="el-icon-document"></i>{{subItem.title}}</router-link>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </main>
</template>

<script>
export default {
  // 设置路由
  data() {
    //   函数返回
    return {
      item: [
        {
          title: "学生问题汇总",
          children: [
            { title: "内容管理", path: "/" },
            { title: "类别管理", path: "/" },
            { title: "评论管理", path: "/" }
          ]
        },
        {
          title: "前段常用功能",
          children: [
            { title: "内容管理", path: "/" },
            { title: "类别管理", path: "/" },
            { title: "评论管理", path: "/" }
          ]
        },
        {
          title: "重难点专区",
          children: [
            { title: "内容管理", path: "/" },
            { title: "类别管理", path: "/" },
            { title: "评论管理", path: "/" }
          ]
        },
        {
          title: "资源下载",
          children: [
            { title: "内容管理", path: "/" },
            { title: "类别管理", path: "/" },
            { title: "评论管理", path: "/" }
          ]
        },
        {
          title: "购物商城",
          children: [
            { title: "内容管理", path: "/" },
            { title: "类别管理", path: "/" },
            { title: "评论管理", path: "/" }
          ]
        },
        {
          title: "订单管理",
          children: [
            { title: "内容管理", path: "/" },
            { title: "类别管理", path: "/" },
            { title: "评论管理", path: "/" }
          ]
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
  /*左边公共导航  */
    .el-menu {
        height: 100%;
        border-right: none;
    }
    .el-submenu__title i {
    color: #ffffff;
    }
   .el-menu[data-v-5e99a3b2] {
     text-align: left;
    }
    /* 左边公共导航的子分类 */
    .router-link-active{
      text-decoration: none;
      color: #ffffff;
      padding-left: 40px;
    }
</style>
