<template>
  <el-row :gutter="20">
    <el-col :span="8" v-if="perso">
      <el-row>
        <el-col>
          <h2>
            Personnage
            <button @click="updateUser()">
              <font-awesome-icon v-if="appState.editMode" icon="user-check" />
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
          <el-col :span="24">
            <select v-model="eventSelected">
              <option
                v-for="(ev, key) in events?.edges"
                :key="key"
                :value="ev.node.id"
              >
                {{ ev.node.name }} du {{ dateToString(ev.node.startAt) }} au
                {{ dateToString(ev.node.endAt) }}
                <template
                  v-if="
                    perso?.eventUsers.edges.find(
                      (val) => val.node.event?.id === ev.node.id
                    ) === undefined
                  "
                >
                  ( Non répondu )
                </template>
              </option>
            </select>
          </el-col>
        </el-row>
        <el-row v-if="eventSelected">
          <el-col>
            <Event :id="eventSelected" />
          </el-col>
        </el-row>
      </el-scrollbar>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import Personnage from "@/components/Home/Personnage.vue";
import Classes from "@/components/Home/Classes.vue";
import { state as appState } from "@/store/app";
import { dateToString } from "@/utils/string";
import { getAvailableEvents, perso, updatePerso } from "@/store/personnage";
import { eventSelected, events } from "@/store/events";
import Event from "@/components/Home/Event.vue";

const updateUser = () => {
  updatePerso();
  appState.value.editMode = !appState.value.editMode;
};
</script>

<style lang="scss" scoped>
button {
  font-size: 0.6em;
}
</style>
