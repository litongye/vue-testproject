<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "TabBar"
};
</script>
<style>
#tab-bar {
  /* 设置对齐方式为弹性布局 */
  display: flex;
  background-color: #f6f6f6;
  /* 元素底部对齐 */
  position: fixed;
  left: 0px;
  right: 0px;
  bottom: 0px;
  /* box-shadow:为元素添加阴影
        参数1：水平阴影的位置(X坐标)。
        参数2：垂直阴影的位置(Y坐标)。
        参数3：阴影的尺寸。
        参数4：阴影的颜色。
     */
  box-shadow: 0px -2px 2px rgba(100, 100, 100, 0.1);
}
</style>