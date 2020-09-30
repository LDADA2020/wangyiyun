<template>
  <div class="toplist">
    <router-link to="/find?refresh=true">
      <i id="backIcon" class="el-icon-arrow-left"></i>
    </router-link>
    <p class="p1">{{ this.$route.query.name }}</p>
    <mt-spinner class="loading" v-if="flag" type="triple-bounce"></mt-spinner>
    <el-row
      v-for="item in songList"
      :key="item.id"
      class="newSongItem"
      @click.native="goToSongDetail(item.id)"
    >
      <el-col :span="6">
        <img :src="item.al.picUrl" alt="" lazy />
      </el-col>
      <el-col :span="18" class="newSongItem_text">
        <p class="p2">{{ item.name }}</p>
        <p class="p3">歌手：{{ item.ar[0].name }}</p>
        <p class="p3">专辑：{{ item.al.name }}</p>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import 《组件名称》 from '《组件路径》';

export default {
  // import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    // 这里存放数据
    return {
      tempList: [],
      songList: [],
      flag: true,
    };
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    async getToplistDetail(id) {
      await this.$http({
        method: "get",
        url: "/api/playlist/detail",
        params: {
          id: id,
        },
        loading: null,
      }).then((res) => {
        this.tempList = res.data.privileges;
      });

      for (let i = 0; i < this.tempList.length; i++) {
        var ids = this.tempList[i].id;
        this.getSongDetail(ids);
      }

      this.flag = false;
    },

    getSongDetail(ids) {
      this.$http({
        method: "get",
        url: "/api/song/detail",
        params: {
          ids: ids,
        },
      }).then((res) => {
        this.songList.push(res.data.songs[0]);
      });
    },

    hiddenHeader() {
      var header = document.getElementById("header");
      header.style.display = "none";
    },

    goToSongDetail(id) {
      this.$router.push(`/audio?id=${id}`);
    },
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {
    const oId = this.$route.query.id;
    this.getToplistDetail(oId);
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.hiddenHeader();
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
.toplist {
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
  display: inline-block;
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

.loading {
  text-align: center;
}

#backIcon {
  color: #000;
  font-size: 16px;
  font-weight: 700;
  padding: 0 10px 0 0;
}
</style>