<template>
  <v-card class="elevation-1 pa-3 login-card">
    <v-card-text>
      <div class="layout column align-center">
        <!-- <img src="/static/m.png" alt="Vue Material Admin" width="120" height="120" /> -->
        <h1 class="flex my-3 primary--text align-center">Papelaria São José</h1>
      </div>
      <v-form>

        <div v-if="error">
          Login ou senha inválidos
        </div>
        <v-text-field append-icon="person" name="firstname" label="Nome" type="text" v-model="user.firstname" ></v-text-field>
        <v-text-field append-icon="person" name="sobrenome" label="Sobrenome" type="text" v-model="user.lastname" ></v-text-field>
        <v-text-field append-icon="person" name="login" label="Login" type="text" v-model="user.username" ></v-text-field>
        <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password" v-model="user.password"></v-text-field>
      </v-form>
    </v-card-text>
    <div class="login-btn">
      <v-btn block color="primary" @click="createAccount" :loading="loading">Cadastrar</v-btn>
    </div>
    <div class="login-btn">
      <v-btn block color="primary" @click="login" :loading="loading">Já possui uma conta ? </v-btn>
    </div>
  </v-card>
</template>

<script>
import { createUser } from '../../api/requestsApi';

export default {
  data: () => ({
    loading: false,
    error: false,
    user: {
      firstname: "",
      lastname: "",
      username: "",
      password: ""
    }
  }),

  methods: {
    login() {
      this.loading = true
      this.$router.push("/auth/login");
    },

    async createAccount(){
        const returnApi = await createUser(this.user)
        console.log(returnApi)
        if(returnApi.status === 201){
            this.$router.push("/conta_criada");
        }
    }
  }
}
</script>
<style scoped lang="css"></style>
