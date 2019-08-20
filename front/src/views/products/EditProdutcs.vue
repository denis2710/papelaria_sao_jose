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
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import {HTTP} from '../../common/http-common';

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
        ],
        items: []
      }
    }
  },
  created() {

    HTTP.get('products', null, { useCredentails: true })
    .then(response => {
      console.log(response.data)
      this.products.items = response.data
    })
  },
  methods: {

  }
}
</script>