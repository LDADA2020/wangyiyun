<template>
    <header id="header">
    <ul>
      <router-link tag="li" to="/mine">
        <p>我的</p>
      </router-link>
      <router-link tag="li" to="/find" >
        <p>发现</p>
      </router-link>
      <router-link tag="li" to="/village" >
        <p>云村</p>
      </router-link>
      <router-link tag="li" to="/video" >
        <p>视频</p>
      </router-link>
     <router-link tag="li" to="/search" >
        <i class="iconfont icon-sousuo"></i>
      </router-link>
    </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
#header {
  width: 100%;
  height: 50px;
  background: white;
  border-top: 2px #ebe8e3 solid;
}
#header ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
#header ul li {
  flex: 1;
  height: 40px;
  line-height: 40px;
  color: #747474;
}
#header ul li.active {
    font-weight: 700;
    color: #3c3c3c;
    font-size: 16px;
}
#header ul i {
  font-size: 20px;
}
#header ul p {
  font-size: 14px;
  line-height: 40px;
}
#header{
  display: none;
}
</style>