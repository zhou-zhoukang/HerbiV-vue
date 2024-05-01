<script setup>
import {ref} from 'vue'
import {Search} from "@element-plus/icons-vue";

const analysisNo = ref('')
</script>

<template>
  <div style="margin: 20px auto; text-align: center; max-width: 1000px;">
    <el-input
      v-model="analysisNo"
      style="width: 35%; padding-left: 10px;"
      placeholder="请输入分析号"
    >
      <template #append>
        <el-button :icon="Search" @click="search"/>
      </template>
    </el-input>
  </div>



</template>

<script>
export default {
  name: "ResultPage"
}
</script>
