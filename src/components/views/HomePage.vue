<script setup>
import {DataAnalysis, Search} from "@element-plus/icons-vue";
import {ElMessage, ElMessageBox} from 'element-plus'
import TCMTableView from "@/components/tcm/TCMTableView.vue";
import ChemicalTableView from "@/components/chemical/ChemicalTableView.vue";
import ProteinTableView from "@/components/protein/ProteinTableView.vue";
import FormulaTableView from "@/components/formula/FormulaTableView.vue";
import {reactive, toRaw} from "vue";
import TCMSelectTable from "@/components/tcm/TCMSelectTable.vue";
import AnalysisService from "@/service/AnalysisService";
import useClipboard from 'vue-clipboard3'
import FormulaSelectTable from "@/components/formula/FormulaSelectTable.vue";
import ProteinSelectTable from "@/components/protein/ProteinSelectTable.vue";

const { toClipboard } = useClipboard()
const selectData = reactive({
  tcms: [],
  formulas: [],
  proteins: []
})

const score = ref(500)

const showTcmSelectedData = (tcm) => {
  // 控制最大分析数量
  if (selectData.tcms.length >= 10)
    return
  // 去重
  let flag = true;
  selectData.tcms.forEach(item => {
    if (item.id === tcm.id) {
      flag = false;
    }
  })
  if (flag) selectData.tcms.push(toRaw(tcm));
}

const showFormulaSelectedData = (formula) => {
  // 控制最大分析数量
  if (selectData.formulas.length >= 10)
    return
  // 去重
  let flag = true;
  selectData.formulas.forEach(item => {
    if (item.id === formula.id) {
      flag = false;
    }
  })
  if (flag) selectData.formulas.push(toRaw(formula));
}

const showProteinSelectedData = (protein) => {
  // 控制最大分析数量
  if (selectData.proteins.length >= 10)
    return
  // 去重
  let flag = true;
  selectData.proteins.forEach(item => {
    if (item.id === protein.id) {
      flag = false;
    }
  })
  if (flag) selectData.proteins.push(toRaw(protein));
}

const deleteTcmSelectedData = (rowNo) => {
  selectData.tcms.splice(rowNo, 1);
}

const deleteFormulaSelectedData = (rowNo) => {
  selectData.formulas.splice(rowNo, 1);
}

const deleteProteinSelectedData = (rowNo) => {
  selectData.proteins.splice(rowNo, 1);
}

const fromCallback = res => {
  if (res.code === 2000) {
    ElMessageBox.alert(res.msg, '分析号', {
      // autofocus: false,
      confirmButtonText: '复制分析号',
      callback: (action) => {
        toClipboard(res.msg)
        ElMessage({
          type: 'success',
          message: `分析号已复制，请至结果界面查看`,
        });
      },
    });
  }
}

const fromTcm = async () => {
  if (selectData.tcms.length === 0) {
    ElMessage({type: 'warning', message: '请添加想分析的中药'});
    return;
  }
  const tcmIds = selectData.tcms.map(item => {return item.id});
  await AnalysisService.fromTcm(tcmIds, score.value)
    .then(fromCallback)
}

const fromFormula = async () => {
  if (selectData.formulas.length === 0) {
    ElMessage({type: 'warning', message: '请添加想分析的复方'});
    return;
  }
  const formulaIds = selectData.formulas.map(item => {return item.id});
  await AnalysisService.fromFormula(formulaIds, score.value)
      .then(fromCallback)
}

const fromTcmProtein = async () => {
  if (selectData.tcms.length === 0) {
    ElMessage({type: 'warning', message: '请添加想分析的中药'});
    return;
  }
  if (selectData.proteins.length === 0) {
    ElMessage({type: 'warning', message: '请添加想分析的靶点'});
    return;
  }
  const tcmIds = selectData.tcms.map(item => {return item.id});
  const proteinIds = selectData.proteins.map(item => {return item.id});
  await AnalysisService.fromTcmProtein(tcmIds, proteinIds, score.value)
      .then(fromCallback)
}

const fromFormulaProtein = async () => {
  if (selectData.formulas.length === 0) {
    ElMessage({type: 'warning', message: '请添加想分析的复方'});
    return;
  }
  if (selectData.proteins.length === 0) {
    ElMessage({type: 'warning', message: '请添加想分析的靶点'});
    return;
  }
  const formulaIds = selectData.formulas.map(item => {return item.id});
  const proteinIds = selectData.proteins.map(item => {return item.id});
  await AnalysisService.fromFormulaProtein(formulaIds, proteinIds, score.value)
      .then(fromCallback)
}

const fromProtein = async () => {
  if (selectData.proteins.length === 0) {
    ElMessage({type: 'warning', message: '请添加想分析的靶点'});
    return;
  }
  const proteinIds = selectData.proteins.map(item => {return item.id});
  await AnalysisService.fromProtein(proteinIds, score.value)
      .then(fromCallback)
}
</script>

<template>
  <!--  搜索框-->
  <div style="margin: 20px auto; text-align: center; max-width: 1000px;">
    <el-select
      size="large"
      placeholder="选择"
      @change="searchItem.type2 = 'id'"
      v-model="searchItem.type"
      style="width: 80px; margin-left: 10px"
    >
      <el-option
        v-for="option in searchOptions"
        :key="option.value"
        :label="option.label"
        :value="option.value"
      />
    </el-select>

    <el-select
      size="large"
      placeholder="选择"
      v-model="searchItem.type2"
      style="width: 120px; margin-left: 10px"
    >
      <el-option
        v-for="option in searchOptions.find(item => item.value === searchItem.type).searchOptions"
        :key="option.value"
        :label="option.label"
        :value="option.value"
        />
    </el-select>

    <el-input
      v-model="searchItem.content"
      style="width: 65%; padding-left: 10px;"
      size="large"
      placeholder="支持模糊查询"
    >
      <template #append>
        <el-button :icon="Search" @click="search"/>
      </template>
    </el-input>
  </div>

  <!--  总体数据展示 -->
  <h1>数据展示</h1>
  <TCMTableView ref="TCMTable" v-if="searchItem.type === 'tcm'" v-on:listenSelectData="showTcmSelectedData"/>
  <ChemicalTableView ref="ChemicalTable" v-if="searchItem.type === 'chemical'"/>
  <ProteinTableView ref="ProteinTable" v-if="searchItem.type === 'protein'" v-on:listenSelectData="showProteinSelectedData"/>
  <FormulaTableView ref="FormulaTable" v-if="searchItem.type === 'formula'" v-on:listenSelectData="showFormulaSelectedData"/>

  <div>
    <h1>选择分析方法</h1>
    <div class="function_choose_container">
      <el-button :icon="DataAnalysis" @click="fromTcm()">From Tcm</el-button>
      <el-button :icon="DataAnalysis" @click="fromFormula()">From Formula</el-button>
      <el-button :icon="DataAnalysis" @click="fromTcmProtein()">From Tcm Protein</el-button>
      <el-button :icon="DataAnalysis" @click="fromFormulaProtein()">From Formula Protein</el-button>
      <el-button :icon="DataAnalysis" @click="fromProtein()">From Protein</el-button>
      <div class="score_chooser_container">
<!--        <span>Score</span>-->
        <el-input-number v-model="score" :min="100" :max="1000" label="Score"/>
      </div>
    </div>
  </div>

  <div class="selected-tables-container">
    <TCMSelectTable
        :tcm-data="selectData.tcms"
        v-show="selectData.tcms.length > 0"
        v-on:listenDeleteData="deleteTcmSelectedData"
        class="selected-table-container"
      />
    <FormulaSelectTable
        :formula-data="selectData.formulas"
        v-show="selectData.formulas.length > 0"
        v-on:listenDeleteData="deleteFormulaSelectedData"
        class="selected-table-container"
    />
    <ProteinSelectTable
        :protein-data="selectData.proteins"
        v-show="selectData.proteins.length > 0"
        v-on:listenDeleteData="deleteProteinSelectedData"
        class="selected-table-container"
    />
  </div>
</template>

<script>
import {ref} from 'vue'

// 当前搜索的类型和具体内容
const searchItem = ref({
  type: 'tcm',
  type2: 'id',
  content: ''
})

const searchOptions = [
  {
    label: "中药",
    value: "tcm",
    searchOptions: [
      {
        label: "ID",
        value: "id"
      },
      {
        label: "中文名",
        value: "cnName"
      },
      {
        label: "英文名",
        value: "enName"
      }
    ]
  },
  {
    label: "成分",
    value: "chemical",
    searchOptions: [
      {
        label: "ID",
        value: "id"
      },
      {
        label: "名称",
        value: "name"
      }
    ]
  },
  {
    label: "靶点",
    value: "protein",
    searchOptions: [
      {
        label: "ID",
        value: "id"
      },
      {
        label: "靶点名称",
        value: "proteinName"
      },
      {
        label: "基因名称",
        value: "geneName"
      }
    ]
  },
  {
    label: "复方",
    value: "formula",
    searchOptions: [
      {
        label: "ID",
        value: "id"
      },
      {
        label: "名称",
        value: "name"
      },
      {
        label: "配方",
        value: "composition"
      },
      {
        label: "症状",
        value: "symptom"
      },
      {
        label: "来源",
        value: "source"
      }
    ]
  }
]

export default {
  name: "HomePage",
  setup(){
    return {
      searchItem
    }
  },
  data() {
      return {
        searchOptions: searchOptions,
      }
  },
  methods: {
    search() {
      if (searchItem.value.type === 'tcm') {
        this.$refs.TCMTable.startSearch(searchItem.value.type2, searchItem.value.content)
      } else if (searchItem.value.type === 'chemical') {
        this.$refs.ChemicalTable.startSearch(searchItem.value.type2, searchItem.value.content)
      } else if (searchItem.value.type === "protein") {
        this.$refs.ProteinTable.startSearch(searchItem.value.type2, searchItem.value.content)
      } else if (searchItem.value.type === "formula") {
        this.$refs.FormulaTable.startSearch(searchItem.value.type2, searchItem.value.content)
      }
    }
  }
}
</script>

<style>
h1 {
  text-align: center;
}

.function_choose_container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.score_chooser_container {
  margin-left: 15px;
  margin-right: 5px;
}

.selected-tables-container {
  display: flex;
}

.selected-table-container {
  padding-left: 20px;
}

.extend-enter-from {
  max-height: 0;
}
.extend-enter-active {
  transition: height 0.5s linear;
}
.extend-enter-to {
  max-height: 300px;
}

.extend-leave-active {
  transition: height 0.5s linear;
}
.extend-leave-to {
  max-height: 0;
}
</style>

