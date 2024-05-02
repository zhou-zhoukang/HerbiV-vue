<script setup>
defineProps({
  tcmChemData: {
    type: Array,
    required: true
  }
});
</script>

<template>
  <div>
    <el-table
      :data="tcmChemData"
      style="width: 100%"
      max-height="300"
    >
      <el-table-column prop="HVMID" label="HVMID" width="200"/>
      <el-table-column prop="HVCID" label="HVCID" width="200"/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TCMChemicalLinkResultTable"
}
</script>

<style scoped>

</style>