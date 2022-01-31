<template>
  <div
    v-if="event"
    class="event"
    :style="{ backgroundImage: 'url(' + image + ')' }"
  >
    <el-row>
      <el-col>
        <h2>{{ event.node.event?.name }}</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <p class="date">
          {{ event.node.event?.startAt }} -
          {{ event.node.event?.endAt }}
        </p>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-radio
          v-model="event.node.participation"
          label="oui"
        >
          Oui
        </el-radio>
        <el-radio
          v-model="event.node.participation"
          label="non"
        >
          Non
        </el-radio>
        <el-radio
          v-model="event.node.participation"
          label="ne-sais-pas"
        >
          Ne sais pas
        </el-radio>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <p class="description">
          {{ event.node.event?.description }}
        </p>
      </el-col>
    </el-row>
  </div>
  <div v-else>
    Pas d'evenement trouvé
  </div>
</template>

<script lang="ts" setup>
import { perso } from "@/store/personnage";
import { computed, defineProps } from "vue";

const props = defineProps({
  id: {
    require: true,
    type: String,
  },
});

const event = computed(() =>
  perso.value?.eventUsers.edges.find((val) => val.node.event?.id === props.id)
);

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
