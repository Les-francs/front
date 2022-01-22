<template>
  <el-row justify="start" style="padding-left: 8vw">
    <el-col :span="2">
      <button @click="eventSelected = undefined">
        <font-awesome-icon icon="arrow-left" />
      </button>
    </el-col>
  </el-row>
  <el-row class="event">
    <el-col>
      <h2>{{ event.name }}</h2>
    </el-col>
    <el-col :span="16">
      <p class="description">
        {{ event.description }}
      </p>
    </el-col>
    <el-col :span="8">
      <p class="date">
        {{ event.dateDebut }} -
        {{ event.dateFin }}
      </p>
    </el-col>
    <el-col>
      <el-row>
        <el-col>
          <el-radio v-model="presence" :label="true"> Répondu </el-radio>
          <el-radio v-model="presence" :label="false">
            En attente de réponse
          </el-radio>
        </el-col>
      </el-row>
      <el-row
        v-if="presence && event.personnages && event.personnages.length > 0"
      >
        <el-col
          :span="6"
          v-for="(personnage, key) in event.personnages"
          :key="key"
        >
          {{ personnage.personnage?.pseudo }}
          <font-awesome-icon
            v-if="personnage.participation === 'ne-sais-pas'"
            icon="question"
            class="question"
          />
          <font-awesome-icon
            v-if="personnage.participation === 'oui'"
            icon="check"
            class="check"
          />
          <font-awesome-icon
            v-if="personnage.participation === 'non'"
            icon="ban"
            class="ban"
          />
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { eventSelected, state } from "@/components/Evenements/events";
import { computed, defineProps, ref } from "vue";

const props = defineProps({
  id: {
    require: true,
    type: Number,
  },
});

const presence = ref(true);
const event = computed(
  () => state.value.filter((val) => val.id === props.id)[0]
);
</script>

<style lang="scss" scoped>
.event {
  margin-top: 2vw;
  padding: 0 4vw 0 3vw;
}
.description,
.date {
  color: #280d00 !important;
  font-style: oblique;
  font-family: "Berry_Rotunda";
}

.box-card {
  margin-bottom: 10px;
}

.date {
  font-size: smaller;
}

.ban {
  color: red;
}
.interrogation {
  color: orange;
}
.check {
  color: green;
}
</style>
