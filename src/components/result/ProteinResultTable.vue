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
    <el-table
      :data="proteinData"
      max-height="300px"
    >
      <el-table-column fixed prop="Ensembl_ID" label="Ensembl ID" width="200"/>
      <el-table-column prop="protein_name" label="靶点名称" width="1000"/>
      <el-table-column prop="gene_name" label="基因名称" width="1000"/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ProteinResultTable"
}
</script>
