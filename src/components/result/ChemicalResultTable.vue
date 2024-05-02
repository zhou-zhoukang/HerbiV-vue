<script setup>
defineProps({
  chemData: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div>
    <el-table
      :data="chemData"
      max-height="300"
    >
      <el-table-column fixed prop="HVCID" label="HVCID" width="100"/>
      <el-table-column fixed prop="Name" label="名称" width="100"/>
      <el-table-column prop="Importance Score" label="Importance Score" width="200"/>
      <el-table-column prop="SMILES" label="SMILES" width="500"/>
      <el-table-column prop="CAS_id" label="CAS" width="110"/>
      <el-table-column prop="PubChem_id" label="PubChem" width="100"/>
      <el-table-column prop="DrugBank_id" label="DrugBank" width="100"/>
      <el-table-column prop="STITCH_id" label="STITCH" width="200"/>
      <el-table-column prop="HERB_id" label="HERB" width="200"/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ChemicalResultTable"
}
</script>
