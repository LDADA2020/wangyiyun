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
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped>
#content {padding: 0 30px;
}
#content ul{
  width: 100%;
  font-size: 12px;
}
#content ul .last{margin-right: 0}
#content ul li{
  float: left;
  margin-right:10.5%
}
#content ul li.active{
  color:red
}
</style>
