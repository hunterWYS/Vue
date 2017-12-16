<template>
<div class="login">
  <!-- 盒子居中 -->
  <div class="login_content">
    <!-- login -->
    <section class="login_img">
      <img src="../../img/logo.png" alt="logo">
    </section>

    <!-- 表单 --> 
    <section class="login_from">
      <!-- from:如果你的表单要进行验证，重置，那么必须设置model属性，关联整个表单的数据 -->
          <el-form :model="user" :rules="formRules" status-icon ref="ruleForm2" label-width="80px" class="demo-ruleForm" label-position="left">
            <!-- input:如果要验证，重置，那么必须设置prop属性，关联当前的input字段名 -->
      <el-form-item label="用户名" prop="uname">
        <!-- input:记得改写v-model的值 -->
        <el-input type="text" v-model="user.uname" auto-complete="off"></el-input>
      </el-form-item>
      <!-- input:如果要验证，重置，那么必须设置prop属性，关联当前的input字段名 -->
      <el-form-item label="密码" prop="upwd">
        <!-- input:记得改写v-model的值 -->
        <el-input type="password" v-model="user.upwd" auto-complete="off"></el-input>
      </el-form-item>
      
      <el-form-item>
        <el-button @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
</el-form>

    </section>
     </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      // 提交给后台的用户字段
      user: {
        uname: "",
        upwd: ""
      },
      // 配置验证规则
      formRules: {
        uname: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { pattern: /\w{5,18}/,message: "长度在 4 到 18 个字符, 且只能为字母或数字",trigger: "blur"}
        ],
        upwd: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { pattern: /.{6,18}/, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    //点击提交按钮，调用登录接口
    submitForm(formName) {
    //先验证表单，在提交
      this.$refs[formName].validate((result) => {
        if (result) {
          this.$http.post(this.$api.login,this.user)
          .then(rsp=>alert(rsp.data.message.realname));
        } else {
          alert("登录错误");
        }
      });
    },
    // 重置表单
    // vue中提供了一个$refs对象，用来快速的获取dom元素
    //在一些特殊情况下我们需要拿到原生dom进行操作
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style scoped lang="less">

.login {
  .login_content {
    width: 400px;
    text-align: center;
    border: 1px solid red;
    margin: 0 auto;
    margin-top: 200px;
    padding: 10px 0;
    .login_img{
      padding: 5px 0;
    }
    .login_from{
      padding: 2px 10px;
    }
  }
}
</style>

