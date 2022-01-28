<template>
  <transition name="fade" mode="out-in">
    <el-row v-if="state.editMode" class="editClasse">
      <el-col :span="6" v-for="{ url, name } in classes" :key="name">
        <el-image
          :class="name != perso?.weapon.name ? 'disabled' : ''"
          :src="url"
          @click="updatedData.weapon = name"
          fit="contain"
        ></el-image>
      </el-col>
    </el-row>
    <el-row v-else>
      <el-col>
        <div class="classe" :style="{ backgroundImage: 'url(' + image + ')' }">
          <el-image :src="src"></el-image>
        </div>
      </el-col>
    </el-row>
  </transition>
</template>

<script lang="ts" setup>
import { perso, updatedData } from "@/store/personnage";
import { state } from "@/store/app";
import { weapons } from "@/store/weapons";
import { computed } from "vue";

const src = computed(() =>
  perso.value
    ? require("@/assets/classes/" + perso.value?.weapon.name + "/model.png")
    : ""
);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require("@/assets/fond-classe.jpg");

const classes = computed(() =>
  weapons.value?.edges.map((weapon) => ({
    name: weapon.node.name,
    url: require(`@/assets/classes/${weapon.node.name}/icon.png`),
  }))
);
</script>

<style lang="scss" scoped>
.editClasse {
  margin-bottom: 20px;
}
.classe {
  height: 58vh;
  max-height: 37vw;
  background-position-x: center;
  background-size: contain;
  position: relative;
  background-repeat: no-repeat;
  .el-image {
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
  }
}
</style>
