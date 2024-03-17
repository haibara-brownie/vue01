



# 组件使用

使用步骤：

1.定义组件

2.导入组件（es6  import导入）

```vue
<script>
//导入组件
import BuyCar from "./components/BuyCar";
````

3.注册组件

```vue

  components:{
    BuyCar
    /**  BuyCar:BuyCar
    可以简写为上面的BuyCar因为组件名和文件名一致*/
  },

````

4.使用
```vue

<h1>引入组件</h1>

    <BuyCar></BuyCar>

````



# vue路由使用

1.创建项目时勾选

2.手动安装
`npm i vue-router --save`





# elementplus 组件引入

按照官方方法引入，官方提供多个方法时建议尝试多种，部分引入方法可能无效




input 输入框需要使用data在script中接收输入的数据，否则会造成无法输入的情况

```vue
export default {
        data(){
            return {
                input:""
            }
        },//使用data存数据

````


导入方式建议参考element，elementplus会使用ts语法，造成不兼容




