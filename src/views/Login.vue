<template>
  <el-row justify="center" align="middle">
    <el-col :span="6">
      <h2>Veuillez vous connecter via Discord</h2>
      <a
        id="login"
        href="https://discord.com/api/oauth2/authorize?client_id=937049622784917565&redirect_uri=http%3A%2F%2Flocalhost%3A8081%2F&response_type=code&scope=identify%20guilds%20email"
      >
        <img :src="logo" />
      </a>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require("../assets/discord-logo.png");
</script>

<style lang="scss" scoped>
input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

img {
  width: 300px;
  height: auto;
}
.el-row {
  height: 100%;
}
</style>
