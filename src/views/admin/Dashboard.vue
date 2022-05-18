<template>
  <div>
    <div class="flex flex-wrap">
      <div class="w-full mb-12 xl:mb-0 px-4">
        <CardScheduling />
      </div>
    </div>
    <div class="flex flex-wrap mt-4">
      <div class="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
        <card-line-chart v-if="storeLoaded"/>
      </div>
    </div>
  </div>
</template>
<script>
import CardLineChart from "@/components/Cards/CardLineChart.vue";
import CardScheduling from "@/components/Cards/CardScheduling.vue";
import { useStore } from "vuex";

export default {
  name: "dashboard-page",
  data() {
    return {
      user: {},
    };
  },
  created() {
    if (this.$store.getters.getLoginState == false) {
      // ensure user is logged in before accessing this component
      window.location.href = "/auth/login";
    }
  },
  components: {
    CardLineChart,
    CardScheduling,
  },
  setup() {
    const store = useStore();
    return { store };
  },
  computed: {
    storeLoaded() {
      return this.$store.state.ready_to_load_scheduling === 1;
    },
  },
};
</script>
