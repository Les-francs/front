<template>
  <div class="event" :style="{ backgroundImage: 'url(' + image + ')' }">
    <el-row>
      <el-col>
        <h2>{{ state.events[props.id!].event.name }}</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <p class="date">
          {{ state.events[props.id!].event.dateDebut }} -
          {{ state.events[props.id!].event.dateFin }}
        </p>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-radio v-model="state.events[props.id!].participation" label="oui">
          Oui
        </el-radio>
        <el-radio v-model="state.events[props.id!].participation" label="non">
          Non
        </el-radio>
        <el-radio
          v-model="state.events[props.id!].participation"
          label="ne-sais-pas"
        >
          Ne sais pas
        </el-radio>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <p class="description">
          {{ state.events[props.id!].event.description }}
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { state } from "@/store/personnage";
import { defineProps } from "vue";

const props = defineProps({
  id: {
    require: true,
    type: Number,
  },
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require("@/assets/fond-event.png");
</script>

<style lang="scss" scoped>
.event {
  background-size: cover;
  background-repeat: no-repeat;
  padding: 30px 40px 0 0;
  height: 30vw;
  margin-bottom: 10px;

  @media screen and (min-width: 1200px) {
    height: 16.5vw;
  }

  h2 {
    color: #401500;
  }
}

.description,
.el-radio,
.el-radio__input.is-checked + .el-radio__label,
.date {
  color: #280d00 !important;
  font-style: oblique;
  font-family: "Berry_Rotunda";
}

.box-card {
  margin-bottom: 10px;
}

.el-radio,
.date {
  font-size: smaller;
  margin-top: 0;
}
</style>
