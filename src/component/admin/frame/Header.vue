<template>
  <div>
    <!-- 下拉菜单：通过command监听点击事件，事件回调里会收到被点击菜单的标识符 -->
    <el-dropdown trigger="click" @command="handleCommand">
      <!-- 菜单title -->
      <span class="el-dropdown-link">
        你好,{{user.uname}}
      <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <!-- 菜单列表 -->
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>修改密码</el-dropdown-item>
        <el-dropdown-item command="logout">注册登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 通过localStorage拿到用户名，如果没有一个空哦那个对象
      user: JSON.parse(localStorage.getItem("user")) || {}
    };
  },
  methods:{
    // 调用接口注销登陆，成功后清除localStorage存储的用户信息
    logout() {
     
      this.$http.get(this.$api.logout)
      .then(rsp => {
        localStorage.removeItem("user");
        this.$router.push("/login");
      });
    },
    //点击菜单时的处理函数
    handleCommand(command) {
       console.log(1111);
      switch (command) {
        case "logout":
          this.logout();
          break;
      }
    }
  }
};
</script> 

<style scoped lang="less">
.el-header[data-v-8aeb1e26] {
   >div{
      line-height: 60px;
    text-align: right;
   }
}
</style>
