<template>
  <div>
    <div class="container">
        <i class="el-icon-back"></i>
        <input type="text" v-model='val' v-on:input="getList" placeholder="王铮亮">
        <ul>
          <li v-for="(item,index) in list" :key="item.id" :value="index">{{item.name}}</li>
        </ul>
        <div class="tu">
          <img src="../../assets/tu.png" alt="" class="img1">
        </div>
        <div class="resou">
          <span>热搜榜</span>
          <span class="bo">
            <i class="el-icon-caret-right"></i>
            播放全部</span>
        </div>
        <div class="hot">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span>10</span>
        </div>
        <div class="more">
          <span>展开更多热搜
            <i class="el-icon-arrow-down"></i>
          </span>
        </div>
        <!-- <div class="listen">
          <ul>
            <li>
              <img src="../../assets/listen.png" alt="">
            </li>
             <li style="margin-left:10px">
              <img src="../../assets/listen.png" alt="">
            </li>
            <li>
              <img src="../../assets/listen.png" alt="">
            </li>
             <li style="margin-left:10px">
              <img src="../../assets/listen.png" alt="">
            </li>
          </ul>
        </div> -->
    </div>
  </div>
</template>
<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components:{},
  data(){
    //这里存放数据
    return{
      list:[],
      val:''
    };
  },
  //监听属性类似于data概念
  computed:{},
  //监控data中的数据变化
  watch:{},
  //方法集合
  created(){
  },
  methods:{
    getList(){
    this.$http({
      method:'get',
      url:'api/cloudsearch',
      params:{
        keywords:'this.value',
      },
    }).then((res)=>{
      // console.log(res.data.result.songs);
      this.list=res.data.result.songs;
    }
    );
    }
  }
};
</script>
<style scoped>
.container{
  width:300px;
  min-height: 40px;
  margin: 0 auto;
  overflow: hidden;
}
input{
  margin-left: 20px;
  width:266px;
  border:none;
  border-bottom:2px solid gray;
}
.tu{
  padding: 3px;
  border-radius: 10px;
  border: 1px solid gray;
  margin-top: 10px;
}
.img1{
  width: 100%;
  height: 100%;
}
.resou{
  padding:10px 0;
  border-bottom: 1px solid gray;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.bo{
  border: 1px solid gray;
  border-radius: 35px;
}
.hot{
  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  }
  .hot span{
    width:150px;
     flex-shrink: 0;
     padding: 2px 0;
      color:gray;
  }
  .more{
    height: 40px;
     text-align: center;
  }
  .more span{
    color:gray;
    line-height: 40px;
  }
  li{
    border-radius: 10px;
    float: left;
    margin: 3px 0;
  }
</style>