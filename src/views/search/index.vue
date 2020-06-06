<template>
  <div>
    <van-tabs v-model="active" swipeable>
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="标签 2">内容 2</van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
    <van-grid :gutter="10">
      <van-grid-item v-for="value in 30" :key="value" icon="photo-o" text="文字" />
    </van-grid>
  </div>
</template>

<script>
  export default {
    name: 'Search',
    data() {
      return {
        active: 2
      }
    }
  }
</script>

<style scoped>

</style>
