<template>
  <el-row justify="end" style="padding-right: 8vw">
    <el-col :span="2">
      <button @click="addEvent()">
        <font-awesome-icon icon="plus" />
      </button>
    </el-col>
  </el-row>
  <el-scrollbar class="events_list" height="30vw">
    <el-row style="margin-bottom: 30px; margin-top: 30px">
      <el-col :span="5">
        <h2>Nom</h2>
      </el-col>
      <el-col :span="5">
        <h2>Description</h2>
      </el-col>
      <el-col :span="5">
        <h2>Début</h2>
      </el-col>
      <el-col :span="5">
        <h2>Fin</h2>
      </el-col>
      <el-col :span="4">
        <h2>Actions</h2>
      </el-col>
    </el-row>
    <el-row v-for="event in state" :key="event.id" align="middle">
      <el-col :span="5">
        <span>{{ event.name }}</span>
        <!-- <input type="text"> -->
      </el-col>
      <el-col :span="5">
        <span>{{ event.description }}</span>
      </el-col>
      <el-col :span="5">
        <span>{{ event.dateDebut }}</span>
      </el-col>
      <el-col :span="5">
        <span>{{ event.dateFin }}</span>
      </el-col>
      <el-col :span="4">
        <button>
          <font-awesome-icon icon="eye" />
        </button>
        <button @click="deleteEvent(event.id)">
          <font-awesome-icon icon="trash" />
        </button>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { addEvent, deleteEvent, state } from "@/components/Evenements/events";
</script>

<style lang="scss" scoped>
h2 {
  color: #401500;
}

.events_list {
  margin-top: 2vw;
  padding: 0 4vw 0 3vw;

  button {
    margin-right: 5px;
  }

  .el-col {
    height: 42px;
  }
}
</style>
