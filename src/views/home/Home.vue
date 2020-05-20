<template>
  <div id="home">
    <nav-bar id="home-nav">
      <div slot="nav-slot-center">购物街</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar";

export default {
  name: "Home",
  components:{
    NavBar
  }
};
</script>

<style>
  #home-nav{
    /* 引用base.css文件中--color-tint变量的值 */
    background-color:var(--color-tint);
    color:#FFFFFF
  }
</style>

