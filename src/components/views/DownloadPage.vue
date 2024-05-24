<!-- 参考 http://herb.ac.cn/ -->
<script setup>
import { ref } from 'vue'

const downloadData = [
  {
    data: 'TCM',
    description: '中药信息',
    statistic: '',
    name: 'HerbiV_tcm.csv'
  },
  {
    data: 'Formula',
    description: '复方信息',
    statistic: '',
    name: 'HerbiV_formula.csv'
  },
  {
    data: 'Chemical',
    description: '化合物信息',
    statistic: '',
    name: 'HerbiV_chemicals.csv'
  },
  {
    data: 'Protein',
    description: '靶点信息',
    statistic: '',
    name: 'HerbiV_proteins.csv'
  },
  {
    data: 'Chemical Protein Links',
    description: '化合物/靶点',
    statistic: '',
    name: 'HerbiV_chemical_protein_links.csv'
  },
  {
    data: 'Formula Tcm Links',
    description: '复方/中药',
    statistic: '',
    name: 'HerbiV_formula_tcm_links.csv'
  },
  {
    data: 'Tcm Chemical Links',
    description: '中药/化合物',
    statistic: '',
    name: 'HerbiV_tcm_chemical_links.csv'
  },
]

const handleDownload = (index, row) => {
  window.open(`${process.env.VUE_APP_API_URL}/${row.name}`)
}

const activeFormat = ref('TCM')

const handleClick = (tab, event) => {
  console.log(tab, event)
}
</script>

<template>
  <div class="download-container">
    <h1>Download Files</h1>
    <el-table :data="downloadData" stripe style="width: 100%">
      <el-table-column prop="data" label="Data" width="200" />
      <el-table-column prop="description" label="Description" width="180">
        <template #default="scope">
          <el-tag>{{ scope.row.description }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="statistic" label="Statistic" />
      <el-table-column label="Download" >
        <template #default="scope">
          <el-button
              size="small"
              @click="handleDownload(scope.$index, scope.row)"
          >
            Download
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <ElDivider/>
    <h1>File formats</h1>
    <el-tabs
        v-model="activeFormat"
        class="demo-tabs"
        @tab-click="handleClick"
    >
      <el-tab-pane label="TCM" name="TCM">
        <p>HVMID: xxx</p>
        <p>cnName: xxx</p>
      </el-tab-pane>
      <el-tab-pane label="Formula" name="Formula">
        <p>id: xxx</p>
        <p>name: xxx</p>
      </el-tab-pane>
      <el-tab-pane label="Chemical" name="Chemical"></el-tab-pane>
      <el-tab-pane label="Protein" name="Protein"></el-tab-pane>
      <el-tab-pane label="Chemical Protein Links" name="Chemical_Protein_Links"></el-tab-pane>
      <el-tab-pane label="Formula Tcm Links" name="Formula_Tcm_Links"></el-tab-pane>
      <el-tab-pane label="Tcm Chemical Links" name="Tcm_Chemical_Links"></el-tab-pane>
    </el-tabs>
    <ElDivider/>
  </div>
</template>

<script>
export default {
  name: "DownloadPage"
}
</script>

<style scoped>
.download-container {
  padding: 0 12% 0 12%;
}

.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>