<template>
  <div id="pageDashboard">
    <v-container grid-list-xl fluid v-if="showDashboard">
      <v-layout row wrap>
        <!-- mini statistic start -->
        <v-flex lg3 sm6 xs12>
          <mini-statistic icon="assessment" :title="qtdProd" sub-title="Itens Total" color="indigo"> </mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic icon="book" :title="qtdHist" sub-title="Logs no Histórico" color="orange"> </mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic icon="check_circle_outline" :title="qtdActive" sub-title="Itens Ativos" color="green"> </mini-statistic>
        </v-flex>
        <v-flex lg3 sm6 xs12>
          <mini-statistic icon="highlight_off" :title="qtdRemoved" sub-title="Itens Removidos" color="red"> </mini-statistic>
        </v-flex>
        <!-- mini statistic  end -->
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { getResumes } from '../api/requestsApi';


import API from "@/api"
import EChart from "@/components/chart/echart"
import MiniStatistic from "@/components/widgets/statistic/MiniStatistic"
import PostListCard from "@/components/widgets/card/PostListCard"
import ProfileCard from "@/components/widgets/card/ProfileCard"
import PostSingleCard from "@/components/widgets/card/PostSingleCard"
import WeatherCard from "@/components/widgets/card/WeatherCard"
import PlainTable from "@/components/widgets/list/PlainTable"
import PlainTableOrder from "@/components/widgets/list/PlainTableOrder"
import VWidget from "@/components/VWidget"
import Material from "vuetify/es5/util/colors"
import VCircle from "@/components/circle/VCircle"
import BoxChart from "@/components/widgets/chart/BoxChart"
import ChatWindow from "@/components/chat/ChatWindow"
import CircleStatistic from "@/components/widgets/statistic/CircleStatistic"
import LinearStatistic from "@/components/widgets/statistic/LinearStatistic"
export default {
  components: {
    VWidget,
    MiniStatistic,
    ChatWindow,
    VCircle,
    WeatherCard,
    PostSingleCard,
    PostListCard,
    ProfileCard,
    EChart,
    BoxChart,
    CircleStatistic,
    LinearStatistic,
    PlainTable,
    PlainTableOrder
  },
  data: () => ({
    showDashboard: false,
    qtdProd: "",
    qtdHist: "",
    qtdActive: "",
    qtdRemoved: "",
  }),
  computed: {

  },
  async created() {
    try{
      const returnApi = await getResumes()

      this.qtdActive = String(returnApi.data.activedProd)
      this.qtdRemoved = String(returnApi.data.removedProd)
      this.qtdHist = String(returnApi.data.totalHist)
      this.qtdProd = String(returnApi.data.totalProd)
      this.showDashboard = true;
    } catch( err) {
      console.log(err)
    }
  }
}
</script>
