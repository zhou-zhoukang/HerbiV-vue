<script setup>
import {onMounted, reactive} from "vue";
import BaseService from "@/service/BaseService";
import {Plus} from "@element-plus/icons-vue";

const state = reactive({
  data: [],
  page: 1,
  size: 10,
  total: 0,
  searchType: '',
  searchContent: ''
});

const list = async () => {
  await BaseService.tcmList(state.searchType, state.searchContent, state.page, state.size)
    .then(res => {
      state.data = res.content;
      state.total = res.totalElements;
    }).catch(err => {
      console.log(err);
    })
}

onMounted(list);

/** 页码变动事件
 * @param page
 * */
const handleCurrentChange = (page) => {
  state.page = page;
  list();
}

/** 每页展示条数变动事件
 * @param size 每页展示条数变动
 * */
const handleSizeChange = (size) => {
  state.size = size;
  list();
};

const startSearch = (type, content) => {
  state.searchType = type;
  state.searchContent = content;
  list();
}

// https://blog.csdn.net/luozaiyong/article/details/130101302
defineExpose({
  startSearch
})

const emits = defineEmits(['listenSelectData'])

const handleSelectAdd = (rowNo, rowData) => {
  emits('listenSelectData', rowData);
}
</script>

<template>
  <div>
    <el-table
      :data="state.data"
      style="width: 100%"
    >
      <el-table-column fixed width="60">
        <template #default="scope">
          <el-button
            size="small"
            :icon="Plus"
            @click="handleSelectAdd(scope.$index, scope.row)"/>
        </template>
      </el-table-column>
      <el-table-column fixed prop="id" label="HVMID" width="100"/>
      <el-table-column fixed prop="cnName" label="中文名" width="150"/>
      <el-table-column prop="pinyinName" label="拼音名" width="210" :show-overflow-tooltip="true"/>
      <el-table-column prop="enName" label="英文名" width="250" :show-overflow-tooltip="true"/>
      <el-table-column prop="latinName" label="拉丁名" width="300" :show-overflow-tooltip="true"/>
      <el-table-column prop="properties" label="properties" width="200" :show-overflow-tooltip="true"/>
      <el-table-column prop="function" label="功效" width="1000" :show-overflow-tooltip="true"/>
    </el-table>
  </div>
  <div style="margin: 10px">
    <el-pagination
      background
      layout="prev, pager, next ,total, sizes"
      :page-sizes="[10, 20, 30, 40]"
      :total="state.total"
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
    />
  </div>
</template>

<script>
export default {
  name: "TCMTableView"
}
</script>
