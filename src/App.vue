<template>
  <div :style="{ backgroundImage: 'url(' + image + ')' }" style="height: 100%">
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-var-requires
const image = require("@/assets/wallpaperbetter.com_1920x1200.jpg");
</script>

<style lang="scss">
@font-face {
  font-family: "Berry_Rotunda";
  src: local("Berry_Rotunda"),
    url("./assets/font/Berry_Rotunda.ttf") format("truetype");
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

h2 {
  font-family: "Berry_Rotunda";
  color: rgb(37, 62, 146);
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
  margin: 0 0 10px;
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
</style>
