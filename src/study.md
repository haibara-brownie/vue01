



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






