<script setup>
import {Minus} from "@element-plus/icons-vue";

defineProps({
  proteinData: {
    type: Array,
    required: true
  }
})

const emits = defineEmits(['listenDeleteData'])
const handleSelectMinus = (rowNo, rowData) => {
  emits('listenDeleteData', rowNo);
}
</script>

<template>
  <div>
    <h2>Protein</h2>
    <el-table
        :data="proteinData"
        style="width: 100%"
        height="300"
    >
      <el-table-column fixed width="60">
        <template #default="scope">
          <el-button
              size="small"
              :icon="Minus"
              @click="handleSelectMinus(scope.$index, scope.row)"/>
        </template>
      </el-table-column>
      <el-table-column fixed prop="id" label="ENSP" width="160"/>
      <el-table-column fixed prop="proteinName" label="靶点名" width="150" show-overflow-tooltip/>
      <el-table-column fixed prop="geneName" label="基因名" width="150" show-overflow-tooltip/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "ProteinSelectTable"
}
</script>
