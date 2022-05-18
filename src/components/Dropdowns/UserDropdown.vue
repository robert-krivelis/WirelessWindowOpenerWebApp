<template>
  <div>
    <a
      class="text-blueGray-500 block"
      href="user"
      ref="btnDropdownRef"
      v-on:click="toggleDropdown($event)"
    >
      <div class="items-center flex">
        <span
          class="md:absolute right-0 top-0 md:invisible w-12 h-12 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
        >
          <img
            alt="..."
            class="w-full rounded-full align-middle border-none shadow-lg"
            :src="image"
          />
        </span>
      </div>
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
      v-bind:class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow,
      }"
    >
      <a
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        <strong>{{ $store.state.name }}</strong>
      </a>
      
       
      <div class="h-0 my-2 border border-solid border-blueGray-100" />
      <a
        @click="logout"
        href="javascript:void(0);"
        class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Logout
      </a>
    </div>
  </div>
</template>

<script>
import { createPopper } from "@popperjs/core";
import { useStore } from "vuex";
export default {
  data() {
    return {
      dropdownPopoverShow: false,
      image: this.$store.getters.getPic,
    };
  },
  methods: {
    toggleDropdown: function (event) {
      event.preventDefault();
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false;
      } else {
        this.dropdownPopoverShow = true;
        createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: "bottom-start",
        });
      }
    },
    logout: function() {
      this.$store.dispatch("fakelogout", false);
      this.$router.push({ name: "index", path:"/" });
    },
    
  },
  setup() {
    const store = useStore();
    
    return { store };
  },
};
</script>
