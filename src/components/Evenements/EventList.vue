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
    <el-row v-for="event in events?.edges" :key="event.node.id" align="middle">
      <el-col :span="5">
        <span>{{ event.node.name }}</span>
        <!-- <input type="text"> -->
      </el-col>
      <el-col :span="5">
        <span>{{ event.node.description }}</span>
      </el-col>
      <el-col :span="5">
        <span>{{ event.node.startAt }}</span>
      </el-col>
      <el-col :span="5">
        <span>{{ event.node.endAt }}</span>
      </el-col>
      <el-col :span="4">
        <button @click="eventSelected = event.node.id">
          <font-awesome-icon icon="eye" />
        </button>
        <button @click="deleteEvent(event.node.id)">
          <font-awesome-icon icon="trash" />
        </button>
      </el-col>
    </el-row>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { addEvent, deleteEvent, eventSelected, events } from "@/store/events";
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
