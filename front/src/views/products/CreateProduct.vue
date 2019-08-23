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
                    <v-text-field v-model="product.name" name="input-1" label="Nome do produto" color="primary" id="name"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Cor</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field v-model="product.color" name="input-1" label="Cor" color="primary" id="color"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Descrição</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-textarea
                      v-model="product.description"
                      name="input-5"
                      label="Descrição do produto"
                      value="Input text"
                      color="teal"
                      multi-line
                    ></v-textarea>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Preço</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field v-model="product.price" label="Valor" type="number" :value="product.preco" prefix="R$"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Peso</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field v-model="product.weight" label="Peso" type="number" suffix="gramas"></v-text-field>
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
import { createProduct } from '../../api/requestsApi';

export default {
  components: {
    VWidget
  },
  data() {
    return {
      loadingCreate: false,
      messageError: "",
      product: {
        name: "",
        description: "",
        color: "",
        price: null,
        weight: null,
      },

    }
  },
  computed: {},
  methods: {
    async create () {
      if( this.passInValidation(this.product) ){
        const apiResult = await createProduct(this.product)
        if(apiResult.status === 201){
          this.$router.push("/products/all");
        }
      }
    },

    passInValidation(product) {
      let validated = true;

      //validate name
      if(product.name === ""){
        this.showError("O campo nome não pode estar vazio")
        validated = false
        return validated
      }

      //validate name
      if(product.name.length < 3){
        this.showError("O campo nome deve ter mais de 3 caracteres")
        validated = false
        return validated
      }

        //validate color
      if(product.color === ""){
        this.showError("O campo cor não pode estar vazio")
        validated = false
        return validated
      }

      //validate color
      if(product.color.length < 3){
        this.showError("O campo cor deve ter mais de 3 caracteres")
        validated = false
        return validated
      }



      //validate description
      if(product.description === ""){
        this.showError("O campo descrição não pode estar vazio")
        validated = false
        return validated
      }

      //validate description
      if(product.description.length < 3){
        this.showError("O campo descrição deve ter mais de 3 caracteres")
        validated = false
        return validated
      }

      //validate price
      if(product.price === ""){
        this.showError("O campo preço não pode estar vazio")
        validated = false
        return validated
      }


      //validate price
      if(product.price <= 0 ){
        this.showError("O campo preço possui um valor inválido")
        validated = false
        return validated
      }

        //validate weight
      if(product.weight === ""){
        this.showError("O campo peso não pode estar vazio")
        validated = false
        return validated
      }


      //validate weight
      if(product.weight <= 0 ){
        this.showError("O campo peso possui um valor inválido")
        validated = false
        return validated
      }

      this.messageError = ""
      return validated
    },

    showError(message){
      this.messageError = message
    }
  },

}
</script>

