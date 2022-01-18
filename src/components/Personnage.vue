<template>
  <el-row>
    <el-col>
      <div
        class="personnage"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      >
        <el-row>
          <el-col>
            {{ state.pseudo }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12"> Influence : </el-col>
          <el-col :span="12">
            {{ state.influence }}
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="12"> Maison : </el-col>
          <el-col :span="12">
            {{ state.maison }}
          </el-col>
        </el-row>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { state } from "@/store/personnage";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require("@/assets/panneau.png");
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
}

.personnage {
  font-family: "Berry_Rotunda";
  height: 117px;
  width: 216px;
  padding: 55px 30px 0;
  margin-left: auto;
  margin-right: auto;
}
</style>
