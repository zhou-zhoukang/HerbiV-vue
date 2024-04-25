<template>
  <div>
    <el-table :data="tcmData" style="width: 100%" @rowClick="(row)=>getDetail(row.hvmid)" max-height="300px">
      <el-table-column prop="hvmid" label="HVMID"/>
      <el-table-column prop="cnName" label="中文名"/>
      <el-table-column prop="enName" label="英文名"/>
      <el-table-column prop="pinyinName" label="拼音"/>
      <el-table-column prop="latinName" label="拉丁文名"/>
    </el-table>
  </div>

</template>

<script>
export default {
  name: "ResultTable"
}
</script>

<script setup>
import Jump from "@/router/jump";

const props = defineProps({
  tcmData: {
    type: Array,
    required: true
  }
})

const getDetail=(content)=>{
  console.log(content)
  Jump.jumpToDetail('tcm',content)
}
</script>

<style scoped>

</style>