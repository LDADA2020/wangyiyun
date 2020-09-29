<template>
  <div id="deng">
    手机号:<el-input
      v-model="inputs"
      class="text"
      placeholder="请输入内容"
    ></el-input>
    密码:<el-input
      class="password"
      placeholder="请输入密码"
      v-model="input"
      show-password
    ></el-input>

    <el-row>
      <el-button class="btn" type="primary" plain @click="getBanner"
        >登录</el-button
      >
    </el-row>
  </div>
</template>

<script>
import { setToken } from "../../utils/auth";
export default {
  props: {
    // 父辈向子辈传参
  },
  name: "deng",
  data() {
    return {
      inputs: "",
      input: "",
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

    getBanner() {
      this.$http({
        method: "get",
        url: `/api/login/cellphone?phone=${this.inputs}&password=${this.input}`,
      }).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          const id = res.data.account.id;
          console.log(id);

          const Tid = res.data.token;
          console.log(Tid);
          setToken(Tid);
          this.$router.push({
            path: "/",
          });
        }
      });
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
<style scoped>

</style>
