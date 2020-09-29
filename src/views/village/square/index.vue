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
                <div>
                <div class="touxiang"  :src="(item.program.dj.avatarUrl)"></div>
                 <i class="descrip">{{item.program.dj.nickname}}</i>
                </div>
              </li>
            </ul>
            <ul class="right-waterfall" ref="right">
            <li class="item" v-for="(item, index) in rightItems"  :key="index" >
            <img src="http://p1.music.126.net/tekKPPajUliAoSp69trGDQ==/109951164943012853.jpg" alt="">
              <p>这里是描述或者评论</p>
              <div class="demo-type">
                <div>
                <el-avatar class="touxiang"  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                 <i class="descrip">这是用户名描述</i>
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
        data: [
        {
          height: 240,
          name:'欣赏还要由心情',
          p:'aishi1yi'
        },
        {
          height: 269,
            name:'欣赏还要由心情',
          p:'aishi1yi'
        },
        {
          height: 230,
            name:'欣赏还要由心情',
          p:'aishi1yi'
        },
        {
          height: 240,
            name:'欣赏还要由心情',
          p:'aishi1yi'
        },
        {
          height: 260,
            name:'欣赏还要由心情',
          p:'aishi1yi'
        },
        {
          height: 250,
            name:'欣赏还要由心情',
          p:'aishi1yi'
        }
      ],
      list:[],
      leftItems: [],
      rightItems: []

    }
  },
  props: {

  },
  created () {

  },
  mounted () {
      this.updateWaterfall()
      this.getlist()
  },
  methods: {
    updateWaterfall () {
      const leftHeight = this.$refs.left.clientHeight
      const rightHeight = this.$refs.right.clientHeight
      let item = this.data.shift()
      console.log(leftHeight)
      console.log(rightHeight)
      if (item == null) {
        return
      }
      if (leftHeight <= rightHeight) {
        this.leftItems.push(item)
      }
      else {
        this.rightItems.push(item)
      }
      this.$nextTick(function () {
        this.updateWaterfall()
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
.el-icon-arrow-right{
    font-size: 16px;
    height: 10px;
    font-weight: 700;
}
p{
    font-size: 12px;
    height: 20px;
    line-height: 20px;
     margin-left: 10px;
      color: #eeeeee;
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
  li img{
    width: 100%;
    height: 70%;
  }
  .descrip{
    position: absolute;
    left: 27%;
    bottom: 5%;
    font-size: 8px;
  }
.touxiang{
  size: 16px;
  position: absolute;
  bottom: 5px;
  left: 2%;
  height: 10%;
  width: 10%;
}
</style>
