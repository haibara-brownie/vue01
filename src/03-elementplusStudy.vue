<template>
    <div>
        elementplus
        <hr>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>

        <hr>
        图标按钮：
        <el-button type="primary" :icon="Edit">
            <el-icon class="el-icon"><Edit /></el-icon>
        </el-button>
        <el-button type="primary" :icon="Share">
            <el-icon class="el-icon"><Share /></el-icon>
        </el-button>
        <el-button type="primary" >
            <el-icon class="el-icon"><Delete /></el-icon>
        </el-button>
        <el-button type="primary">
            <el-icon class="el-icon--left"><Search /></el-icon>Search
        </el-button>
        <el-button type="primary">
            Upload <el-icon class="el-icon--right"><Upload /></el-icon>
        </el-button>

        <hr>
        图标：

        <el-icon class="is-loading">
            <Loading />
        </el-icon>
        <el-icon color="#409EFC" class="no-inherit">
            <Share />
        </el-icon>

        <el-icon><Plus /></el-icon>

        <hr>


        输入框：
        <el-input v-model="input" style="width: 240px" placeholder="请输入" />

        <hr>

        复选框：
        <el-checkbox v-model="checked01" label="复选框1" size="large" />
        <el-checkbox v-model="checked02" label="复选框2" size="large" />
        

        <hr>
        选择器:
        <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>

        <hr>
        表格：
        <el-table :data="tableData" stripe style="width: 100%;">
            <!--带stripe属性会使表格变为斑马表格，可以更好的分辨信息-->
        <el-table-column prop="data" label="日期" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="address" label="地址" />
        </el-table>

    </div>
</template>

<script>
    import { Delete, Edit, Search, Share, Upload, Loading, Plus } from '@element-plus/icons-vue'
    // import {ref} from 'vue'
    // const checked01 = ref(true)
    // const checked02 = ref(false)
    export default {
        data(){
            return {
                input:"",
                checked01: true,
                checked02: false,
                options: [{
                    value: '选项1',
                    label: '黄金糕'
                },{
                    value: '选项2',
                    label: '双皮奶'
                },{
                    value: '选项3',
                    label: '蚵仔煎'
                },{
                    value: '选项4',
                    label: '龙须面'
                },{
                    value: '选项5',
                    label: '北京烤鸭'
                }],
                value:'',
                tableData:[{
                    data: '2016-05-02',
                    name: 'Tom',
                    address:'No.192, Singarpo',
                },{
                    data: '2016-05-06',
                    name: 'Tim',
                    address:'No.168, Carliforniya',
                },{
                    data: '2016-05-06',
                    name: 'Tam',
                    address:'No.1, NewYork',
                }]
            }
        },//使用data存数据
        components: {
            Delete, Edit, Search, Share, Upload, Loading, Plus
        }
    }
</script>

<style scoped>

</style>