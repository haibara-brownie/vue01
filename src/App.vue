<template>
  <div id = "app">
    <p>
      数据驱动视图{{ age }}
    </p>
    <p>
      视图驱动数据：
      用户名：<input type="text" v-model="username"> {{ username }}
    </p>
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
  }
}
</script>


