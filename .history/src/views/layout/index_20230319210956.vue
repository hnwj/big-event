<template>
  <div>
    <el-container>
      <el-header>
        <img src="../../assets/images/logo.png" alt="" />
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-sub-menu index="1">
            <template #title>
              <!-- 头像 -->
              <img src="../../assets/images/logo.png" alt="" class="avatar" />
              <span>个人中心</span>
            </template>
            <el-menu-item index="1-1"
              ><i class="el-icon-s-operation"></i>基本资料</el-menu-item
            >
            <el-menu-item index="1-2"
              ><i class="el-icon-camera"></i>更换头像</el-menu-item
            >
            <el-menu-item index="1-3"
              ><i class="el-icon-key"></i>重置密码</el-menu-item
            >
          </el-sub-menu>
          <el-menu-item index="2"
            ><i class="el-icon-switch-button"></i>退出</el-menu-item
          >
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
}
</script>

<style lang="less">
.main-container {
  height: 100%;
  .el-header,
  .el-aside {
    background: #23262e;
  }
  .el-header {
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
  .el-main {
    overflow-y: scroll;
    height: 0;
    background: #f2f2f2;
  }
  .el-footer {
    background: #eee;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.avatar {
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-color: #fff;
  margin-right: 10px;
  object-fit: cover;
}
</style>