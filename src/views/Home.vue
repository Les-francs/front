<template>
  <el-row :gutter="20">
    <el-col :span="8">
      <el-row>
        <el-col>
          <h2>
            Personnage
            <button
              @click="personnageState.editMode = !personnageState.editMode"
            >
              <font-awesome-icon
                v-if="personnageState.editMode"
                icon="user-check"
              />
              <font-awesome-icon v-else icon="user-edit" />
            </button>
          </h2>
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
          <h2>Evenements ({{ getAvailableEvents().length }} en attente)</h2>
        </el-col>
      </el-row>
      <el-scrollbar height="89vh">
        <el-row :gutter="10">
          <el-col :span="20">
            <select v-model="eventSelected">
              <option
                v-for="(ev, key) in getAvailableEvents()"
                :key="key"
                :value="ev.id"
              >
                {{ ev.name }} du {{ ev.dateDebut }} au {{ ev.dateFin }}
              </option>
            </select>
          </el-col>
          <el-col :span="4">
            <button
              @click="
                addEvent(eventsState.find((val) => val.id == eventSelected))
              "
            >
              <font-awesome-icon icon="plus" />
            </button>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col
            v-for="(event, key) in personnageState.events"
            :key="key"
            :span="24"
            :lg="12"
          >
            <Event :id="key" />
          </el-col>
        </el-row>
      </el-scrollbar>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import Personnage from "@/components/Home/Personnage.vue";
import Event from "@/components/Home/Event.vue";
import Classes from "@/components/Home/Classes.vue";
import { state as eventsState } from "@/components/Evenements/events";
import {
  addEvent,
  getAvailableEvents,
  state as personnageState,
} from "@/components/Home/personnage";
import { ref } from "vue";

const eventSelected = ref();
</script>

<style lang="scss" scoped>
button {
  font-size: 0.6em;
}
</style>
