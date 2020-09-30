<!--  -->
<template>
  <div id="content">
    <ul>
      <router-link tag="li" to="/video/tui">
        推荐
      </router-link>
      <router-link tag="li" to="/video/zhibo">
      LOOK直播
      </router-link>
      <router-link tag="li" to="/video/music">
        看见音乐
      </router-link>
      <router-link tag="li" to="/video/xian">
        现场
      </router-link>
      <router-link class="last" tag="li" to="/video/fan">
        翻唱
      </router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#content {padding: 0 30px;}
#content ul{
  width: 100%;
  font-size: 12px;
}

#content ul li{
  float: left;
  margin-right: 20px
}
#content ul li.active{
  color:red
}
#content ul .last{margin-right: 0}

</style>
