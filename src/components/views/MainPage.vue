<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>

      <el-main>
        <RouterView v-slot="{ Component }">
          <KeepAlive>
            <component :is="Component" v-if="$route.meta.keepAlive"/>
          </KeepAlive>
          <component :is="Component" v-if="!$route.meta.keepAlive"/>
        </RouterView>
      </el-main>

      <el-footer>
        <Footer></Footer>
      </el-footer>

    </el-container>
  </div>
</template>

<script>
import Header from "@/components/meta/HerbivHeader.vue"
import Footer from "@/components/meta/HerbivFooter.vue"

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

