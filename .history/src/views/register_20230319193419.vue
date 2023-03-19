<template>
  <!-- 注册整体盒子 -->
  <div class="reg-container">
    <div class="reg-box">
      <div class="title-box"></div>
      <!-- 注册部分 -->
      <el-form :model="regForm" ref="regRef" :rules="regRules">
        <el-form-item prop="state.regRules.username">
          <el-input v-model="regForm.username" />
        </el-form-item>
        <el-form-item prop="state.regRules.password">
          <el-input type="password" v-model="regForm.password" />
        </el-form-item>
        <el-form-item prop="state.regRules.repassword">
          <el-input type="password" v-model="regForm.repassword" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="btn-reg" @click="regNewUser"
            >注册</el-button
          >
          <el-link type="info" @click="this.$router.push('/login')"
            >登录</el-link
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { regAPI } from '@/api/user'
export default {
  data () {
    const samePwd = (rule, value, callback) => {
      if (value !== this.regForm.password) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
    return {
      // 注册数据
      regForm: {
        username: 'zss',
        password: '123456',
        repassword: '123456'
      },
      // 注册规则
      regRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: /^[a-zA-Z0-9]{1,10}$/, message: '用户名必须是1-10的字母数字', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码必须是6-15的非空字符', trigger: 'blur' }
        ],
        repassword: [
          { required: true, message: '请再次输入密码', trigger: 'blur' },
          { pattern: /^\S{6,15}$/, message: '密码必须是6-15的非空字符', trigger: 'blur' },
          { validator: samePwd, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 注册功能
    regNewUser () {
      this.$refs.regRef.validate(async valid => {
        if (!valid) return
        try {
          const { data: res } = await regAPI(this.regForm)
          console.log(11)
          console.log('res', res)
          this.$message.success(res.message)
          this.$router.push('/login')
        } catch (error) {
          this.$message.error('注册失败！')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.reg-container {
  background: url('../../src/assets/images/bg2.jpg') no-repeat;
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
    padding: 0 30px;
    box-sizing: border-box;
    .title-box {
      height: 60px;
      background: url('../../src/assets/images/login_title.png') no-repeat
        center;
    }
    .btn-reg {
      width: 100%;
    }
  }
}
</style>