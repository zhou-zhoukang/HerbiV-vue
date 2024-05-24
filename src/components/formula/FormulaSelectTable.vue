<script setup>
import {Minus} from "@element-plus/icons-vue";

defineProps({
  formulaData: {
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
    <h2>Formula</h2>
    <el-table
        :data="formulaData"
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
      <el-table-column fixed prop="id" label="HVPID" width="100"/>
      <el-table-column fixed prop="name" label="名称" width="150"/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "FormulaSelectTable"
}
</script>
