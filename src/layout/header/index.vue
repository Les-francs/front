<template>
  <el-row class="menu">
    <el-col
      :span="7"
      :md="4"
      :style="{ backgroundImage: 'url(' + image + ')' }"
    >
      <router-link to="/"> Personnage </router-link>
    </el-col>
    <el-col
      :span="7"
      :md="4"
      :style="{ backgroundImage: 'url(' + image + ')' }"
    >
      <router-link to="/caserne"> Caserne </router-link>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require("@/assets/fond-menu.png");
</script>

<style lang="scss" scoped>
.menu {
  background-size: contain;
  height: 40px;

  .el-col {
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    padding: 17px 0 0;

    a {
      text-decoration: none;
      color: #401500;
      font-family: "Berry_Rotunda";

      &.router-link-active {
        color: #bd5421;
      }
    }
  }
}
</style>
