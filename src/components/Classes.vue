<template>
  <transition name="fade">
    <el-row v-if="state.editMode">
      <el-col :span="6" v-for="(url, name) in classes" :key="name">
        <el-image
          :class="name != state.classe ? 'disabled' : ''"
          :src="url"
          @click="state.classe = name"
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
import { state } from "@/store/personnage";
import { computed } from "vue";

const src = computed(() =>
  require("@/assets/classes/" + state.value.classe + "/model.png")
);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require("@/assets/fond-classe.jpg");

const classes = {
  broadswordshield: require("@/assets/classes/broadswordshield/icon.png"),
  crescentblade: require("@/assets/classes/crescentblade/icon.png"),
  dualblade: require("@/assets/classes/dualblade/icon.png"),
  longbow: require("@/assets/classes/longbow/icon.png"),
  maul: require("@/assets/classes/maul/icon.png"),
  musket: require("@/assets/classes/musket/icon.png"),
  nodachi: require("@/assets/classes/nodachi/icon.png"),
  pike: require("@/assets/classes/pike/icon.png"),
  poleaxe: require("@/assets/classes/poleaxe/icon.png"),
  shortbow: require("@/assets/classes/shortbow/icon.png"),
  spear: require("@/assets/classes/spear/icon.png"),
  swordshield: require("@/assets/classes/swordshield/icon.png"),
};
</script>

<style lang="scss" scoped>
.classe {
  height: 58vh;
  max-height: 37vw;
  background-position-x: center;
  background-size: contain;
  position: relative;
  background-repeat-x: no-repeat;
  background-repeat-y: no-repeat;
}

.el-image {
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
