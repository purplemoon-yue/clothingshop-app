<template>
  <van-form>
    <van-field
        v-model="username"
        label="用户名"
        placeholder="请输入用户名"
        :rules="[{ required: true, message: '请输入用户名' }]"
    />
    <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请输入密码' }]"
    />
    <div style="margin: 16px;">
      <van-button
          round
          block
          type="info"
          @click="onSubmit"
      >
        提交
      </van-button>
    </div>
  </van-form>
</template>

<script>
  import { login } from './api'

  export default {
    name: 'UserLogin',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      onSubmit() {
        login({
          password: 'qqq',
          username: 'OLIVER'
        }).then(res => {
          console.log(res)
        }).catch(err => {
          console.error(err)
        })
      }
    }
  }
</script>

<style scoped>

</style>
