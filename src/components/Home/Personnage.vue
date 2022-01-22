<template>
  <transition name="fade" mode="out-in">
    <el-row v-if="state.editMode" class="editPersonnage">
      <el-col>
        <el-row align="middle">
          <el-col :span="4">
            <label>Pseudo :</label>
          </el-col>
          <el-col :span="20">
            <input type="text" v-model="state.pseudo" />
          </el-col>
        </el-row>
      </el-col>
      <el-col>
        <el-row align="middle">
          <el-col :span="4">
            <label>Maison :</label>
          </el-col>
          <el-col :span="20">
            <input type="text" v-model="state.maison" />
          </el-col>
        </el-row>
      </el-col>
      <el-col>
        <el-row align="middle">
          <el-col :span="4">
            <label>Influence :</label>
          </el-col>
          <el-col :span="20">
            <input type="number" v-model="state.influence" />
          </el-col>
        </el-row>
      </el-col>
    </el-row>
    <el-row v-else>
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
  </transition>
</template>

<script lang="ts" setup>
import { state } from "@/components/Home/personnage";
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

.editPersonnage {
  background-color: rgba($color: #fff, $alpha: 0.2);
  border-radius: 5px;
  padding: 20px 0;

  input {
    width: 80%;
  }
}
</style>
