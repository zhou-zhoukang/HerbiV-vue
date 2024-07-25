<script setup>
import {Minus} from "@element-plus/icons-vue";

defineProps({
  tcmData: {
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
    <h2>Tcm</h2>
    <el-table
        stripe border fit
        :data="tcmData"
        style="width: 100%;"
        height="300"
    >
      <el-table-column fixed width="65">
        <template #default="scope">
          <el-button
            size="small"
            :icon="Minus"
            @click="handleSelectMinus(scope.$index, scope.row)"/>
        </template>
      </el-table-column>
      <el-table-column fixed prop="id" label="HVMID" width="100"/>
      <el-table-column fixed prop="cnName" label="中文名" width="150"/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TCMSelectTable"
}
</script>
