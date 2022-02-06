<template>
  <el-row justify="center" align="middle">
    <el-col :span="6">
      <h2>Veuillez vous connecter via Discord</h2>
      <a id="login" :href="href">
        <img :src="logo" />
      </a>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo = require("../assets/discord-logo.png");

const href = `https://discord.com/api/oauth2/authorize?client_id=${process.env.VUE_APP_DISCORD_CLIENT_ID}&redirect_uri=http%3A%2F%2Fles-francs.fr%2F&response_type=code&scope=guilds.members.read%20identify`;
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
