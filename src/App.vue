<template>
  <div :style="{ backgroundImage: 'url(' + image + ')' }" style="height: 100%">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require("@/assets/wallpaperbetter.com_1920x1200.jpg");
</script>

<style lang="scss">

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

h2 {
  color: #401500;
}

.disabled {
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
}

.fullSelect {
  width: 100%;
}

input,
select {
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0 0 10px !important;
  padding: 10px;
  border-radius: 20px;
  width: 100%;
  color: #ddd;
}

label {
  color: white;
}

::placeholder {
  color: rgba($color: #ddd, $alpha: 0.6);
}

button {
  color: white;
  background: rgba(100, 60, 28, 0.658);
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 0.6em;
  height: 38px;
  width: 38px;
  cursor: pointer;
}
</style>
