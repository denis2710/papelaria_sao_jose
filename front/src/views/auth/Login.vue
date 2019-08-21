<template>
  <v-card class="elevation-1 pa-3 login-card">
    <v-card-text>
      <div class="layout column align-center">
        <img src="/static/m.png" alt="Vue Material Admin" width="120" height="120" />
        <h1 class="flex my-3 primary--text align-center">Papelaria São José</h1>
      </div>
      <v-form>

        <div v-if="error">
          Login ou senha inválidos
        </div>
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
  </v-card>
</template>

<script>
import store from "./../../store";

export default {
  data: () => ({
    loading: false,
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
    }
  }
}
</script>
<style scoped lang="css"></style>
