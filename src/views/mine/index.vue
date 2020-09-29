<template>
  <el-container class="clearfix mine-main">
      <div id="mine-message" class="clearfix">
        <div class="message-left"></div>
        <div class="message-right">
          <p>象龟1706</p>
          <p>
            <span>开通VIP</span>
            <span>Lv.7</span>
          </p>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
.mine-main {
  width: 92vw;
  margin: 0 auto;
  //   background-color: tomato;
}
#mine-message {
    width: 100%;
}
.message-left {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  margin-left: 5px;
  float: left;
  background: url(https://i01piccdn.sogoucdn.com/46e14360082b507d) no-repeat;
  background-size: 80px 80px;
}
.message-right {
  height: 100%;
  width: calc(100% - 100px);
  position: relative;
  margin-left: 10px;
  float: left;
  p:nth-child(1) {
    font-size: 20px;
    font-weight: 700px;
    margin-top: 18px;
  }
  p:nth-child(2) {
    margin-top: 2px;
    span:nth-child(1) {
      border-radius: 10px;
      background-color: #bbbbbb;
      padding: 5px;
      color: #ffffff;
    }
    span:nth-child(2) {
      border-radius: 10px;
      background-color: #fcfcfc;
      margin-left: 10px;
      padding: 5px 10px;
    }
  }
  .el-icon-arrow-right {
    line-height: 82px;
    position: absolute;
    right: 10px;
    top: 0;
  }
}
</style>