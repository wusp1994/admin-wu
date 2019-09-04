<template>
    <div class="menuManage">
        <el-button v-if="isMenuNode" @click="createInit">
            创建初始菜单
        </el-button>
        <div class="main">
            <div class="list card">
                <el-tree
                        :data="menuList"
                        node-key="id"
                        highlight-current
                        :default-expand-all="true"
                        :expand-on-click-node="false"
                        :current-node-key="1"
                        :check-on-click-node="true"
                        @node-click="handleNodeClick"
                        :props="defaultProps">
                </el-tree>
            </div>
        </div>


    </div>
</template>

<script>
    import { menuNodeAdd,menuNodeDelete,menuNodeEdit,menuNodeQuery,
        menuNodeDetailAdd,menuNodeDetailDelete,menuNodeDetailEdit,
        menuNodeDetailQuery } from './mockApi'
    import {getLocalStorage, removeStorage, setLocalStorage} from '@/libs/tools'

    export default {
        name: "index",//菜单管理
        data() {
            return {
                menuList: [ ],
            }
        },
        mounted() {

        },
        computed:{

        },
        methods: {

        }
    }
</script>

<style scoped lang="scss">
    @import "index";

</style>