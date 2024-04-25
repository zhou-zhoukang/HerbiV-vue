<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-main>
        <RouterView></RouterView>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/meta/Header.vue"
import Footer from "@/components/meta/Footer.vue"

export default {
  data() {
    return {}
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>
.header {
  height: 150px;
  padding: 0;
}
</style>

