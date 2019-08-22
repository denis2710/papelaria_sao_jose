<template>
  <v-timeline>
    <v-timeline-item
      v-for="item in history"
      :key="item.id"
      :color="getColorByAction(item.action)"
      large
    >
      <template v-slot:opposite>
        <span>
          <b>{{ item.user.firstname }}</b>
          {{getAction(item.action)}} esse produto dia
          {{ new Date(item.date).toLocaleDateString() }} às
          {{ new Date(item.date).toLocaleTimeString().substring(0, 5) }}
          </span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">{{item.product.name}}</v-card-title>
        <v-card-text v-if="item.action === 'update' ">
          <div class="before" v-if="JSON.parse(item.changes).before" >
              <b>Antes da alteracao:</b>
             <div v-html="getBeforeData(item.changes)"></div>
          </div>
          <div class="after" v-if="JSON.parse(item.changes).after" >
              <b>Depois da alteracao:</b>
             <div v-html="getAfterData(item.changes)"></div>
          </div>
          <div class="after"></div>
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>


<script>

import { getHistory } from '../../api/requestsApi';

export default {
  components: {
  },
  data() {
    return {
      history: [],
    }
  },
  async created() {
    await this.updateHistory()
  },
  methods: {
    async updateHistory(){
      const apiReturn = await getHistory()
      this.history = apiReturn.data
      console.log(this.history)
    },

    getColorByAction(action){
      switch (action) {
        case "create":
          return "green lighten-2"
          break;

        case "delete":
          return "red lighten-2"
          break;

        case "update":
          return "blue lighten-2"
          break;

        case "activate":
          return "orange lighten-2"
          break;

        default:
          return "gray lighten-2"
          break;
      }

    },

    getAction(action){
      switch (action) {
        case "create":
          return "criou"
          break;

        case "delete":
          return "removeu"
          break;

        case "update":
          return "atualizou"
          break;

        case "activate":
          return "reativou"
          break;

        default:
          return ""
          break;
      }

    },

    getNomeCampo(campo){
      switch (campo) {

        case "name":
          return "nome"
          break;

        case "description":
          return "descrição"
          break;

        case "color":
          return "cor"
          break;

        case "weight":
          return "peso"
          break;

        case "price":
          return "preço"
          break;

      }

    },

    getBeforeData(content) {
      const fullContent = JSON.parse(content);
      const before = fullContent.before;
      return this.getUlDiferences(before)
    },

    getAfterData(content) {
      const fullContent = JSON.parse(content);
      const after = fullContent.after;
      return this.getUlDiferences(after)
    },

    getUlDiferences(content) {

      let ulDiferencas ="<ul>"
      Object.keys(content).forEach(key => {
          ulDiferencas += `<li>${this.getNomeCampo(key)} : ${content[key]} </li>`
      })

      ulDiferencas += "</ul>"

      return ulDiferencas
    }
  }
}
</script>