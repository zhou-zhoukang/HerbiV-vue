<script setup>
defineProps({
  chemProteinData: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <el-table
      :data="chemProteinData"
      max-height="300px"
    >
      <el-table-column fixed prop="HVCID" label="HVCID" width="100"/>
      <el-table-column prop="Ensembl_ID" label="Ensembl ID" width="200"/>
      <el-table-column prop="Combined_score" label="Combined Score" width="200"/>
    </el-table>
  </div>
</template>
