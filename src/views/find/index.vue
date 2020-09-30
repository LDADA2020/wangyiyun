<template>
  <div class="find">
    <mt-spinner class="loading" v-if="flag" type="triple-bounce"></mt-spinner>
    <mt-swipe class="swipe" :auto="4000">
      <mt-swipe-item v-for="item in banners" :key="item.bannerId">
        <img :src="item.pic" alt="" lazy />
      </mt-swipe-item>
    </mt-swipe>

    <p class="p1">排行榜</p>
    <el-row>
      <el-col :span="8" v-for="item in toplist" :key="item.id">
        <el-card :body-style="{ padding: '0px' }">
          <img
            :src="item.coverImgUrl"
            class="image"
            @click="goToTopDetail(item.id, item.name)"
            lazy
          />
        </el-card>
      </el-col>
    </el-row>

    <p class="p1">每日推荐</p>
    <el-row
      v-for="item in newSongList"
      :key="item.id"
      class="newSongItem"
      @click.native="goToSongDetail(item.id)"
    >
      <el-col :span="6">
        <img :src="item.picUrl" alt="" lazy />
      </el-col>
      <el-col :span="18" class="newSongItem_text">
        <p class="p2">{{ item.name }}</p>
        <p class="p3">歌手：{{ item.song.artists[0].name }}</p>
        <p class="p3">专辑：{{ item.song.album.name }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';
import $ from "jquery";

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      banners: [],
      toplist: [],
      newSongList: [],
      flag: true,
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
        for (let i = 0; i < 6; i++) {
          this.toplist.push(res.data.list[i]);
        }
      });
    },

    async getNewSong() {
      await this.$http({
        method: "get",
        url: "/api/personalized/newsong",
      }).then((res) => {
        for (let i = 0; i < res.data.result.length; i++) {
          this.newSongList.push(res.data.result[i]);
        }
      });
      this.flag = false;
    },

    goToTopDetail(id, name) {
      this.$router.push({
        path: "/toplistsdetail",
        query: { id: id, name: name },
      });
    },

    showHeader() {
      var header = document.getElementById("header");
      header.style.display = "block";
    },

    //在进入页面时刷新一次页面，解决请求过多导致响应缓慢的问题
    RefreshOnce() {
      if (this.$route.query.refresh) {
        $(document).ready(function () {
          if (location.href.indexOf("#reloaded") == -1) {
            location.href = location.href + "#reloaded";
            location.reload();
          }
        });
      }
    },

    goToSongDetail(id) {
      this.$router.push(`/audio?id=${id}`);
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getBanner();
    this.getToplist();
    this.getNewSong();
    this.RefreshOnce();
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.showHeader();
  },
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
  padding: 8px 0 0 0;

  img {
    width: 100%;
  }
}

.swipe {
  height: 35.775127vw;
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

.loading {
  text-align: center;
}
</style>
