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
  </div>
</template>

<script>
export default{
  data(){
    return{
      //年龄
      age:10,
      username:"admin"
    }
  },
  methods:{
    onLogin(){
      console.log(this.username);
    }
  }
}
</script>


