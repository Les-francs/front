<template>
  <el-drawer
    v-model="drawerOpenned"
    direction="btt"
    :with-header="false"
    size="300px"
  >
    <div class="body" :style="{ backgroundImage: 'url(' + image + ')' }">
      <div class="eclaircir">
        <el-row>
          <el-col :span="5" class="col-img">
            <el-tooltip
              class="box-item"
              effect="dark"
              :content="eventPersonnage?.personnage.classe"
              placement="top"
            >
              <img :src="classe" />
            </el-tooltip>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import { drawerOpenned } from "./events";

const props = defineProps({
  eventPersonnage: {
    require: true,
    type: Object,
  },
});

const classe = computed(() =>
  require("@/assets/classes/" +
    props.eventPersonnage?.personnage.classe +
    "/model.png")
);

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require("@/assets/banner-1.jpg");
</script>

<style lang="scss" scoped>
.container-image {
  padding-top: 10px;
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
}

.image {
  max-height: 200px;
  display: block;
}
.body {
  width: 100%;
  height: 100%;
  background-size: cover;

  .eclaircir {
    width: 100%;
    height: 300px;
    background-color: rgba(100, 60, 28, 0.658);

    .col-img {
      height: 300px;
      overflow: hidden;
    }

    img {
      object-fit: contain;
      width: 100%;
    }
  }
}
</style>
