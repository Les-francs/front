<template>
  <el-row justify="center" align="middle">
    <el-col :span="6">
      <el-row>
        <el-col>
          <input v-model="form.name" placeholder="Identifiant..." />
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <input
            v-model="form.password"
            placeholder="Mot de passe..."
            type="password"
          />
        </el-col>
      </el-row>
      <el-button type="primary" @click="onSubmit">Connexion</el-button>
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
.el-row {
  height: 100%;
}

input {
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0 0 10px;
  padding: 10px;
  border-radius: 20px;
  width: 100%;
  color: #ddd;
}

::placeholder {
  color: rgba($color: #ddd, $alpha: 0.6);
}
</style>
