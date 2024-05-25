<script setup>
import { ref } from 'vue'
import {DataAnalysis, Download, House} from "@element-plus/icons-vue";

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
  }
]

const currentIndex = ref("1")
const clickMenu = (item) => {
  currentIndex.value = item.index
}
</script>

<template>
  <div class="help-container">
    <el-card class="introduction-card">
      <h2>HerbiV Manuel</h2>
      <p>HerbiV是一个具有多种功能的中药网络药理学分析工具，可进行经典的网络药理学及反向网络药理学分析。</p>
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

      </div>

      <div
          class="help-content"
          v-if="currentIndex === '2'"
      >
        <h2>2.分析功能</h2>

      </div>

      <div
          class="help-content"
          v-if="currentIndex === '3'"
      >
        <h2>3.下载功能</h2>

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
  padding: 0 5% 0 5%;
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
