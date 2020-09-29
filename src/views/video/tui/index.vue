<!--  -->
<template>
  <div>
    <div class="content">
    <div v-for="item in mv" :key="item">{{item}}</div>
      <img  v-for="item in mv" :key="item" :src="item" alt="" @click="getpic" />
      <div class="con">
        <p>333654165454468455466514</p>
        <img class="tu2" src="../../../assets/pic2.gif" alt="" />
      </div>
      <div class="pin">
        <img class="tu3" src="../../../assets/pic2.gif" alt="" />
        <span>罗伊左</span>
        <div class="biao">
          <i class="el-icon-chat-line-round"></i><i class="el-icon-more"></i>
        </div>
      </div>
    </div>
    <div class="content">
      <img src="../../../assets/pic1.gif" alt="" />
      <div class="con">
        <p>333654165454468455466514</p>
        <img class="tu2" src="../../../assets/pic2.gif" alt="" />
      </div>
      <div class="pin">
        <img class="tu3" src="../../../assets/pic2.gif" alt="" />
        <span>罗伊左</span>
        <div class="biao">
          <i class="el-icon-chat-line-round"></i><i class="el-icon-more"></i>
        </div>
      </div>
    </div>

    <div class="content">
      <img src="../../../assets/pic1.gif" alt="" />
      <div class="con">
        <p>333654165454468455466514</p>
        <img class="tu2" src="../../../assets/pic2.gif" alt="" />
      </div>
      <div class="pin">
        <img class="tu3" src="../../../assets/pic2.gif" alt="" />
        <span>罗伊左</span>
        <div class="biao">
          <i class="el-icon-chat-line-round"></i><i class="el-icon-more"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
        mv:[]
    };
  },
  computed: {},
  watch: {},
  methods: {
    getpic() {
      this.$http({
        method: "get",
        url: "/api/top/mv",
      }).then((res) => {
        console.log(res.data);
        for (let i = 0; i < 6; i++) {
        //   this.mv.push(res.data.data[i].cover);
        }
      });
    },
  },
  created() {
    this.getpic();
  },
  mounted() {},
};
</script>
<style scoped>
.content {
  margin-bottom: 15px;
  background: white;
}
.content img {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5px;
}

.con {
  height: 40px;
  border-bottom: 1px #ccc solid;
}

.con p {
  display: inline-block;
  width: 80%;
  float: left;
}

.con .tu2 {
  width: 30px;
  display: inline-block;
  float: right;
  margin-top: 5px;
}

.pin {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}
.pin .tu3 {
  width: 30px;
  display: inline-block;
  margin-top: 5px;
}

.pin .biao {
  width: 50px;
  float: right;
}

.pin .el-icon-chat-line-round {
  font-size: 14px;
  margin-right: 20px;
}
.pin .el-icon-more {
  font-size: 14px;
}
</style>
