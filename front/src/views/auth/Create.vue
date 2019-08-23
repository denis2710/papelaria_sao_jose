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

        <v-text-field append-icon="person" name="firstname" label="Nome" type="text" v-model="user.firstname" ></v-text-field>
        <v-text-field append-icon="person" name="sobrenome" label="Sobrenome" type="text" v-model="user.lastname" ></v-text-field>
        <v-text-field append-icon="person" name="login" label="Login" type="text" v-model="user.username" ></v-text-field>
        <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password" v-model="user.password"></v-text-field>
      </v-form>
    </v-card-text>

    <v-layout row v-if="messageError">
      <v-flex xs12>
        <v-alert outline color="red" align-center justify-center icon="warning" :value="true">
          {{messageError}}
        </v-alert>
      </v-flex>
    </v-layout>

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
    messageError: "",
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
      if (this.passInValidation(this.user)) {
        const returnApi = await createUser(this.user)
        if(returnApi.status === 201){
            this.$router.push("/auth/login");
        }
      }
    },

    passInValidation(user) {
      console.log(user)
      let validated = true;
      this.messageError = ""

     //validate firstname
      if(user.firstname === ""){
        this.showError("O campo nome não pode estar vazio")
        validated = false
        return validated
      }

      //validate firstname
      if(user.firstname.length < 3){
        this.showError("O campo nome deve ter mais de 3 caracteres")
        validated = false
        return validated
      }

      //validate lastname
      if(user.lastname === ""){
        this.showError("O campo sobrenome não pode estar vazio")
        validated = false
        return validated
      }

      //validate lastname
      if(user.lastname.length < 3){
        this.showError("O campo nome deve ter mais de 3 caracteres")
        validated = false
        return validated
      }

      //validate username
      if(user.username === ""){
        this.showError("O campo login não pode estar vazio")
        validated = false
        return validated
      }

      //validate username
      if(user.username.length < 3){
        this.showError("O campo login deve ter mais de 3 caracteres")
        validated = false
        return validated
      }

        //validate password
      if(user.password === ""){
        this.showError("O campo senha não pode estar vazio")
        validated = false
        return validated
      }

      //validate password
      if(user.password.length < 3){
        this.showError("O campo senha deve ter mais de 3 caracteres")
        validated = false
        return validated
      }

      return validated
    },

    showError(message){
      this.messageError = message
    }


  }
}
</script>
<style scoped lang="css"></style>
