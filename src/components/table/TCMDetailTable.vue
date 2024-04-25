<script setup>
const props = defineProps({
  tcmData: {
    type: Array,
    required: true
  }
})

</script>

<script>

export default {
  name: "TCMs"
}
</script>

<template>
  <div>
    <el-table :data="tcmData" style="width: 100%" max-height="300px">
      <el-table-column prop="HVMID" label="HVMID"/>
      <el-table-column prop="cn_name" label="CN Name"/>
      <el-table-column prop="pinyin_name" label="拼音名"/>
      <el-table-column prop="en_name" label="英文名"/>
      <el-table-column prop="latin_name" label="原植物拉丁名"/>
      <el-table-column prop="Properties" label="properties"/>
      <el-table-column prop="Importance Score" label="Score"/>
    </el-table>
  </div>
</template>

<style scoped>

</style>