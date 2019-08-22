<template>
  <div id="products">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-data-table :headers="products.headers" :items="products.items" :items-per-page="5" class="elevation-1">
            <template slot="items" slot-scope="props">
              <td>{{ props.item.id }}</td>
              <td>{{ props.item.name }}</td>
              <td>{{ props.item.color }}</td>
              <td>R$ {{ props.item.price.toFixed(2) }}</td>
              <td>{{ props.item.weight }}g</td>
              <td>{{ props.item.active ? 'Ativo' : 'Suspenso' }}</td>
              <td>
                <v-tooltip left >
                  <v-btn depressed outline icon fab dark color="primary" @click="edit(props.item.id)" small slot="activator" class="my-0">
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <span>Editar</span>
                </v-tooltip>

                <v-tooltip right v-if="props.item.active" >
                  <v-btn  depressed outline icon fab dark color="red" @click="remove(props.item.id)" small slot="activator" class="my-0">
                    <v-icon>delete</v-icon>
                  </v-btn>
                  <span>Suspender</span>
                </v-tooltip>

                <v-tooltip right v-else >
                  <v-btn  depressed outline icon fab dark color="green" @click="reative(props.item.id)" small  slot="activator" class="my-0">
                    <v-icon>delete_outline</v-icon>
                  </v-btn>
                  <span>Ativar</span>
                </v-tooltip>


              </td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import { getAllProducts, removeProduct, reativeItem } from '../../api/requestsApi';

export default {
  components: {
  },
  data() {
    return {
      items: [],
      products: {
        headers:[
          {
            text: "Id",
            value: "id"
          },
          {
            text: "Produto",
            value: "name"
          },
          {
            text: "Cor",
            value: "color"
          },
          {
            text: "Preço",
            value: "price"
          },
          {
            text: "Peso",
            value: "weight"
          },
          {
            text: "Status",
            value: "actions"
          },
          {
            text: "Ações",
            value: "actions"
          },
        ],
        items: this.items
      }
    }
  },
  async created() {
    await this.updateList()
  },
  methods: {
    async updateList(){
      this.products.items = await getAllProducts()
    },

    async remove(id) {
      await removeProduct(id)
      await this.updateList()
    },

    async reative(id) {
      await reativeItem(id)
      await this.updateList()
    },

    async edit(id) {
        this.$router.push(`/products/edit/${id}`);
    }

  }
}
</script>