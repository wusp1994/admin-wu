<template>
    <div class="roleManage">
        <el-table
                :data="tableData"
                border
                v-loading="loading"
                style="width: 100%">
            <el-table-column
                    prop="productName"
                    label="项目"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="oldVersion"
                    label="源版本"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="deltaVersion"
                    label="目标版本">
            </el-table-column>
            <el-table-column
                    prop="deltaAuditer"
                    label="提交人">
            </el-table-column>
            <el-table-column
                    prop="checker"
                    class="checker"
                    min-width="200px"
                    label="审核人">
            </el-table-column>
            <el-table-column
                    prop="deltaStatusShowStr"
                    label="状态">
            </el-table-column>
            <el-table-column
                    width="100px"
                    label="操作">
                <template slot-scope="scope">
                    <el-button
                            @click="handleToDetail(scope.$index, scope.row)"
                            type="primary"
                            size="small"
                    >
                        详情
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>
@import "index.scss";
</style>