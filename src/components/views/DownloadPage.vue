<!-- 参考 http://herb.ac.cn/ -->
<script setup>
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
</script>

<template>
  <h1>Download Files</h1>
  <el-table :data="downloadData" stripe style="width: 100%">
    <el-table-column prop="data" label="Data" width="180" />
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
</template>

<script>
export default {
  name: "DownloadPage"
}
</script>

<style scoped>

</style>