<template>
    <div id="admin">
    <el-container class="admin_container">
      <!-- <el-header class="header">
        <vheader>
          
        </vheader> -->
      <el-header>
        <div class="home_title">博客管理后台</div>
        <div class="home_userinfoContainer">
          <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link home_userinfo">
                {{currentUserName}}<i class="el-icon-arrow-down el-icon--right home_userinfo"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="sysMsg">系统消息</el-dropdown-item>
              <el-dropdown-item command="MyArticle">我的文章</el-dropdown-item>
              <el-dropdown-item command="MyHome">个人主页</el-dropdown-item>
              <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-header>

      <el-container>
          <navmenu></navmenu>
      </el-container>
    </el-container>

  </div>
</template>


<script>
import NavMenu from '@/components/NavMenu'
//import Header from '@/components/Header'

export default {
  name: 'Admin',
  data(){
      return{
          msg: 'hello element-ui',
          currentUserName: "测试用户"
      }
  },
  components: {
    'navmenu': NavMenu,
    //'vheader': Header
  }

}
</script>
<style scoped>
  .admin_container {
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
  }

  .el-header {
    background-color: #20a0ff;
    color: #333;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }



/* .header{
  background-color: #545c64;
  color: #fff;
  line-height: 60px;
} */

  .home_title {
    color: #fff;
    font-size: 22px;
    display: inline;
  }

  .home_userinfo {
    color: #fff;
    cursor: pointer;
  }

  .home_userinfoContainer {
    display: inline;
    margin-right: 20px;
  }
</style>
