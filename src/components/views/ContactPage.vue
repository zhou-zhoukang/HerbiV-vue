<script setup>

import {Compass, Message} from "@element-plus/icons-vue";
</script>

<template>
  <div class="contact-container">
    <h1>Contact us</h1>
    <el-icon size="40"><Message /></el-icon>
    <p>xxx：xxx@qq.com</p>
    <p>xxx：xxx@qq.com</p>
    <p>WebApp：hangzhou@njfu.edu.com</p>
    <br>
    <el-icon size="40"><Compass /></el-icon>
    <p>南京中医药大学 Nanjing University of Chinese Medicine.</p>
    <p>江苏省南京市仙林大道138号</p>
    <p>210023 中国南京</p>
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