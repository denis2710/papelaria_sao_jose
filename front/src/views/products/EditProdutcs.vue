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
                    <v-text-field v-model="product.price" label="Valor" :value="product.preco" prefix="R$"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs4>
                    <v-subheader>Peso</v-subheader>
                  </v-flex>
                  <v-flex xs8>
                    <v-text-field v-model="product.weight" label="Peso" suffix="gramas"></v-text-field>
                  </v-flex>
                </v-layout>

                <v-layout row>
                  <v-flex xs5>
                    <v-btn block color="error" @click="cancel" >Cancelar</v-btn>
                  </v-flex>

                  <v-flex xs8>
                    <v-btn block color="success" @click="update" :loading="loadingCreate" >Atualizar</v-btn>
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
import { getProductById, updateProduct } from '../../api/requestsApi';

export default {
  components: {
    VWidget
  },
  data() {
    return {
      loadingCreate: false,
      id: null,
      product: {
        name: "",
        description: "",
        color: "",
        price: "",
        weight: "",
      },

    }
  },
  async created() {
    this.id = this.$route.params.id
    this.product = await getProductById(this.id);
  },
  methods: {
    async update () {
      const apiResult = await updateProduct(this.id, this.product)
      if(apiResult.status === 200){
        this.$router.push("/products/all");
      }
    },

    async cancel () {
        this.$router.push("/products/all");
    }

  }
}
</script>

