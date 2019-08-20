<template>
  <div id="page-text-fields">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-widget title="Cadastrar Produto">
            <div slot="widget-content">
              <v-container>

                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Produto</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field name="input-1" label="Nome do produto" color="primary" id="name"></v-text-field>
                  </v-flex>
                </v-layout>
                
                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Cor</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field name="input-1" label="Cor" color="primary" id="color"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Descriçãos</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field
                      name="input-5"
                      label="Descrição do produto"
                      value="Input text"
                      color="teal"
                      multi-line
                    ></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Preço</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field label="Valor" :value="preco" prefix="R$"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Peso</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field label="Peso" suffix="gramas"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs5>
                    <v-btn block color="error" :loading="loading">Cancelar</v-btn>
                  </v-flex>
                  
                  <v-flex xs8>                    
                    <v-btn block color="success" :loading="loading">Cadastrar</v-btn>
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
export default {
  components: {
    VWidget
  },
  data() {
    return {
      name: "",
      preco: "10.00",
      rules: {
        required: value => !!value || "Required.",
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || "Invalid e-mail."
        }
      }
    }
  },
  computed: {},
  methods: {}
}
</script>
