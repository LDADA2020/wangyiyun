<template>
  <div class="audio-b-c" :style="{ backgroundImage: 'url(' + src2 + ')' }">
    <div class="heise"></div>
    <div id="audio-index" class="index">
      <div class="audioD1">
        <div class="audioD1-1">
          <i class="el-icon-back" @click="fanhui()"></i>
          <div class="audioD1-geming">
            <span>{{ geming111 }}</span
            ><br />
            <time
              ><a href="#">{{ geshou111 }}></a></time
            >
          </div>
        </div>
        <div class="audioD1-1"><i class="el-icon-more"></i></div>
      </div>
      <div class="audioD2">
        <div class="audioD2-img">
          <img class="tp" :src="src1" alt="" />
        </div>
      </div>
      <div class="shoucang">
        <i class="el-icon-star-off"></i>
        <i class="el-icon-download"></i>
        <i class="el-icon-message-solid"></i>
        <i class="el-icon-chat-line-square"></i>
        <i class="el-icon-more"></i>
      </div>
      <div class="progress">
        <span class="start"></span>
        <div class="progress-z">
          <div class="now"></div>
        </div>
        <span class="end"></span>
      </div>
      <div class="audioD3">
        <i class="el-icon-refresh"></i>
        <i class="el-icon-caret-left"></i>
        <i class="el-icon-video-play" :style="[style1]" @click="audioPlay"></i>
        <i
          class="el-icon-video-pause"
          :style="[style2]"
          @click="audioPlay1"
        ></i>
        <i class="el-icon-caret-right"></i>
        <i class="el-icon-finished"></i>
      </div>
      <audio :src="url" autoplay="autoplay" id="music"></audio>

      <!-- <audio
        autoplay="autoplay"
        src="http://m8.music.126.net/20200929154214/a40c1b5849c85ad4bc966b5240a20305/ymusic/0fd6/4f65/43ed/a8772889f38dfcb91c04da915b301617.mp3"
      ></audio> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    // 父辈向子辈传参
  },
  name: "index",
  data() {
    return {
      geming111: "",
      geshou111: "",
      url: "",
      src1: "",
      src2: "",
      style1: {
        display: "block",
        "font-size": "50px",
      },
      style2: {
        display: "none",
        "font-size": "50px",
      },
      // style3:{
      //    "background": "url(${src1})900px center";
      //    "height": "100vh";
      // }
    };
  },
  created() {
    // 实例被创建之后执行代码
    const id = this.$route.query.id;
    // console.log(id);
    this.getge(id);
    this.geshoude(id);
  },
  computed: {
    // 计算属性
  },
  components: {
    // 组件的引用
  },
  methods: {
    audioPlay() {
      var audioDom = document.getElementById("music");
      audioDom.play();
      this.style1["display"] = "none";
      this.style2["display"] = "block";
    },
    audioPlay1() {
      var audioDom = document.getElementById("music");
      audioDom.pause();
      this.style2["display"] = "none";
      this.style1["display"] = "block";
    },
    // 方法
    getge(id) {
      axios.get(`/api/song/url?id=${id}`).then((res) => {
        // console.log(id);
        // console.log(res);
        // console.log(res.data.data[0].url);
        this.url = res.data.data[0].url;
      });
    },
    geshoude(id) {
      axios.get(`/api/song/detail?ids=${id}`).then((res) => {
        console.log(res.data.songs[0].al.picUrl);
        this.geming111 = res.data.songs[0].name;
        this.geshou111 = res.data.songs[0].ar[0].name;
        //图片地址   res.data.songs[0].al.picUrl
        this.src1 = res.data.songs[0].al.picUrl;
        this.src2 = res.data.songs[0].al.picUrl;
      });
    },
    fanhui() {
      this.$router.go(-1);
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
<style lang="scss">
#header {
  display: none;
}
.heise {
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  opacity: 0.4;
  position: absolute;
}

.audio-b-c {
  // background: url(https://p2.music.126.net/OjItC1KtO-Jg_lBVqsihkQ==/109951165341263996.jpg)
  //   900px center;
  height: 100vh;
  // background-image: url(https://p1.music.126.net/yjVbsgfNeF2h7fIvnxuZDQ==/18894007811887644.jpg);
  background-size: 800px;
  background-origin: border-box;
  // filter: blur(8px);
  // z-index: -1;
  #audio-index {
    width: 90%;
    height: 85%;
    /* background-color: antiquewhite; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    #ic1 {
      color: black;
      width: 50px;
      height: 50px;
      font-size: 50px;
    }
  }
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

.audioD1-1 {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  time {
    display: block;
    font-size: 9px;
    a {
      color: #afafaf;
    }
  }
}
.audioD2 {
  display: flex;
  justify-content: center;
  .audioD2-img {
    // margin-top: 50px;
    width: 270px;
    height: 270px;
    border-radius: 50%;
    border: black 35px solid;
    overflow: hidden;
    @-webkit-keyframes rotation {
      from {
        -webkit-transform: rotate(0deg);
      }

      to {
        -webkit-transform: rotate(360deg);
      }
    }
    .tp {
      -webkit-transform: rotate(360deg);
      animation: rotation 18s linear infinite;
      -moz-animation: rotation 18s linear infinite;
      -webkit-animation: rotation 18s linear infinite;
      -o-animation: rotation 18s linear infinite;
    }
    .tpf.tp {
      -webkit-transform: rotate(360deg);
      animation: rotation 0s linear infinite;
      -moz-animation: rotation 0s linear infinite;
      -webkit-animation: rotation 0s linear infinite;
      -o-animation: rotation 0s linear infinite;
    }
  }
}

.audioD3 {
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  bottom: 30px;
  .el-icon-refresh {
    font-size: 30px;
  }
  .el-icon-caret-left {
    font-size: 30px;
  }
  // .el-icon-video-pause {
  //   font-size: 50px;
  //   display: block;
  // }
  // .el-icon-video-play {
  //   font-size: 50px;
  //   display: none;
  // }
  .el-icon-caret-right {
    font-size: 30px;
  }
  .el-icon-finished {
    font-size: 30px;
  }
}
.progress {
  .progress-z {
    width: 230px;
    height: 6px;
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
    border-radius: 3px;
    overflow: hidden;
    .now {
      background-color: black;
      width: 70%;
      height: 100%;
    }
  }
}
.shoucang {
  width: 70%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  .el-icon-star-off {
    font-size: 30px;
  }
  .el-icon-download {
    font-size: 30px;
  }
  .el-icon-message-solid {
    font-size: 30px;
  }
  .el-icon-chat-line-square {
    font-size: 30px;
  }
  .el-icon-more {
    font-size: 30px;
  }
}
</style>