<template>
  <v-card class="elevation-1 pa-3 login-card">
    <v-card-text>
      <div class="layout column align-center">
        <!-- <img src="/static/m.png" alt="Vue Material Admin" width="120" height="120" /> -->
        <h1 class="flex my-3 primary--text align-center">Papelaria São José</h1>
      </div>
      <v-form>

        <v-layout row v-if="error">
          <v-flex xs12>
            <v-alert outline color="red" align-center justify-center icon="warning" :value="true">
              Login ou senha inválidos
            </v-alert>
          </v-flex>
        </v-layout>

        <v-text-field
          append-icon="person"
          name="login"
          label="Login"
          type="text"
          v-model="model.username"
        ></v-text-field>
        <v-text-field
          append-icon="lock"
          name="password"
          label="Password"
          id="password"
          type="password"
          v-model="model.password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <div class="login-btn">
      <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
    </div>
    <div class="login-btn">
      <v-btn block color="primary" @click="createAccount" :loading="loading_create">Criar Conta</v-btn>
    </div>
  </v-card>
</template>

<script>
import store from "./../../store";

export default {
  data: () => ({
    loading: false,
    loading_create: false,
    error: false,
    model: {
      username: "",
      password: ""
    }
  }),



  methods: {
    login() {
      this.loading = true
      // handle login
        store.dispatch('doLogin', {username: this.model.username, password: this.model.password})
      setTimeout(() => {
        this.loading = false
        this.error = true
      }, 1000)
    },

    createAccount(){
      this.loading_create = true
      this.$router.push("/auth/create");
    }
  }
}
</script>
<style scoped lang="css"></style>
