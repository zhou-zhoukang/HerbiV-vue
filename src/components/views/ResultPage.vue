<script setup>
import {reactive, ref} from 'vue'
import {Search} from "@element-plus/icons-vue";
import AnalysisService from "@/service/AnalysisService";
import {ElMessage} from "element-plus";
import TCMResultTable from "@/components/result/TCMResultTable.vue";
import TCMChemicalLinkResultTable from "@/components/result/TCMChemicalLinkResultTable.vue";

const analysisNo = ref('')
const data = reactive({
  result: '',
  inputIds: '',
  createTime: ''
})

const search = async () => {
  if (analysisNo.value === '') {
    ElMessage({type: 'warning', message: '请输入分析号'});
    return;
  }
  await AnalysisService.getResult(analysisNo.value)
    .then(res => {
      if (res.code !== 2000) {
        ElMessage({type: 'warning', message: res.msg});
      } else {
        data.result = res.result;
        data.inputIds = res.input_ids;
        data.createTime = res.create_time;
      }
    });
}
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

  <TCMResultTable :tcm-data="data.result.tcm" v-if="data.result !== ''"/>
  <TCMChemicalLinkResultTable :tcm-chem-data="data.result.tcm_chem_link" v-if="data.result !== ''"/>

</template>

<script>
export default {
  name: "ResultPage"
}
</script>
