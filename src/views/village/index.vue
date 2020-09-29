<template>
  <div id="outer">
     <div id="top">
      <router-link tag="p" to='/village/square' >广场</router-link>
      <router-link tag="p" to='/village/concer'>关注</router-link>
    </div>
<router-view></router-view>
  </div>
  
</template>

<script>
export default {

}
</script>

<style scope>
#outer{
  margin: 0 30px;
}
#top{
  height: 40px;
  padding:0 50px;

}
#top p{
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  float: left;
  margin-left: 40px;
  text-align: center;
}
 p.active{
   color: coral;
   font-size: 16px;
   border-bottom: 2px solid coral;
 }

</style>