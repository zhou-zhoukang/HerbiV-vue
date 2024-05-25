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
  await BaseService.formulaList(state.searchType, state.searchContent, state.page, state.size)
    .then(res => {
      state.data = res.content;
      state.total = res.totalElements;
    }).catch(err => {
      console.log(err);
    });
}

onMounted(list);

/** 页码变动事件
 * @param page
 * */
const handleCurrentChange = (page) => {
  state.page = page;
  list()
}

/** 每页展示条数变动事件
 * @param size 每页展示条数变动
 * */
const handleSizeChange = (size) => {
  state.size = size;
  list()
};

const startSearch = (type, content) => {
  state.searchType = type;
  state.searchContent = content;
  list();
}

defineExpose({startSearch})

const emits = defineEmits(['listenSelectData'])

const handleSelectAdd = (rowNo, rowData) => {
  emits('listenSelectData', rowData);
}
</script>

<template>
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
  <div>
    <el-table
        :data="state.data"
        stripe border fit
        style="width: 100%"
    >
      <el-table-column fixed width="65">
        <template #default="scope">
          <el-button
              size="small"
              :icon="Plus"
              @click="handleSelectAdd(scope.$index, scope.row)"/>
        </template>
      </el-table-column>
      <el-table-column fixed prop="id" label="ID" width="100"/>
      <el-table-column fixed prop="name" label="名称" width="200"/>
      <el-table-column prop="prescriptionComposition" label="药方" width="500"/>
      <el-table-column prop="treatmentSymptoms" label="症状" width="800"/>
      <el-table-column prop="sourceDocument" label="来源" width="500"/>
      <el-table-column prop="instructions" label="医嘱" width="500"/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "FormulaTableView"
}
</script>
