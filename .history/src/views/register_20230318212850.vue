<template>
  <!-- 注册整体盒子 -->
  <div class="reg-container">
    <div class="reg-box">
      <div class="title-box"></div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.reg-container {
  background: url('../../src/assets/images/bg.jpg') no-repeat;
  background-size: cover;
  height: 100%;
  .reg-box {
    width: 400px;
    height: 335px;
    background-color: red;
    border-radius: 3px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>