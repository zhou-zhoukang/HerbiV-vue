<script setup>
import {Search} from "@element-plus/icons-vue";
import {ref} from 'vue'

import TCMTableView from "@/components/table/TCMTableView.vue";
import ChemicalsTableView from "@/components/table/ChemicalsTableView.vue";
import ProteinTableView from "@/components/table/ProteinTableView.vue";

// 当前搜索的类型和具体内容
const searchItem = ref({
  type: 'tcm',
  type2: 'id',
  content: ''
})

// 发送检索请求
const search = async () => {
  console.log(searchItem.value)
}
</script>

<template>
  <!--  搜索框-->
  <div style="margin: 20px auto; text-align: center; max-width: 1000px;">
    <el-select
      size="large"
      placeholder="选择"
      v-model="searchItem.type"
      style="width: 80px; margin-left: 10px"
    >
      <el-option
        v-for="option in searchOptions"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      />
    </el-select>

    <el-select
      size="large"
      placeholder="选择"
      v-model="searchItem.type2"
      style="width: 100px; margin-left: 10px"
    >
      <el-option
        v-for="option in searchOptions.find(item => item.value === searchItem.type).searchOptions"
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

  <TCMTableView v-if="searchItem.type==='tcm'"/>
  <ChemicalsTableView v-if="searchItem.type==='chemicals'"/>
  <ProteinTableView v-if="searchItem.type==='proteins'"/>
</template>

<script>
const searchOptions = [
  {
    label: "中药",
    value: "tcm",
    searchOptions: [
      {
        label: "ID",
        value: "id"
      },
      {
        label: "中文名",
        value: "cnName"
      },
      {
        label: "英文名",
        value: "enName"
      }
    ]
  },
  {
    label: "成分",
    value: "chemicals",
    searchOptions: [
      {
        label: "ID",
        value: "id"
      },
      {
        label: "名称",
        value: "name"
      }
    ]
  },
  {
    label: "靶点",
    value: "proteins",
    searchOptions: [
      {
        label: "ID",
        value: "id"
      }
    ]
  }
]

export default {
    data() {
        return {
          searchOptions: searchOptions,
        }
    }
}
</script>


