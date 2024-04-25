<template>
<div>
  <el-table :data="tcmData" style="width: 100%" max-height="300px">
    <el-table-column prop="Ensembl_ID" label="Ensembl ID"/>
    <el-table-column prop="protein_name" label="Protein Name"/>
    <el-table-column prop="gene_name" label="Gene Name"/>
  </el-table>
</div>
</template>

<script setup>
const props = defineProps({
  tcmData: {
    type: Array,
    required: true
  }
})
</script>


<style scoped>

</style>