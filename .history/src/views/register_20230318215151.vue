<template>
  <!-- 注册整体盒子 -->
  <div class="reg-container">
    <div class="reg-box">
      <div class="title-box"></div>
    </div>
    <!-- 注册部分 -->
    <el-form :model="form">
      <el-form-item label="用户名">
        <el-input v-model="regForm.username" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup () {
    const state = reactive({
      regForm: []
    })
  }
}
</script>

<style lang="less" scoped>
.reg-container {
  background: url('../../src/assets/images/bg.jpg') no-repeat;
  background-size: cover;
  height: 100%;
  .reg-box {
    position: absolute;
    width: 400px;
    height: 335px;
    background-color: #fff;
    border-radius: 3px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    .title-box {
      height: 60px;
      background: url('../../src/assets/images/login_title.png') no-repeat
        center;
    }
  }
}
</style>