<template>
  <div class="audio-b-c">
    <div id="audio-index" class="index">
      <div class="audioD1">
        <div class="audioD1-1">
          <i class="el-icon-back"></i>
          <div class="audioD1-geming">
            <span>一念之间</span><br />
            <time><a href="#">张杰></a></time>
          </div>
        </div>
        <div class="audioD1-1"><i class="el-icon-more"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "index",
  data() {
    return {};
  },
  created() {
    // 实例被创建之后执行代码
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    // 方法
  },
  mounted() {
    // 页面进入时加载内容
  },
  watch: {
    // 监测变化
  },
};
</script>
<style scoped>

#audio-index {
  width: 90%;
  /* background-color: antiquewhite; */
  margin: 0 auto;
}
#ic1 {
  color: black;
  width: 50px;
  height: 50px;
  font-size: 50px;
}
.audio-b-c {
  background-color: cadetblue;
}
.audioD1 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.audioD1 .el-icon-back {
  font-size: 30px;
  color: white;
}
.audioD1 .el-icon-more {
  font-size: 30px;
  color: white;
}
.audioD1-1 span {
  font-size: 13px;
  color: white;
}
.audioD1-1 time {
  display: block;
  font-size: 9px;
}
.audioD1-1 time a {
  color: #afafaf;
}
.audioD1-1 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>