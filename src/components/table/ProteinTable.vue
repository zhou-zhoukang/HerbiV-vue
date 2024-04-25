<template>
  <div>
    <el-table :data="proteinData" style="width: 100%" @row-click="(row)=>getDetail(row.ensemblId)" max-height="300px">
      <el-table-column prop="ensemblId" label="ensemblId"/>
      <el-table-column prop="proteinName" label="proteinName"/>
      <el-table-column prop="geneName" label="geneName"/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ProteinTable"
}
</script>

<script setup>
import Jump from "@/router/jump";

const getDetail=(content)=>{
  console.log(content)
  Jump.jumpToDetail('proteins',content)
}

const props = defineProps({
  proteinData: {
    type: Array,
    required: true
  }
})
</script>