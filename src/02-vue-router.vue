<template>
    <div>
        vue-router Study
        <hr>
        <router-link to="/about"> 关于</router-link>
        <router-link to="/"> 主页</router-link>
        <router-link to="/help"> 帮助</router-link>

        <router-view></router-view>
        <!--使用router-view可以使router-link中链接的内容显示在下方的容器中-->
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>