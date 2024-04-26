<script setup>
import {Search} from "@element-plus/icons-vue";

import TCMTableView from "@/components/table/TCMTableView.vue";
import ChemicalTableView from "@/components/table/ChemicalTableView.vue";
import ProteinTableView from "@/components/table/ProteinTableView.vue";


</script>

<template>
  <!--  搜索框-->
  <div style="margin: 20px auto; text-align: center; max-width: 1000px;">
    <el-select
      size="large"
      placeholder="选择"
      @change="searchItem.type2 = 'id'"
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
      placeholder="支持模糊查询"
    >
      <template #append>
        <el-button :icon="Search" @click="search"/>
      </template>
    </el-input>
  </div>

  <TCMTableView ref="TCMTable" v-if="searchItem.type === 'tcm'"/>
  <ChemicalTableView v-if="searchItem.type==='chemicals'"/>
  <ProteinTableView v-if="searchItem.type==='proteins'"/>
</template>

<script>
import {ref} from 'vue'

// 当前搜索的类型和具体内容
const searchItem = ref({
  type: 'tcm',
  type2: 'id',
  content: ''
})

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
  setup(){
    return {
      searchItem
    }
  },
  data() {
      return {
        searchOptions: searchOptions,
      }
  },
  methods: {
    search() {
      this.$refs.TCMTable.startSearch(searchItem.value.type2, searchItem.value.content)
    }
  }
}
</script>


