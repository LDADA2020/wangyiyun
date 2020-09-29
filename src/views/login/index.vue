<template>
  <div id="home">
    <!-- <i class="el-icon-platform-eleme"></i> -->
    <div class="logo">
      <img src="../../assets/logo.gif" alt="" />

      <button class="phone">
        一键登录
      </button>
      <router-link tag="button" to="" class="go">
        立即体验
      </router-link>

      <div class="more">
        <i class="icon el-icon-s-check"></i>
        <i class="icon el-icon-phone"></i>
        <i class="icon el-icon-s-goods"></i>
        <i class="icon el-icon-s-check"></i>
        <div class="message" v-if="message">
          请勾选同意《用户协议》和《隐私政策》
        </div>
      </div>
      <div class="message">
        <input type="checkbox" v-if="flag" @click="flag = !flag" />
        <input type="checkbox" v-else @click="flag = !flag" />
        请勾选同意《用户协议》和《隐私政策》<br />《用户协议《用户协议》
      </div>
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
      if (this.flag) {
        this.message = true;
        setTimeout(() => {
          this.message = false;
        }, 3000);
      } else {
        this.$router.push({
          path: "/phone",
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
<style>
#header {
  display: none;
}
#home {
  width: 100%;
  height: 100%;
  background: #db2c1f;
}
.logo {
  padding: 170px;
  padding: 165px;
}
.logo img {
  width: 100px;
  /* height: 100px; */
}
.phone {
  margin-left: -120px;
  margin-top: 300px;
  width: 300px;
  height: 50px;
  line-height: 25px;
  border-radius: 25px;
}
.go {
  width: 300px;
  height: 50px;
  margin-left: -120px;
  margin-top: 18px;
  border-radius: 25px;
}
.more {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  margin-left: -90px;
}
.icon {
  display: inline-block;
  text-align: center;
  color: white;
  font-size: 40px;
  margin-left: 20px;
}
.message {
  position: absolute;
  width: 80%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-left: -110px;
}
</style>
