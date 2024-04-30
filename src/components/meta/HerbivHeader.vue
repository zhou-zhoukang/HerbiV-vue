<script setup>
import {Setting} from "@element-plus/icons-vue";
import { useDark, useToggle } from '@vueuse/core'
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <div class="image-div">
    <img src="../../../public/assets/logo.png" class="image" alt="logo">
  </div>
  <div class="header">
    <el-menu
      :default-active="activeIndex"
      class="el-menu"
      mode="horizontal"
      @select="handleSelect()"
    >

      <el-menu-item
        @click="clickMenu(item)"
        v-for="item in menuData" :key="item.name"
        :index="item.name"
      >
        <el-icon><component :is="item.icon"></component></el-icon>
        <span>{{ item.label }}</span>
      </el-menu-item>

      <el-sub-menu
        index="2"

      >
        <template #title><el-icon><Setting /></el-icon> 设置</template>
        <el-menu-item
          index="2-1"
          @click="toggleDark()"
        >
          切换主题
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style>
.el-menu {
  justify-content: center;
  background-color: var(--el-color-primary-light-7);
}

.image-div {
  background-color: var(--el-color-primary-light-7);
  height: 73px;
}

.image {
  clear: both;
  display: block;
  margin: auto;
  width: auto;
}
</style>

<script>
import {DataAnalysis, House, Download, HelpFilled} from "@element-plus/icons-vue";

export default {
  data() {
    return {
      activeIndex: '1',
      menuData: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: House
        },
        {
          path: "/result",
          name: "result",
          label: "结果",
          icon: DataAnalysis
        },
        {
          path: "/download",
          name: "download",
          label: "下载",
          icon: Download
        },
        {
          path: "/help",
          name: "help",
          label: "帮助",
          icon: HelpFilled
        }
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    clickMenu(item) {
      if (this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
        this.$router.push(item.path)
      }
    }
  }
}
</script>
