<template>
  <div class='wall'>
     <div class="zuo">
        <h4>云村热评墙<i class="el-icon-arrow-right"></i></h4>
        <p>象龟1706，今日热墙已更新，来围观吧！</p>
        <span class="dater">Sep. <br>28</span>
     </div>
  <div class="waterfall-wrapper">
            <ul class="left-waterfall" ref="left">
            <li class="item" v-for="(item, index) in list" :key="index" >
              <img :src="(item.picUrl)" alt="">
              <p>{{item.name}}</p>
               <div class="demo-type">
                  <div>
                    <el-avatar  class="touxiang" :src="(item.program.dj.avatarUrl)"></el-avatar>
                    <i class="descrip">{{item.program.dj.nickname}}</i>
                  </div>
              </div>
              </li>
            </ul>
            <ul class="right-waterfall" ref="left">
            <li class="item" v-for="(item, index) in list1[0]" :key="index" >
              <img :src="(item.picUrl)" alt="">
              <p>{{item.copywriter}}</p>
               <div class="demo-type">
                  <div>
                    <el-avatar  class="touxiang" :src="(item.picUrl)"></el-avatar>
                    <i class="descrip">{{item.name}}</i>
                  </div>
              </div>
              </li>
            </ul>
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        data:[],
        list:[],
        list1:[],
    }
  },
  props: {

  },
  created () {

  },
  mounted () {
      // this.updateWaterfall()
      this.getlist()
      this.getlist2()
      this.getargunments()
  },
  methods: {
    //获取热评的评论
    getargunments(){
      this.$http({
        method:'get',
        url:'/api/comment/hotwall/list'

      }).then((res)=>{
        console.log(res)
      })
    },
    
// 获取一下歌手歌单
getlist() {
      this.$http({
        method: "get",
        url: "/api/personalized/djprogram",
        //personalized/djprogram这是电台接口，由图由名字
        params: {
          type: 1,
        },
      }).then((res) => {
        console.log(res.data.result)
       this.list=res.data.result;
       console.log(this.list)
       
      });
   },
   getlist2(){
     this.$http({
       method:'get',
       url:"/api/personalized/privatecontent/list"
     }).then((res)=>{
       const a =res.data.result
      const b= a.slice(0,5)
     this.list1.push(b)
     console.log(this.list1[0])
     })
   }
  },
  components: {

  },
}
</script>

<style scoped >
.zuo{
    border-radius: 10px;
    height: 80px;
    background-color:#477faca2 ;
    margin-top: 10px;
    position: relative;
}
h4{
    height: 40px;
    line-height: 40px;
    font-size: 16px;
    margin-left: 10px;
    color: #ffffff;
    font-weight: 700;
}

p{
  width: 100%;
    font-size: 12px;
    height: 40px;
    line-height:40px;
     margin-left: 10px;
      color: #eeeeee;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

}
.dater{
    position: absolute;
    right: 10px;
    top: 0;
    width: 50px;
    font-size: 25px;
    font-weight: 700;
      color: #ffffff;
}
 ul {
    width: 48%
  }
 
  ul.left-waterfall {
    float: left;
  }
 ul.left-waterfall li{
   height: 260px;
   position: relative;
 }
  ul.right-waterfall {
    float: right;
  }
   ul.right-waterfall li{
        height: 270px;
        position: relative;
   }
  li{
    position: relative;
    border: 1px solid #eeeeee;
  }
 li p{
font-size: 12px;
color:black ;
 }
  li.item {
    width: 100%;
    background-color: #ffffff;
  border-radius: 10px;
  margin: 10px 0;
  }
  .demo-type{
    width: 50px;
    height: 50px;
  }
  li img{
    width: 100%;
    height: 70%;
    border-radius: 5%;
  }
  .descrip{
    position: absolute;
    width: 50%;
    left: 18%;
    bottom: 5%;
    font-size: 6px;
    color: rgb(182, 181, 181);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
  }
  .ater{
    width: 100px;
    height: 100px;
  }
.touxiang,.touxiang img{
  size: 16px;
  position: absolute;
  bottom:3%;
  left: 2%;
  width: 15%;
  height: 10%;
 
}
</style>
