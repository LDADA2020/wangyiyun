<template>
  <div id="home">
    <!-- <i class="el-icon-platform-eleme"></i> -->
    <div class="logo">
      <img src="../../assets/logo.gif" alt="" />
    </div>
    <div>
      <button @click="getPhone" class="phone">一键登录</button>
      >
    </div>
    <div>
      <router-link tag="button" to="/" class="go"> 立即体验 </router-link>
    </div>
    <div class="more">
      <i class="icon el-icon-s-check"></i>
      <i class="icon el-icon-phone"></i>
      <i class="icon el-icon-s-goods"></i>
      <i class="icon el-icon-s-check"></i>
      <div class="message" v-if="message">
        请勾选同意《用户协议》和《隐私政策》
      </div>
    </div>

    <div class="text">
      <span v-if="flag" @click="flag = !flag"><input type="checkbox" /></span>
      <span v-else @click="flag = !flag"><input type="checkbox" /></span>

      同意《用户协议》和《隐私政策》<br />《用户协议《用户协议》
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "home",
  data() {
    return {
      flag: true,
      message: false,
    };
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
    getPhone() {
      // alert(this.flag);
      if (this.flag) {
        this.message = true;
        setTimeout(() => {
          this.message = false;
        }, 3000);
      } else {
        this.$router.push({
          path: "/deng",
        });
      }
    },
  },
  mounted() {
    // 页面进入时加载内容
  },
  watch: {
    // 监测变化
  },
};
</script>
<style lang='scss' >
#header {
  display: none;
}
#home {
  width: 100%;
  height: 100%;
  // min-height: 800px;
  background: #db2c1f;
  overflow: hidden;
}

.logo img {
  margin-top: 100px;
  margin-left: 145px;
  // width: 100px;
}
.phone {
  margin-left: 40px;
  margin-top: 240px;
  width: 300px;
  height: 50px;
  line-height: 25px;
  border-radius: 25px;
}

.go {
  width: 300px;
  height: 50px;
  margin-left: 40px;
  margin-top: 18px;
  border-radius: 25px;
}
.more {
  text-align: center;
  margin-top: 30px;
}
.icon {
  display: inline-block;
  text-align: center;
  color: white;
  font-size: 30px;
  margin-left: 20px;
}
.message {
  width: 80%;
  height: 20px;
  // line-height: 50px;
  text-align: center;
  margin-left: 20px;
  background: rgba(0, 0, 0, 0.7);
}
.text {
  text-align: center;
}
</style>
