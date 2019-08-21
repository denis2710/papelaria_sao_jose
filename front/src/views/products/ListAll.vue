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
              <td>{{ props.item.price }}</td>
              <td>{{ props.item.weight }}</td>
              <td>
                <v-btn depressed outline icon fab dark color="primary" small>
                  <v-icon>edit</v-icon>
                </v-btn>
                <v-btn depressed outline icon fab dark color="pink" small>
                  <v-icon>delete</v-icon>
                </v-btn>
              </td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import { getAllProducts } from '../../api/requestsApi';

export default {
  components: {
  },
  data() {
    return {
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
            text: "A��es",
            value: "actions"
          },
        ],
        items: []
      }
    }
  },
  created() {
    this.products.items =  getAllProducts()
  },
  methods: {

  }
}
</script>