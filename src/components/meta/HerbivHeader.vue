<template>
  <div class="imagediv">
    <img src="../../../public/assets/logo.png" class="image" alt="">
  </div>
  <div class="header">
    <el-menu :default-active="activeIndex2" class="elmenu" mode="horizontal" @select="handleSelect"
      background-color="#B4C7E7" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item @click="clickMenu(item)" v-for="item in menuData" :key="item.name" :index="item.name">
        <el-icon>
          <component :is="item.icon"></component>
        </el-icon>
        <span>{{ item.lable }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<style>
.el-menu {
  justify-content: center;
}

.imagediv {
  background-color: #B4C7E7;
  height: 73px;
}

.image {
  clear: both;
  display: block;
  margin: auto;
  width: auto;
}
</style>

<script setup>
import { House, Search, Download, HelpFilled } from "@element-plus/icons-vue"
</script>

<script>
export default {
  data() {
    return {
      activeIndex2: '1',
      menuData: [
        {
          path: "/",
          name: "home",
          lable: "首页",
          icon: House
        },
        {
          path: "/search",
          name: "search",
          lable: "搜索",
          icon: Search
        },
        {
          path: "/download",
          name: "download",
          lable: "下载",
          icon: Download
        },
        {
          path: "/help",
          name: "help",
          lable: "帮助",
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
      if (this.$route.path != item.path && !(this.$route.path === '/home' && (item.path === '/'))) {
        this.$router.push(item.path)
      }
    }
  }
}
</script>
