<template>
<<<<<<< HEAD
  <div class="find">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in banners" :key="item.bannerId"
        ><img :src="item.pic" alt=""
      /></mt-swipe-item>
    </mt-swipe>

    <p class="p1">排行榜</p>
    <el-row>
      <el-col :span="8" v-for="item in toplist" :key="item.id">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="item.coverImgUrl" class="image" @click="goToTopDetail(item.id)" />
        </el-card>
      </el-col>
    </el-row>

    <p class="p1">每日推荐</p>
    <el-row v-for="item in newSongList" :key="item.id" class="newSongItem">
      <el-col :span="6">
        <img :src="item.picUrl" alt="" lazy />
      </el-col>
      <el-col :span="18" class="newSongItem_text">
        <p class="p2">{{ item.name }}</p>
        <p class="p3">歌手：{{ item.song.artists[0].name }}</p>
        <p class="p3">专辑：{{ item.song.album.name }}</p>
      </el-col>
    </el-row>
=======
  <div>
      发现
>>>>>>> origin/eight
  </div>
</template>

<script>
<<<<<<< HEAD
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      banners: [],
      toplist: [],
      newSongList: [],
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    getBanner() {
      this.$http({
        method: "get",
        url: "/api/banner",
        params: {
          type: 1,
        },
      }).then((res) => {
        console.log(res.data);
        for (let i = 0; i < 5; i++) {
          this.banners.push(res.data.banners[i]);
        }
      });
    },

    getToplist() {
      this.$http({
        method: "get",
        url: "/api/toplist",
      }).then((res) => {
        console.log(res.data);
        for (let i = 0; i < 6; i++) {
          this.toplist.push(res.data.list[i]);
        }
      });
    },

    getNewSong() {
      this.$http({
        method: "get",
        url: "/api/personalized/newsong",
      }).then((res) => {
        console.log(res.data);
        for (let i = 0; i < 10; i++) {
          this.newSongList.push(res.data.result[i]);
        }
      });
    },

    goToTopDetail(id) {
      alert(id);
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getBanner();
    this.getToplist();
    this.getNewSong();
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, // 生命周期 - 创建之前
  beforeMount() {}, // 生命周期 - 挂载之前
  beforeUpdate() {}, // 生命周期 - 更新之前
  updated() {}, // 生命周期 - 更新之后
  beforeDestroy() {}, // 生命周期 - 销毁之前
  destroyed() {}, // 生命周期 - 销毁完成
  activated() {}, // 如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
// @import url(); 引入公共css类
.find {
  width: 92%;
  margin: 0 auto;
  height: 35.775127vw;

  img {
    width: 100%;
  }
}

.p1 {
  font-weight: 700;
  color: #3c3c3c;
  font-size: 16px;
  margin: 26px 0 6px;
}

.newSongItem {
  margin: 20px 0;
}

.newSongItem_text {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 23vw;
}

.p2 {
  font-weight: 600;
  font-size: 16px;
  color: #3c3c3c;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.p3 {
  font-size: 12px;
  color: #999999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
=======
export default {

}
</script>

<style>

</style>
>>>>>>> origin/eight
