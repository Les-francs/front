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
      <h2>{{ event?.node.name }}</h2>
    </el-col>
    <el-col :span="16">
      <p class="description">
        {{ event?.node.description }}
      </p>
    </el-col>
    <el-col :span="8">
      <p class="date">
        {{ event?.node.startAt }} -
        {{ event?.node.endAt }}
      </p>
    </el-col>
    <el-col>
      <el-row style="margin-top: 20px">
        <el-col>
          <el-radio v-model="presence" :label="true"> Répondu </el-radio>
          <el-radio v-model="presence" :label="false">
            En attente de réponse
          </el-radio>
        </el-col>
      </el-row>
      <el-row
        v-if="
          presence &&
          event?.node.eventUsers &&
          event?.node.eventUsers.length > 0
        "
        style="margin-top: 20px"
      >
        <el-col
          :span="6"
          v-for="(personnage, key) in event?.node.eventUsers"
          :key="key"
          @click="openDrawer(personnage)"
          style="cursor: pointer"
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
  <DrawerPersonnage v-if="eventPersonnage" :eventPersonnage="eventPersonnage" />
</template>

<script lang="ts" setup>
import { drawerOpenned, eventSelected, events } from "@/store/events";
import { EventUser } from "@/interfaces/Personnage";
import { computed, defineProps, Ref, ref } from "vue";
import DrawerPersonnage from "./DrawerPersonnage.vue";

const props = defineProps({
  id: {
    require: true,
    type: String,
  },
});

const eventPersonnage: Ref<EventUser | undefined> = ref();

const openDrawer = (id: EventUser): void => {
  eventPersonnage.value = id;
  drawerOpenned.value = true;
};

const presence = ref(true);
const event = computed(
  () => events.value?.edges.slice().filter((val) => val.node.id === props.id)[0]
);
</script>

<style lang="scss" scoped>
.event {
  margin-top: 3vw;
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
