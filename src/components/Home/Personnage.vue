<template>
  <transition name="fade" mode="out-in" v-if="perso">
    <el-row v-if="state.editMode" class="editPersonnage">
      <el-col>
        <el-row align="middle">
          <el-col :span="4">
            <label>Pseudo :</label>
          </el-col>
          <el-col :span="20">
            <input type="text" v-model="updatedData.username" />
          </el-col>
        </el-row>
      </el-col>
      <el-col>
        <el-row align="middle">
          <el-col :span="4">
            <label>Maison :</label>
          </el-col>
          <el-col :span="20">
            <select type="text" v-model="updatedData.house">
              <option value="/api/houses/1">{{ perso.house?.name }}</option>
            </select>
          </el-col>
        </el-row>
      </el-col>
      <el-col>
        <el-row align="middle">
          <el-col :span="4">
            <label>Influence :</label>
          </el-col>
          <el-col :span="20">
            <input type="number" v-model="updatedData.influence" />
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
              {{ perso.username }}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12"> Influence : </el-col>
            <el-col :span="12">
              {{ perso.influence }}
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12"> Maison : </el-col>
            <el-col :span="12">
              {{ perso.house?.name }}
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </transition>
</template>

<script lang="ts" setup>
import { perso, updatedData } from "@/store/personnage";
import { state } from "@/store/app";
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
