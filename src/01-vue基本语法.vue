<template>
  <div id = "app">
    <p>
      数据驱动视图{{ age }}
    </p>
    <p>
      视图驱动数据：
      用户名：<input type="text" v-model="username"> {{ username }}
    </p>
    <button @click="onLogin">登录</button>
    <hr>

    <!--设置点击事件为取反，则每次点击会使状态取反-->
    <button @click="isClick=!isClick" :class="{active:isClick}">
      点击切换样式
    </button>

    <h1>引入组件</h1>

    <BuyCar></BuyCar>

  </div>
</template>

<!--template节点有且只能有一个，是根节点-->

<script>
//导入组件
import BuyCar from "./components/BuyCar";


export default{

  components:{
    BuyCar
    /**  BuyCar:BuyCar
    可以简写为上面的BuyCar因为组件名和文件名一致*/
  },

  data(){
    return{
      //年龄
      age:10,
      username:"admin",
      isClick:false
    }
  },
  methods:{
    //登陆事件，打印用户名
    onLogin(){
      console.log(this.username);
    },
  }
}
</script>

<!--样式控制，加scoped代表控制部分，不加代表控制全局-->

<style scoped>
.active{
  background-color: blue;
  color: white;
}
</style>


