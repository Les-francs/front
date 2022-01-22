<template>
  <el-row justify="center" align="middle">
    <el-col :span="6">
      <el-row>
        <el-col>
          <input
            @keypress.enter="onSubmit"
            v-model="form.name"
            placeholder="Identifiant..."
          />
        </el-col>
        <el-col>
          <input
            @keypress.enter="onSubmit"
            v-model="form.password"
            placeholder="Mot de passe..."
            type="password"
          />
        </el-col>
      </el-row>
      <button @click="onSubmit">Connexion</button>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { checkLogin } from "@/store/user";
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
  password: "",
});

const onSubmit = () => {
  checkLogin({ username: form.name, password: form.password });
};
</script>

<style lang="scss" scoped>
input {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

button {
  width: auto;
  height: auto;
  background-color: rgba(100, 60, 28, 0.8);
  border-radius: 10px;
}
.el-row {
  height: 100%;
}
</style>
