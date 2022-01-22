<template>
  <div class="event">
    <el-row>
      <el-col>
        <h2>{{ event.name }}</h2>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <p class="date">
          {{ event.dateDebut }} -
          {{ event.dateFin }}
        </p>
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <p class="description">
          {{ event.description }}
        </p>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { state } from "@/components/Evenements/events";
import { computed, defineProps } from "vue";

const props = defineProps({
  id: {
    require: true,
    type: Number,
  },
});

const event = computed(
  () => state.value.filter((val) => val.id === props.id)[0]
);
</script>

<style lang="scss" scoped>
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
