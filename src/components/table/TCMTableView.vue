<script setup>
import {onMounted, reactive} from "vue";
import TCMService from "@/service/TCMService";
import TCMTable from "@/components/table/TCMTable.vue";

const state = reactive({
  data: [],
  page: 1,
  size: 10,
  total: 0,
  searchType: '',
  searchContent: ''
});

const getAll = async () => {
  await TCMService.getAll(state.page, state.size).then(res => {
    state.data = res.content;
    state.total = res.totalElements;
  }).catch(err => {
    console.log(err);
  });
}

const getAllByIdLike = async (id) => {
  // 这里不用修改 state 中的 page 和 size，因为后端若没查到数据会自动返回最后一页
  await TCMService.getAllByIdLike(id, state.page, state.size).then(res => {
    state.data = res.content;
    state.total = res.totalElements;
  }).catch(err => {
    console.log(err);
  })
}

onMounted(getAll);

// 搜索模式和全局模式不同的分页逻辑
const changePageInfo = () => {
  if (state.searchType === "id") {
    getAllByIdLike(state.searchContent);
  } else if (state.searchType === "cnName") {
    console.log("TODO");
  } else if (state.searchType === "enName") {
    console.log("TODO");
  } else {
    getAll()
  }
}

/** 页码变动事件
 * @param page
 * */
const handleCurrentChange = (page) => {
  state.page = page;
  changePageInfo();
}

/** 每页展示条数变动事件
 * @param size 每页展示条数变动
 * */
const handleSizeChange = (size) => {
  state.size = size;
  changePageInfo();
};

const startSearch = (type, content) => {
  state.searchType = type;
  state.searchContent = content;
  if (type === "id") {
    getAllByIdLike(content);
  } else if (type === "cnName") {
    console.log("按照中文名搜索");
  } else if (type === "enName") {
    console.log("按照英文名搜索");
  }
}

// https://blog.csdn.net/luozaiyong/article/details/130101302
defineExpose({
  startSearch
})
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
