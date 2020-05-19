<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="isActive" name="item-icon-active"></slot>
    <slot v-else name="item-icon"></slot>
    <div :class="{active : !isActive}">
      <slot :class="{active : !isActive}" name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    // 接收来自于父组件名为link的字符串
    link: String
  },
  methods: {
    itemClick() {
      // 避免添加重复的path,否则会发生异常
      if (this.$route.path.indexOf(this.link) == -1) {
        this.$router.replace(this.link);
      }
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.link) == -1;
    }
  }
};
</script>

<style>
.tab-bar-item {
  /* 弹性布局时每个元素宽度相同 */
  flex: 1;
  text-align: center;
  /* 每个元素的高度为49px */
  height: 49px;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
}
.active {
  color: red;
}
</style>