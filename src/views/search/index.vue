<template>
  <div>
    <div class="container">
        <i class="el-icon-back"></i>
        <input type="text"  v-model='val' v-on:input="getList"  placeholder="王铮亮">
        <ul class="search">
          <li class="ttt" @click="getid(item.id)" v-for="(item,index) in list" :key="item.id" :value="index">{{item.name}}</li>
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
          <span v-for="(item,index) in list1" :key="index">{{index+1}} {{item.searchWord}}</span>
        </div>
        <div class="more">
          <span @click='showmore'>展开更多热搜
            <i class="el-icon-arrow-down"></i>
            <p v-show="flag" >
            <span v-for="(item,index) in list1" :key="index">{{index+1}} {{item.searchWord}}</span>
            </p>
          </span>
        </div>
        <img src="../../assets/123.jpg" alt="">
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
      flag:false,
      list:[],
      list1:[],
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
  mounted(){
        this.getList1()
        // this.gethotlist()
  },
  methods:{
    getid(id){
      this.$router.push({
        path:'/audio',
       query:{id:id}
      }

      )

    },


    showmore(){
     this.flag=!this.flag
     this.$http({
      method:'get',
      url:'api/search/hot/detail',
    }).then((res)=>{
 this.list1=[]
        const a =res.data.data;
         this.list1=a.splice(0,20)
    })
    },
    ///search/hot/detail
    getList1(){
    this.$http({
      method:'get',
      url:'api/search/hot/detail',
    }).then((res)=>{
      const a =res.data.data;
      this.list1=a.splice(0,10)
    }
    );
    },
    getList() {
      console.log(this.val)
      this.$http.get(`search?keywords= ${this.val}`).then((res)=>{
       this.list=res.data.result.songs
      //  console.log(res.data)
      })
    },
    //获取歌单的分类
    // gethotlist(){
    // this.$http({
    //   method:'get',
    //   url:'api/dj/catelist',
    // }).then((res)=>{
    // console.log(res)
    // }
    // );
    // }
  }
};
</script>
<style scoped>
.container{
  width:300px;
  min-height: 40px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
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
  /* li{
    border-radius: 10px;
    float: left;
    margin: 3px 0;
  }  */
.search{
  position: fixed;
  top:10% ;
  width: 80%;
  
  border: 1px solid #eeeeee;
  background-color:#ffffff;
}
.ttt{
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  border-bottom: 2px dashed #eeeeee;
}
.ttt:hover{
  color: #e63f3f;
  font-size: 16px;
}
</style>