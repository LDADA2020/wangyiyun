<template>
  <div class="mine-main">
    <el-row id="mine-message">
      <el-col class="message-left" :span="12"></el-col>
      <el-col class="message-right" :span="12">
        <p>象龟1706</p>
        <p>
          <span>开通VIP</span>
          <span>Lv.7</span>
        </p>
        <i class="el-icon-arrow-right"></i>
      </el-col>
    </el-row>
    <el-row class="list">
      <el-col :span="6" class="list-inner">
        <i id="tubiao" class="el-icon-upload"></i>
        <p>本地音乐</p>
      </el-col>
      <el-col :span="6" class="list-inner">
        <i id="tubiao" class="el-icon-light-rain"></i>
        <p>云盘</p>
      </el-col>
      <el-col :span="6" class="list-inner">
        <i id="tubiao" class="el-icon-success"></i>
        <p>已购</p>
      </el-col>
      <el-col :span="6" class="list-inner">
        <i id="tubiao" class="el-icon-info"></i>
        <p>最近播放</p>
      </el-col>
      <el-col :span="6" class="list-inner">
        <i id="tubiao" class="el-icon-user-solid"></i>
        <p>我的好友</p>
      </el-col>
      <el-col :span="6" class="list-inner">
        <i id="tubiao" class="el-icon-star-on"></i>
        <p>收藏和赞</p>
      </el-col>
      <el-col :span="6" class="list-inner">
        <i id="tubiao" class="el-icon-s-finance"></i>
        <p>我的电台</p>
      </el-col>
      <el-col :span="6" class="list-inner">
        <i id="tubiao8" class="el-icon-circle-plus"></i>
        <p>音乐应用</p>
      </el-col>
    </el-row>
    <el-row class="like">
      <el-col class="like-left" :span="4">
        <img
          src="https://p2.music.126.net/RrIyxp5PZccPsHPbuIz2Yg==/109951165167277809.jpg?param=40y40"
          alt
        />
      </el-col>
      <el-col class="like-main" :span="12">
        <p>我喜欢的音乐</p>
        <p>199首</p>
      </el-col>
      <el-col class="like-right" :span="8">
        <p>
          <i class="el-icon-star-off"></i>
          <span>心动模式</span>
        </p>
      </el-col>
    </el-row>
    <el-row class="create">
      <el-col :span="12">
        <p>创建歌单</p>
      </el-col>
      <el-col :span="12">
        <p>收藏歌单</p>
      </el-col>
    </el-row>
    <el-row class="main">
      <el-col :span="24" class="main-header">
        <span>创建歌单(4个)</span>
        <span>
          <i class="el-icon-more-outline"></i>
        </span>
        <span>
          <i class="el-icon-plus"></i>
        </span>
      </el-col>
      <el-col class="song-list" :span="24">
        <el-row class="song">
          <el-col class="song-left" :span="4">
            <img
              src="https://p2.music.126.net/RrIyxp5PZccPsHPbuIz2Yg==/109951165167277809.jpg?param=40y40"
              alt
            />
          </el-col>
          <el-col class="song-main" :span="12">
            <p>象龟1706的歌单</p>
            <p>19首</p>
          </el-col>
          <el-col class="song-right" :span="8">
            <i class="el-icon-more-outline"></i>
          </el-col>
        </el-row>
        <el-row class="song">
          <el-col class="song-left" :span="4">
            <img
              src="https://p2.music.126.net/RrIyxp5PZccPsHPbuIz2Yg==/109951165167277809.jpg?param=40y40"
              alt
            />
          </el-col>
          <el-col class="song-main" :span="12">
            <p>象龟1706的歌单</p>
            <p>19首</p>
          </el-col>
          <el-col class="song-right" :span="8">
            <i class="el-icon-more-outline"></i>
          </el-col>
        </el-row>
        <el-row class="song">
          <el-col class="song-left" :span="4">
            <img
              src="https://p2.music.126.net/RrIyxp5PZccPsHPbuIz2Yg==/109951165167277809.jpg?param=40y40"
              alt
            />
          </el-col>
          <el-col class="song-main" :span="12">
            <p>象龟1706的歌单</p>
            <p>19首</p>
          </el-col>
          <el-col class="song-right" :span="8">
            <i class="el-icon-more-outline"></i>
          </el-col>
        </el-row>
        <el-row class="song">
          <el-col class="song-left" :span="4">
            <img
              src="https://p2.music.126.net/RrIyxp5PZccPsHPbuIz2Yg==/109951165167277809.jpg?param=40y40"
              alt
            />
          </el-col>
          <el-col class="song-main" :span="12">
            <p>象龟1706的歌单</p>
            <p>19首</p>
          </el-col>
          <el-col class="song-right" :span="8">
            <i class="el-icon-more-outline"></i>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
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
  margin: 0 auto;
  margin-top: 10px;
  background-color: #f7f7f7;
  padding: 0 20px;
}
#mine-message {
  width: 100%;
  padding: 10px 10px;
}
.message-left {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  margin-left: 5px;
  background: url(https://i01piccdn.sogoucdn.com/46e14360082b507d) no-repeat;
  background-size: 80px 80px;
}
.message-right {
  width: calc(100% - 100px);
  position: relative;
  margin-left: 10px;
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
.list {
  height: 160px;
  background-color: #ffffff;
  margin-top: 10px;
  border-radius: 10px;
  .list-inner {
    height: 80px;
    text-align: center;
    #tubiao {
      font-size: 36px;
      margin-top: 20px;
      color: red;
    }
    #tubiao8 {
      font-size: 36px;
      margin-top: 20px;
      color: #a8a8a8;
    }
    p {
      height: 20px;
      line-height: 20px;
      margin-top: 5px;
      color: #5a5a5a;
    }
  }
}
.like {
  height: 80px;
  padding: 10px 0;
  background-color: #ffffff;
  margin-top: 20px;
  border-radius: 10px;
  padding: 10px 10px;
  .like-left {
    height: 100%;
    background-color: tomato;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .like-main {
    p:nth-child(1) {
      margin-left: 15px;
      margin-top: 5px;
      font-size: 16px;
    }
    p:nth-child(2) {
      margin-left: 15px;
      margin-top: 2px;
      color: #8d8d8d;
      font-size: 12px;
    }
  }
  .like-right {
    p {
      width: 92px;
      height: 30px;
      // background-color: tomato;
      border-radius: 15px;
      padding: 5px 10px;
      line-height: 25px;
      margin-top: 15px;
      margin-left: 10px;
      border: 1px solid #8d8d8d;
      i {
        height: 100%;
      }
      span {
        height: 100%;
      }
    }
  }
}
.create {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.main {
  margin-top: 10px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 10px;
  .main-header {
    span:nth-child(2) {
      float: right;
    }
    span:nth-child(3) {
      float: right;
      margin-right: 15px;
    }
  }
}
.song-list {
  // background-color: tomato;
  // height: 100px;
  margin-top: 10px;
}

.song {
  height: 80px;
  padding: 10px 0;
  // background-color: skyblue;
  border-radius: 10px;
  .song-left {
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
  }
  .song-main {
    p:nth-child(1) {
      margin-left: 15px;
      margin-top: 5px;
      font-size: 16px;
    }
    p:nth-child(2) {
      margin-left: 15px;
      margin-top: 2px;
      color: #8d8d8d;
      font-size: 12px;
    }
  }
  .song-right {
    position: relative;
    i {
      position: absolute;
      right: 0;
      height: 60px;
      line-height: 60px;
    }
  }
}
</style>