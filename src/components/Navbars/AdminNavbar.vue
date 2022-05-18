<template>
  <!-- Navbar -->
  <nav
    class="
      shadow
      top-0
      left-0
      w-full
      z-50
      
      md:flex-row md:flex-nowrap md:justify-start
      flex-row flex-nowrap justify-start 
      items-center
      p-4
    "
  >

    <div
      class="
        w-full
        mx-auto
        items-center
        flex
        justify-between
        md:flex-nowrap
        flex-wrap
        md:px-10
        px-4
      "
    >
      <!-- Brand -->
      <a
        class="
          text-blueGray-500 text-lg
          uppercase
          hidden
          lg:inline-block
          font-semibold
        "
        href="javascript:void(0)"
        > Device Dashboard
      </a>
      

      <!-- User -->
      <ul class="flex-col md:flex-row list-none items-center hidden md:flex">
        <user-dropdown/>
      </ul>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<script>
import UserDropdown from "@/components/Dropdowns/UserDropdown.vue";

export default {
  components: {
    UserDropdown
  },
};
</script>
