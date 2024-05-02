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
      max-height="500"
    >
      <el-table-column fixed prop="HVMID" label="HVMID"     width="100"/>
      <el-table-column fixed prop="cn_name" label="中文名"   width="150"/>
      <el-table-column prop="pinyin_name" label="拼音名"     width="210" :show-overflow-tooltip="true"/>
      <el-table-column prop="en_name" label="英文名"         width="250" :show-overflow-tooltip="true"/>
      <el-table-column prop="latin_name" label="拉丁名"      width="300" :show-overflow-tooltip="true"/>
      <el-table-column prop="Properties" label="properties" width="200" :show-overflow-tooltip="true"/>
      <el-table-column prop="Meridians" label="Meridians"   width="200" :show-overflow-tooltip="true"/>
      <el-table-column prop="UsePart" label="UsePart"       width="200" :show-overflow-tooltip="true"/>
      <el-table-column prop="Function" label="功效"          width="1000" :show-overflow-tooltip="true"/>
      <el-table-column prop="Indication" label="Indication" width="1000" :show-overflow-tooltip="true"/>
      <el-table-column prop="Toxicity" label="Toxicity"     width="200" :show-overflow-tooltip="true"/>
      <el-table-column prop="Clinical_manifestations" label="Clinical_manifestations" width="300" :show-overflow-tooltip="true"/>
      <el-table-column prop="Therapeutic_en_class"    label="Therapeutic_en_class"    width="300" :show-overflow-tooltip="true"/>
      <el-table-column prop="HERB_id" label="HERB_id"       width="200" :show-overflow-tooltip="true"/>
      <el-table-column prop="TCMID_id" label="TCMID_id"     width="200" :show-overflow-tooltip="true"/>
      <el-table-column prop="TCM_ID_id" label="TCM_ID_id"   width="200" :show-overflow-tooltip="true"/>
      <el-table-column prop="SymMap_id" label="SymMap_id"   width="200" :show-overflow-tooltip="true"/>
      <el-table-column prop="TCMSP_id" label="TCMSP_id"     width="200" :show-overflow-tooltip="true"/>
      <el-table-column prop="Importance Score" label="Importance Score" width="200" :show-overflow-tooltip="true"/>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "TCMResultTable"
}
</script>