<template>
  <div id="users">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-data-table :headers="users.headers" :items="users.items" :items-per-page="5" class="elevation-1">
            <template slot="items" slot-scope="props">
              <td>{{ props.item.id }}</td>
              <td>{{ props.item.username }}</td>
              <td>{{ props.item.firstname }}</td>
              <td>{{ props.item.lastname }}</td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>

import {  getAllUsers } from '../../api/requestsApi';

export default {
  components: {
  },
  data() {
    return {
      items: [],
      users: {
        headers:[
          {
            text: "Id",
            value: "id"
          },
          {
            text: "Login",
            value: "username"
          },
          {
            text: "Nome",
            value: "firstname"
          },
          {
            text: "Sobrenome",
            value: "lastname"
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
      this.users.items = await getAllUsers()
    },
  }
}
</script>