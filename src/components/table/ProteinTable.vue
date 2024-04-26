<script setup>
defineProps({
  proteinData: {
    type: Array,
    required: true
  }
})
</script>

<template>
<div>
  <el-table :data="proteinData" style="width: 100%">
    <el-table-column fixed prop="id" label="Ensembl ID" width="200"/>
    <el-table-column prop="proteinName" label="Protein Name" width="1000"/>
    <el-table-column prop="geneName" label="Gene Name"/>
  </el-table>
</div>
</template>
