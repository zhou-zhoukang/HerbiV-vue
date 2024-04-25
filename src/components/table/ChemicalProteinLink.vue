<script setup>
const props = defineProps({
  tcmData: {
    type: Array,
    required: true
  }
})
</script>

<template>
<div>
    <el-table :data="tcmData" style="width: 100%" max-height="300px">
<el-table-column prop="HVCID" label="HVCID"/>
	<el-table-column prop="Ensembl_ID" label="Ensembl ID"/>
	<el-table-column prop="Combined_score" label="Combined Score"/>
    </el-table>
  </div>
</template>

<style scoped>

</style>