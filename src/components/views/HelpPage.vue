<script setup>
import {reactive, ref} from 'vue'
import {DataAnalysis, Download, House, DataBoard} from "@element-plus/icons-vue";
import AnalysisService from "@/service/AnalysisService";
const activeIndex = ref('1')
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}

const helpData = [
  {
    index: "1",
    label: "1.搜索",
    icon: House
  },
  {
    index: "2",
    label: "2.分析",
    icon: DataAnalysis
  },
  {
    index: "3",
    label: "3.下载",
    icon: Download
  },
  {
    index: "4",
    label: "4.统计",
    icon: DataBoard
  }
]

const currentIndex = ref("1")
const clickMenu = async (item) => {
  currentIndex.value = item.index
  // 统计页面需要调用接口
  if (item.index === '4') {
    await AnalysisService.getStatistic()
      .then(res => {
        if (res.code === 2000) {
          statisticCount.fromTcmCount = res.msg.fromTcm
          statisticCount.fromFormulaCount = res.msg.fromFormula
          statisticCount.fromTcmProteinCount = res.msg.fromTcmProtein
          statisticCount.fromFormulaProteinCount = res.msg.fromFormulaProtein
          statisticCount.fromProteinCount = res.msg.fromProtein
        }
      })
  }
}

const statisticCount = reactive({
  fromTcmCount: 0,
  fromFormulaCount: 0,
  fromTcmProteinCount: 0,
  fromFormulaProteinCount: 0,
  fromProteinCount: 0,
})
</script>

<template>
  <div class="help-container">
    <el-card class="introduction-card">
      <h2>HerbiV Manuel</h2>
      <p>HerbiV是一个具有多种功能的中药网络药理学分析工具，可进行经典的网络药理学及反向网络药理学分析。</p>
      <p>TODO</p>
    </el-card>
    <div class="help-content-container">
      <el-menu
          :default-active="activeIndex"
          class="menu-vertical-container"
          mode="vertical"
          @select="handleSelect"
      >
        <el-menu-item
            @click="clickMenu(item)"
            v-for="item in helpData"
            :key="item.name"
            :index="item.index"
        >
          <el-icon><component :is="item.icon"></component></el-icon>
          <span>{{ item.label }}</span>
        </el-menu-item>
      </el-menu>

      <div
          class="help-content"
          v-if="currentIndex === '1'"
      >
        <h2>1.搜索功能</h2>
        <p>TODO</p>
      </div>

      <div
          class="help-content"
          v-if="currentIndex === '2'"
      >
        <h2>2.分析功能</h2>
        <p>TODO</p>
      </div>

      <div
          class="help-content"
          v-if="currentIndex === '3'"
      >
        <h2>3.下载功能</h2>
        <p>TODO</p>
      </div>

      <div
        class="help-content"
        v-if="currentIndex === '4'"
      >
        <h2>4.统计数据</h2>
        <el-row :gutter="20">
          <el-col :span="4">
            <el-statistic :value="statisticCount.fromTcmCount" title="From Tcm"/>
          </el-col>
          <el-col :span="4">
            <el-statistic :value="statisticCount.fromFormulaCount" title="From Formula"/>
          </el-col>
          <el-col :span="4">
            <el-statistic :value="statisticCount.fromTcmProteinCount" title="From Tcm Protein"/>
          </el-col>
          <el-col :span="4">
            <el-statistic :value="statisticCount.fromFormulaProteinCount" title="From Formula Protein"/>
          </el-col>
          <el-col :span="4">
            <el-statistic :value="statisticCount.fromProteinCount" title="From Protein"/>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<style>
.help-container {
  padding: 0 12% 0 12%;
}

.introduction-card {
  background: var(--el-color-success-light-8);
  margin-bottom: 10px;
}

.help-content-container {
  display: flex;
}

.help-content {
  width: 100%;
  padding: 0 0 0 5%;
}

.menu-vertical-container {
  width: 150px;
}
</style>

<script>
export default {
  name: "HelpPage"
}
</script>
