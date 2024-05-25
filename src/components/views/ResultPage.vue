<script setup>
import {reactive, ref} from 'vue'
import {Search} from "@element-plus/icons-vue";
import AnalysisService from "@/service/AnalysisService";
import {ElMessage} from "element-plus";
import TCMResultTable from "@/components/result/TCMResultTable.vue";
import TCMChemicalLinkResultTable from "@/components/result/TCMChemicalLinkResultTable.vue";
import ChemicalResultTable from "@/components/result/ChemicalResultTable.vue";
import ChemicalProteinLinkResultTable from "@/components/result/ChemicalProteinLinkResultTable.vue";
import ProteinResultTable from "@/components/result/ProteinResultTable.vue";

const analysisNo = ref('')
const data = reactive({
  resultReq: '',
  echartReq: '',
  cytoReq: '',
  result: ''
})

const executeScripts = async (container) => {
  const scripts = container.getElementsByTagName('script');
  scripts.async = true
  for (let i = 1; i < scripts.length; i++) {
    await eval(scripts[i].innerHTML);
  }
}

const search = async () => {
  if (analysisNo.value === '') {
    ElMessage({type: 'warning', message: '请输入分析号'});
    return;
  }
  let flag = true
  await AnalysisService.getResult(analysisNo.value)
    .then(res => {
      if (res.code !== 2000) {
        ElMessage({type: 'warning', message: res.msg});
        flag = false
      } else {
        data.resultReq = res.resultReq;
        data.echartReq = res.echartReq;
        data.cytoReq = res.cytoReq;
      }
    });

  if (!flag) return
  await AnalysisService.getStatic(data.resultReq)
      .then(res => {
        data.result = res
      })

  if (!flag) return
  await AnalysisService.getStatic(data.echartReq)
    .then(res => {
      // 静态资源有可能不存在
      if (res !== "") {
        const htmlContainer = document.getElementById('htmlContainer');
        htmlContainer.innerHTML = res;
        executeScripts(htmlContainer);
      }
    })
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
  <ChemicalResultTable :chem-data="data.result.chem" v-if="data.result !== ''"/>
  <ChemicalProteinLinkResultTable :chem-protein-data="data.result.chem_protein_link" v-if="data.result !== ''"/>
  <ProteinResultTable :protein-data="data.result.protein" v-if="data.result !== ''"/>
  <div id="htmlContainer" class="html-container"></div>
</template>

<script>
export default {
  name: "ResultPage"
}
</script>

<style>
.html-container {
  width: 50%
}
</style>
