<template>
  <div class="flex flex-wrap">
    <div class="w-full px-4" v-if="storeLoaded">
      <CardScheduling />
    </div>
  </div>
</template>
<script>
import CardScheduling from "@/components/Cards/CardScheduling.vue";

export default {
  components: {
    CardScheduling,
  },
  data() {
    return {
      show_scheduling: false,
    };
  },
  computed: {
    storeLoaded() {
      return this.$store.state.ready_to_load_scheduling === 1;
    },
  },
};
</script>
