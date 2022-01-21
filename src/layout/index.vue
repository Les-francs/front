<template>
  <el-container direction="vertical">
    <Header />
    <el-main>
      <el-scrollbar height="100%">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<script lang="ts" setup>
import Header from "@/layout/header/index.vue";
</script>

<style scoped>
.el-header {
  /* background-color: #b3c0d1; */
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
  padding: 0 !important;
}

.el-main {
  /* background-color: #e9eef3; */
  color: var(--el-text-color-primary);
  text-align: center;
  padding: 0 20px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
