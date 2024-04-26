<script setup>
defineProps({
  formulaData: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div>
    <el-table :data="formulaData"
              stripe border fit style="width: 100%"
              max-height="1000"
              highlight-current-row
    >
      <el-table-column fixed prop="id" label="ID" width="100"/>
      <el-table-column fixed prop="name" label="名称" width="200"/>
      <el-table-column prop="prescriptionComposition" label="药方" width="500"/>
      <el-table-column prop="treatmentSymptoms" label="症状" width="800"/>
      <el-table-column prop="sourceDocument" label="来源" width="500"/>
      <el-table-column prop="instructions" label="医嘱" width="500"/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "FormulaTable"
}
</script>
