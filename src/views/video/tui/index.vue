<!--  -->
<template>
  <div>
    <video v-show="flag" autoplay="autoplay" src="" ref="videourl"></video>
    <div class="content" v-for="item in mv" :key="item.id">
      <img :src="item.cover" alt="" @click="getdetail(item.id)" />
      <div class="con">
        <p>{{ item.name }}</p>
        <img class="tu2" src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1601435146&di=8b93204e2f10cf9d48ff521311273b5c&src=http://img.redocn.com/sheji/20160327/fugubaozhibeijinggaodangCDguangpan_6058028.jpg" alt="" />
      </div>
      <div class="pin">
        <img class="tu3" :src="item.cover" alt="" />
        <span>{{item.artistName}}</span>
        <div class="biao">
          <i class="el-icon-chat-line-round"></i><i class="el-icon-more"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      flag:false,
      mv: [],
    };
  },
  computed: {},
  watch: {},
  methods: {
    getpic() {
      this.$http({
        method: "get",
        url: "/api/top/mv",
      }).then((res) => {
        console.log(res);
        this.mv = res.data.data;
      });
    },
    getdetail(id) {
      // alert(id);
      this.$http({
        method: "get",
        url: "/api/mv/url?id=" + id,
      }).then((res) => {
        console.log(res, 111);
        this.flag=true;
        this.$refs.videourl.src = res.data.data.url;
        window.scrollTo(0,0);
        
      });
      this.$http({
        method: "get",
        url: "/api/comment/mv?id="+id,
      }).then((res) => {
        console.log(res,333);
      });
    }
  },
  created() {
    this.getpic();
    // this.getdetail();
  },
  mounted() {},
};
</script>
<style scoped>
.content {
  margin-bottom: 20px;
  background: white;
}
video{width: 100%;
}
.content video {
  width: 100%;
}
.content img {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 5px;
}

.con {
  height: 40px;
  border-bottom: 1px #ccc solid;
}

.con p {
  display: inline-block;
  width: 90%;
  overflow: hidden;    
text-overflow:ellipsis;    
white-space: nowrap;
  float: left;
}

.con .tu2 {
  width: 30px;
   height:30px;
  border-radius: 50%;
  display: inline-block;
  float: right;
  margin-top: 5px;
}

.pin {
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-size: 12px;
}
.pin .tu3 {
  width: 30px;
   height:30px;
  border-radius: 50%;
  display: inline-block;
  margin-top: 5px;
}

.pin .biao {
  width: 50px;
  float: right;
}

.pin .el-icon-chat-line-round {
  font-size: 14px;
  margin-right: 20px;
}
.pin .el-icon-more {
  font-size: 14px;
}
</style>
