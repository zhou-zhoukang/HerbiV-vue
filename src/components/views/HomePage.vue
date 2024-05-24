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

const { toClipboard } = useClipboard()
const selectData = reactive({
  tcms: [],
})

const showSelectData = (tcm) => {
  // 去重
  let flag = true;
  selectData.tcms.forEach(item => {
    if (item.id === tcm.id) {
      flag = false;
    }
  })
  if (flag) selectData.tcms.push(toRaw(tcm));
}

const deleteSelectData = (rowNo) => {
  selectData.tcms.splice(rowNo, 1);
}

const startAnalysis = async () => {
  if (selectData.tcms.length === 0) {
    ElMessage({type: 'warning', message: '请添加想分析的中药'});
    return;
  }
  const tcmIds = selectData.tcms.map(item => {return item.id});
  await AnalysisService.fromTcm(tcmIds)
    .then(res => {
      if (res.code === 2000) {
        ElMessageBox.alert(res.analysis_no, '分析号', {
          // autofocus: false,
          confirmButtonText: '复制并退出',
          callback: (action) => {
            toClipboard(res.analysis_no)
            ElMessage({
              type: 'success',
              message: `分析号已复制，请至结果界面查看`,
            });
          },
        })
      }
    });
}

// const fromTcm = async () => {
//
// }

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

  <el-button :icon="DataAnalysis" @click="startAnalysis()">FromTcm</el-button>
  <TCMSelectTable :tcm-data="selectData.tcms" v-show="selectData.tcms.length > 0" v-on:listenDeleteData="deleteSelectData"/>

<!--  总体数据展示 -->
  <TCMTableView ref="TCMTable" v-if="searchItem.type === 'tcm'" v-on:listenSelectData="showSelectData"/>
  <ChemicalTableView ref="ChemicalTable" v-if="searchItem.type === 'chemical'"/>
  <ProteinTableView ref="ProteinTable" v-if="searchItem.type === 'protein'"/>
  <FormulaTableView ref="FormulaTable" v-if="searchItem.type === 'formula'"/>
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


