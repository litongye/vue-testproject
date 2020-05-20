<template>
  <div class="nav-bar">
    <!-- 不要设置插槽的样式，设置插槽外面div的样式 -->
    <div class="nav-left">
      <slot name="nav-slot-left"></slot>
    </div>
    <div class="nav-center">
      <slot name="nav-slot-center"></slot>
    </div>
    <div class="nav-right">
      <slot name="nav-slot-right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style scoped>
.nav-bar {
  display: flex; /* 类似于流布局 */
  height: 44px;
  line-height: 44px;
  text-align: center;
  /* box-shadow:为元素添加阴影 */
  box-shadow: 0px 2px 2px rgba(100, 100, 100, 0.1);
}
.nav-left,
.nav-right {
  width: 60px;
}
.nav-center {
  /* 左右各占60px,中间部分使用flex:1占据剩余部分 */
  flex: 1;
}
</style>