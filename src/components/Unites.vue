<template>
  <el-row style="margin-top: 10px">
    <el-col>
      <el-select v-model="selected" class="m-2" placeholder="Select" filterable>
        <el-option
          v-for="item in uniteState"
          :key="item.id"
          :label="item.name"
          :value="item.id"
        >
        </el-option>
      </el-select>
      <el-button
        type="primary"
        round
        @click="addUnite(uniteState.find((val) => val.id == selected))"
      >
        <font-awesome-icon icon="plus" />
      </el-button>
    </el-col>
  </el-row>
  <el-row :gutter="10">
    <template v-for="(unite, key) in personnageState.unites" :key="unite.id">
      <el-col :span="3">
        <Unite :uniteId="key" />
      </el-col>
    </template>
  </el-row>
</template>

<script lang="ts" setup>
import Unite from "@/components/Unite.vue";
import { state as uniteState } from "@/store/unites";
import { state as personnageState } from "@/store/personnage";
import { addUnite } from "@/store/personnage";
import { ref } from "vue";

const selected = ref(0);
</script>

<style lang="scss" scoped>
.el-button {
  margin-left: 20px;
}
</style>
