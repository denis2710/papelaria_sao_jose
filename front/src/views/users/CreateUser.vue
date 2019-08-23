<template>
  <div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-widget title="Cadastrar Usuário">
            <div slot="widget-content">
              <v-container>

                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Login</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field v-model="user.username" name="input-1" label="Login do usuário" color="primary" id="name"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Senha</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field v-model="user.password" type="password"  name="input-1" label="Senha" color="primary" id="password"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Nome</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field v-model="user.firstname" name="input-1" label="Nome do usuário" color="primary" id="name"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Sobrenome</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field v-model="user.lastname" name="input-1" label="Sobrenome do usuário" color="primary" id="name"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row v-if="messageError">
                  <v-flex xs12>
                    <v-alert outline color="red" align-center justify-center icon="warning" :value="true">
                      {{messageError}}
                    </v-alert>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs5>
                    <v-btn block color="error" >Cancelar</v-btn>
                  </v-flex>

                  <v-flex xs8>
                    <v-btn block color="success" @click="create" :loading="loadingCreate" >Cadastrar</v-btn>
                  </v-flex>

                </v-layout>

              </v-container>
            </div>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from "@/components/VWidget"
import { createUser } from '../../api/requestsApi';

export default {
  components: {
    VWidget
  },
  data() {
    return {
      loadingCreate: false,
      messageError: "",
      user: {
        username: "",
        password: "",
        firstname: "",
        lastname: "",
      },

    }
  },
  computed: {},
  methods: {
    async create () {
      if( this.passInValidation(this.user) ){
        const returnApi = await createUser(this.user)
        if(returnApi.status === 201){
            this.$router.push("/users/all");
        }
      }
    },
    cancel() {
      this.$router.push("/users/all");
    },

    passInValidation(user) {

      let validated = true;
      this.messageError = ""

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
        this.showError("O campo sobrenome deve ter mais de 3 caracteres")
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

