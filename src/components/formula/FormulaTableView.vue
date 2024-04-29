<script setup>
import {onMounted, reactive} from "vue";
import FormulaTable from "@/components/formula/FormulaTable.vue";
import BaseService from "@/service/BaseService";

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

// https://blog.csdn.net/luozaiyong/article/details/130101302
defineExpose({
  startSearch
})

</script>

<template>
  <div>
    <FormulaTable :formula-data="state.data"/>
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
  </div>
</template>

<script>
export default {
  name: "FormulaTableView"
}
</script>
