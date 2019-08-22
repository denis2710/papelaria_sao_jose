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
      user: {
        login: "",
        password: "",
        firstname: "",
        lastname: "",
      },

    }
  },
  computed: {},
  methods: {
    async create () {
        const returnApi = await createUser(this.user)
        if(returnApi.status === 201){
            this.$router.push("/users/all");
        }
    }
  }
}
</script>

