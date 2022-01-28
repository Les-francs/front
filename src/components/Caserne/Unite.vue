<template>
  <div
    class="unite"
    :class="perso.unites[uniteId].unite.rarity"
    @click="perso.unites[uniteId].drawer = true"
  >
    <el-row>
      <el-col class="container-image">
        <img :src="img" class="image" fit="contain" />
      </el-col>
    </el-row>
    <el-row align="middle" class="unite_name">
      <el-col>
        <span>{{ perso.unites[uniteId].unite.name }}</span>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8"> type </el-col>
      <el-col :span="16">
        {{ perso.unites[uniteId].unite.type }}
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8"> Influence </el-col>
      <el-col :span="16">
        {{ perso.unites[uniteId].unite.influence }}
      </el-col>
    </el-row>
    <el-row align="middle">
      <el-col :span="8"> Maitrise </el-col>
      <el-col :span="16">
        {{ maitrises[perso.unites[uniteId].maitrise] }}
      </el-col>
    </el-row>
  </div>
  <el-drawer
    v-model="perso.unites[uniteId].drawer"
    direction="btt"
    :with-header="false"
    size="300px"
  >
    <div class="body" :style="{ backgroundImage: 'url(' + image + ')' }">
      <div class="eclaircir">
        <el-row>
          <el-col :span="5" class="col-img">
            <img :src="img" fit="cover" />
          </el-col>
          <el-col :span="3">
            <el-row align="middle" style="height: 100%">
              <el-col>
                <label>Maitrise</label>
                <select
                  v-model="perso.unites[uniteId].maitrise"
                  name="maitrise"
                >
                  <option
                    v-for="(label, key) in maitrises"
                    :key="key"
                    :value="key"
                  >
                    {{ label }}
                  </option>
                </select>
                <label>Niveau</label>
                <input
                  v-model="perso.unites[uniteId].level"
                  placeholder="Niveau..."
                  type="number"
                />
              </el-col>
            </el-row>
          </el-col>
          <el-col :span="1" :offset="15">
            <button @click="perso.unites.splice(uniteId, 1)">
              <font-awesome-icon icon="trash" />
            </button>
          </el-col>
        </el-row>
      </div>
    </div>
  </el-drawer>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import { perso } from "@/store/personnage";
import maitrises from "@/enum/maitrises";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require("@/assets/banner-1.jpg");

const props = defineProps({
  uniteId: {
    required: true,
    type: Number,
  },
});

// eslint-disable-next-line @typescript-eslint/no-var-requires
const img = require("@/assets/unites/" +
  perso.value.unites[props.uniteId].unite.pict);
</script>

<style lang="scss" scoped>
button {
  background-color: rgba(128, 36, 36, 0.658);
  margin-top: 10px;
}
.unite {
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  height: 320px;
  cursor: pointer;

  .unite_name {
    margin: 5px 0;
    height: 40px;
  }
}
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
      object-fit: cover;
    }
  }
}

.rustic {
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    color-stop(0.2, rgba(255, 255, 255, 0)),
    to(rgb(149, 150, 145))
  );
}
.chivalric {
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    color-stop(0.2, rgba(255, 255, 255, 0)),
    to(rgb(77, 193, 105))
  );
}
.silver {
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    color-stop(0.2, rgba(255, 255, 255, 0)),
    to(rgb(52, 143, 214))
  );
}
.heroic {
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    color-stop(0.2, rgba(255, 255, 255, 0)),
    to(rgb(161, 97, 191))
  );
}
.golden {
  background: -webkit-gradient(
    linear,
    0% 0%,
    0% 100%,
    color-stop(0.2, rgba(255, 255, 255, 0)),
    to(rgb(205, 120, 46))
  );
}
</style>
