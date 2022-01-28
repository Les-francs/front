<template>
  <el-row style="margin-top: 10px">
    <el-col>
      <el-select
        v-model="selected"
        class="m-2"
        placeholder="Selectionner une unité"
        filterable
      >
        <el-option
          v-for="item in getUnitesSortedByName()"
          :key="item.node.id"
          :label="item.node.name"
          :value="item.node.id"
        >
        </el-option>
      </el-select>
      <button
        round
        @click="
          addUnite(units?.edges.find((val) => val.node.id == selected)?.node)
        "
      >
        <font-awesome-icon icon="plus" />
      </button>
    </el-col>
  </el-row>
  <el-row :gutter="10">
    <template v-for="(uniteUser, key) in perso?.unitUsers.edges" :key="key">
      <el-col :span="3">
        <Unite :uniteId="key" />
      </el-col>
    </template>
  </el-row>
</template>

<script lang="ts" setup>
import Unite from "@/components/Caserne/Unite.vue";
import { getUnitesSortedByName, units } from "@/store/unites";
import { perso } from "@/store/personnage";
import { addUnite } from "@/store/personnage";
import { ref } from "vue";

const selected = ref();
</script>

<style lang="scss" scoped>
button {
  margin-left: 20px;
}
</style>
