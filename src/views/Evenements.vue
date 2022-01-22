<template>
  <el-row class="events" :style="{ backgroundImage: 'url(' + image + ')' }">
    <el-col>
      <EventList v-if="eventSelected === undefined" />
      <EventDetail v-else :id="eventSelected" />
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import EventList from "@/components/Evenements/EventList.vue";
import EventDetail from "@/components/Evenements/EventDetail.vue";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require("@/assets/fond-events.png");
let eventSelected: number;
</script>

<style lang="scss" scoped>
.events {
  background-size: contain;
  padding-top: 2.5vw;
  padding-bottom: 5.5vw;
  background-repeat: no-repeat;
  height: 45vw;
  margin: 20px auto;
  width: 57vw;
  overflow: hidden;
}
</style>
