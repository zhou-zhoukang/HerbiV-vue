<script setup>
defineProps({
  tcmData: {
    type: Array,
    required: true
  }
});

</script>

<template>
  <div>
    <el-table
      :data="tcmData"
      style="width: 100%"
    >
      <el-table-column fixed prop="id" label="HVMID" width="100"/>
      <el-table-column fixed prop="cnName" label="中文名" width="150"/>
      <el-table-column prop="pinyinName" label="拼音名" width="210" :show-overflow-tooltip="true"/>
      <el-table-column prop="enName" label="英文名" width="250" :show-overflow-tooltip="true"/>
      <el-table-column prop="latinName" label="拉丁名" width="300" :show-overflow-tooltip="true"/>
      <el-table-column prop="properties" label="properties" width="200" :show-overflow-tooltip="true"/>
      <el-table-column prop="function" label="功效" width="1000" :show-overflow-tooltip="true"/>
    </el-table>
  </div>
</template>

