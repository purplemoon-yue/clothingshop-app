<template>
  <div>
      <button @click="hendbtncilck">购物车点击跳到新的页面</button>
  </div>
</template>

<script>
  export default {
    name: 'ShoppingCart',
      methods: {
          hendbtncilck() {
              this.$router.push({ path: '/test' })
          }
      }
  }
</script>

<style scoped>

</style>
