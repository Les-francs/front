<template>
  <el-header>
    <el-menu
      :default-active="route.path"
      mode="horizontal"
      background-color="#b3c0d1"
      :router="true"
    >
      <el-menu-item index="/" path="/about"> Personnage </el-menu-item>
      <el-menu-item index="/caserne" path="/caserne"> Caserne </el-menu-item>
    </el-menu>
  </el-header>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";

let route = useRoute();
</script>

<style lang="scss" scoped>
.el-menu.el-menu--horizontal {
  border-bottom: 0;
}
</style>
