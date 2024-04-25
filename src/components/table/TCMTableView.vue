<script setup>
import {onMounted, reactive} from "vue";
import TCMService from "@/service/TCMService";
import TCMTable from "@/components/table/TCMTable.vue";

const state = reactive({
  data: [],
  page: 1,
  size: 10,
  total: 0,
});

const getAll = async () => {
  await TCMService.getAll(state.page, state.size).then(res => {
    state.data = res.content;
    state.total = res.totalElements;
  }).catch(err => {
    console.log(err);
  });
}

onMounted(getAll);

/** 页码变动事件
 * @param page
 * */
const handleCurrentChange = (page) => {
  state.page = page;
  getAll()
}

/** 每页展示条数变动事件
 * @param size 每页展示条数变动
 * */
const handleSizeChange = (size) => {
  state.size = size;
  getAll()
};
</script>

<template>
  <TCMTable :tcm-data="state.data"/>
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
