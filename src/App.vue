<template>
  <div id="app">
    <router-view></router-view>
    <!-- 使用组件 -->
    <tab-bar>
      <!-- 使用TabBarItem组件 -->
      <tab-bar-item link="/home">
        <img slot="item-icon" src="./assets/img/tabbar/home.png" />
        <img slot="item-icon-active" src="./assets/img/tabbar/home-active.png" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item link="/search">
        <img slot="item-icon" src="./assets/img/tabbar/search.png" />
        <img slot="item-icon-active" src="./assets/img/tabbar/search-active.png" />
        <div slot="item-text">搜索</div>
      </tab-bar-item>
      <tab-bar-item link="/shopping">
        <img slot="item-icon" src="./assets/img/tabbar/shopping-cart.png" />
        <img slot="item-icon-active" src="./assets/img/tabbar/shopping-cart-active.png" />
        <div slot="item-text">购物</div>
      </tab-bar-item>
      <tab-bar-item link="/user">
        <img slot="item-icon" src="./assets/img/tabbar/user.png" />
        <img slot="item-icon-active" src="./assets/img/tabbar/user-active.png" />
        <div slot="item-text">关于</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/common/tabbar/TabBar";
import TabBarItem from "./components/common/tabbar/TabBarItem";

export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
/* 引入base.css文件 */
@import "assets/css/base.css";
</style>
