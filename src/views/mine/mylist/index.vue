<template>
  <div>
    <el-row class="list-top">
      <el-row class="list-header">
        <el-col :span="20" class="header-left">歌单</el-col>
        <el-col :span="2" class="header-main">
          <i class="el-icon-lollipop"></i>
        </el-col>
        <el-col :span="2" class="header-right">
          <i class="el-icon-more-outline"></i>
        </el-col>
      </el-row>
      <el-row class="list-mid" :gutter="20">
        <el-col :span="8" class="mid-left">
          <img
            src="https://p2.music.126.net/RrIyxp5PZccPsHPbuIz2Yg==/109951165167277809.jpg?param=200y200"
            alt
          />
        </el-col>
        <el-col :span="16">
          <p>我喜欢的音乐</p>
          <p>
            <span>象龟1706</span>
            <i class="el-icon-arrow-right"></i>
          </p>
        </el-col>
      </el-row>
      <el-row class="list-bottom">
        <el-col :span="6" class="bottom-logo">
          <i class="el-icon-chat-line-round"></i>
          <p>评论</p>
        </el-col>
        <el-col :span="6" class="bottom-logo">
          <i class="el-icon-link"></i>
          <p>分享</p>
        </el-col>
        <el-col :span="6" class="bottom-logo">
          <i class="el-icon-upload"></i>
          <p>下载</p>
        </el-col>
        <el-col :span="6" class="bottom-logo">
          <i class="el-icon-s-grid"></i>
          <p>多选</p>
        </el-col>
      </el-row>
    </el-row>
    <el-row class="main-top">
      <el-col :span="24" class="bottom-top">
        <p>
          <i class="el-icon-s-finance"></i>
          <span class="top-two">含27首VIP专属歌曲</span>
          <span class="top-three">首开VIP仅5元</span>
          <i class="el-icon-arrow-right"></i>
        </p>
      </el-col>
    </el-row>
    <el-row class="main-bottom">
      <el-col :span="24" class="bottom-top">
        <p>
          <i class="el-icon-video-play"></i>
          <span>播放全部</span>
          <span>(共198首)</span>
        </p>
      </el-col>
      <el-col :span="24" class="bottom-main">
        <el-row class="main-list" v-for="(item,index) in list" :key="item.id" @click.native="play(item.id)">
          <el-col class="main-list-left" :span="3">
            <p>{{index+1}}</p>
          </el-col>
          <el-col class="main-list-main" :span="18">
            <p>{{item.name}}</p>
            <p>{{item.ar[0].name}}</p>
          </el-col>
          <el-col class="main-list-right" :span="3">
            <i class="el-icon-more-outline"></i>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <!-- <input type="text" value="测试" /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      id: "",
    };
  },
  methods: {
    getMusicList() {
      this.id = this.$route.query.id;
      this.$http.get(`/playlist/detail?id=${this.id}`).then((res) => {
        this.list = res.data.playlist.tracks;
        console.log(this.list);
      });
    },
    play(id){
      alert(id)
      this.$router.push({path:'/audio',query:{id:id}});
    }
    // search() {
    //   this.$http.get('/search?keywords= 海阔天空').then((res)=>{
    //     console.log(res)
    //   })
    // },
  },
  created() {
    this.getMusicList();
    // this.search()
  },
};
</script>

<style lang='scss' scoped>
.list-top {
  height: 260px;
  background-color: #42413d;
  color: white;
  padding: 10px;
}
.list-header {
  height: 30px;
  //   background-color: wheat;
  .header-left {
    text-indent: 10px;
    line-height: 30px;
  }
  .header-main {
    text-align: center;
    line-height: 30px;
  }
  .header-right {
    text-align: center;
    line-height: 30px;
  }
}
.list-mid {
  margin-top: 15px;
  p:nth-child(1) {
    font-weight: 600;
  }
  p:nth-child(2) {
    margin-top: 6px;
    font-size: 12px;
    color: #cccccc;
  }
}
.list-bottom {
  margin-top: 15px;
  .bottom-logo {
    text-align: center;
    i {
      font-size: 24px;
    }
    p {
      margin-top: 3px;
    }
  }
}
.main-top {
  height: 70px;
  background-color: #dadad8;
  border-radius: 20px;
  padding: 10px;
  margin-top: -20px;
  p {
    .top-two {
      display: inline-block;
      margin-left: 10px;
    }
    .top-three {
      display: inline-block;
      margin-left: 100px;
      margin-right: 5px;
    }
  }
}
.main-bottom {
  height: 200px;
  background-color: #ffffff;
  border-radius: 20px;
  margin-top: -30px;
  .bottom-top {
    height: 30px;
    border-radius: 20px;
    padding: 5px 15px;
  }
}
.bottom-main {
  .main-list {
    height: 50px;
    padding: 5px 10px;
    margin-top: 6px;
    .main-list-left {
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
    .main-list-main {
      height: 50px;
      p:nth-child(1) {
        height: 20px;
        margin-top: 6px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      p:nth-child(2) {
        height: 20px;
        font-size: 12px;
      }
    }
    .main-list-right {
      height: 50px;
      line-height: 50px;
      text-align: center;
    }
  }
}
</style>