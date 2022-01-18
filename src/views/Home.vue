<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-row>
        <el-col>
          <h2>Personnage</h2>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <Classes />
        </el-col>
        <el-col>
          <Personnage />
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="16">
      <el-row>
        <el-col>
          <h2>Evenements</h2>
        </el-col>
      </el-row>
      <el-scrollbar height="89vh">
        <el-row :gutter="10">
          <el-col
            v-for="(event, key) in eventsState"
            :key="key"
            :span="24"
            :md="12"
          >
            <Event :id="key" />
          </el-col>
        </el-row>
      </el-scrollbar>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import Personnage from "@/components/Personnage.vue";
import Event from "@/components/Event.vue";
import Classes from "@/components/Classes.vue";
import { state as eventsState } from "@/store/events";
</script>
