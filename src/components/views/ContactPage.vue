<script setup>

import {Compass, Message} from "@element-plus/icons-vue";
</script>

<template>
  <div class="contact-container">
    <h1>Contact us</h1>
    <el-icon size="40"><Message /></el-icon>
    <p>xxx：xxx@qq.com</p>
    <p>xxx：xxx@qq.com</p>
    <br>
    <el-icon size="40"><Compass /></el-icon>
    <p>Nanjing</p>
  </div>
</template>

<script>
export default {
  name: "ContactPage"
}
</script>

<style scoped>
.contact-container {
  padding: 0 12% 0 12%;
}
</style>