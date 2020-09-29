<template>
<div id="content">
  <div class="tit">
     <i class="el-icon-back"></i>
      <h2>手机号登录</h2>
  </div>
  <p>未注册手机号登录后将自动创建账号</p>
  <div class="phone">
      <span>+86</span>
       <i class="el-icon-caret-bottom"></i>
      <input type="text" placeholder="请输入手机号">
  </div>
  <div class="btn" >下一步</div>
   </div>
</template>

<script>
// import axios from "axios"
    export default {
        components: {

        },
        data () {
            return {
                tit1:'',
              
     flag: true,
      message: false,
            };
        },
        computed: {

        },
        watch: {

        },
        methods: {

// tit2(){
//     console.log(this.tit1)
//      axios(/api/register/cellphone).then((res)=>{console.log(res)}) 
// }
        },
        created() {

},
        mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
    }
</script>

<style scoped>
#content{
    padding: 0 30px;
}
.tit{
    height: 100px;
    display: flex;
}
.el-icon-back{
    font-size: 30px;
    margin-right: 20px;
    line-height: 100px;
}
h2{
    font-size: 20px;
    font-weight: 600;
    line-height: 100px;
    
}
#content p{
    font-size: 16px;
    color:#d8d8d8 ;
    margin-bottom: 50px;
}
.phone{
    display: flex;
     border-bottom: 1px solid #ececec;
}
.phone span{
    font-size: 18px;
}

input{
  border: none;
  font-size: 18px;
  color: #cccccc;
  margin-bottom: 8px;
  width: 100%;

}
.btn{
   width:300px;
   height: 45px;
   background:#fe3a3b;
   border-radius: 22px;
   color: #fff;
   font-size: 20px;
   text-align: center;
   line-height: 45px;
   margin-top: 50px;
}

</style>