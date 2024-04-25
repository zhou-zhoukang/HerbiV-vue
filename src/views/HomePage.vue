<template>
  <!--  搜索框-->
  <div style="margin: 20px auto; text-align: center; max-width: 1000px;">
    <el-select
      size="large"
      placeholder="选择"
      v-model="searchItem.type"
      style="width: 80px;margin-left: 10px"
      @change="clearResults"
    >
      <el-option
        v-for="option in searchOptions"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      />
    </el-select>

    <el-input
      v-model="searchItem.content"
      style="width: 65%; padding-left: 10px;"
      size="large"
      placeholder="在此处搜索"
    >
      <template #append>
        <el-button :icon="Search" @click="search"/>
      </template>
    </el-input>
  </div>

  <TCMTable :tcm-data="state.results" v-if="searchItem.type==='tcm'"/>
  <ChemicalsTableView v-if="searchItem.type==='chemicals'"/>
  <ProteinTable :protein-data="state.results" v-if="searchItem.type==='proteins'"/>
</template>

<script>
const searchOptions = [
  {
    label: "中药",
    value: "tcm",
  },
  {
    label: "成分",
    value: "chemicals",
  },
  {
    label: "靶点",
    value: "proteins",
  }
]
export default {
    data() {
        return {
          searchOptions: searchOptions,
        }
    },
}
</script>

<script setup>
import {Search} from "@element-plus/icons-vue";
import {reactive, ref} from 'vue'
import ChemicalsService from "@/service/ChemicalsService";

import TCMTable from "@/components/table/TCMTable.vue";
import ProteinTable from "@/components/table/ProteinTable.vue";
import ChemicalsTableView from "@/components/table/ChemicalsTableView.vue";

// 当前搜索的类型和具体内容
const searchItem = ref({
  type: 'tcm',
  content: ''
})

// 检索结果
const state = reactive({
  results: [],
})

// 切换检索类别时清空结果
const clearResults=()=>{
  state.results = []
}

// 发送检索请求
const search = async () => {
  console.log(searchItem.value)
  if (searchItem.value.type === 'tcm') {
    console.log('调用 tcm 接口');
  } else if (searchItem.value.type === 'chemicals') {
    console.log('调用 chemicals 接口');
    await ChemicalsService.getAll(1, 10).then(res => {
      console.log(res)
      state.results = res.content;
    });
  } else {
    console.log('调用 proteins 接口');
  }
}
</script>
