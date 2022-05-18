<template>
  <footer class="relative bg-blueGray-200 pt-8 pb-6">
    <div
      class="
        bottom-auto
        top-0
        left-0
        right-0
        w-full
        absolute
        pointer-events-none
        overflow-hidden
        -mt-20
        h-20
      "
      style="transform: translateZ(0)"
    >
      <svg
        class="absolute bottom-0 overflow-hidden"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        version="1.1"
        viewBox="0 0 2560 100"
        x="0"
        y="0"
      >
        <polygon
          class="text-blueGray-200 fill-current"
          points="2560 0 2560 100 0 100"
        ></polygon>
      </svg>
    </div>
    <div class="container mx-auto px-4">
      <h4 class="text-3xl mx-auto mt-0 mb-2 text-center font-semibold">
        Contact Us
      </h4>
      <div class="flex flex-wrap mx-auto text-center">
        <div class="flex flex-wrap mx-auto text-center">
          <h5 class="text-lg mt-0 mb-2 text-blueGray-600 max-w-1/6">
            Click below to send our team an email.<br>We respond 1-2 business days.
            <div class="mx-auto text-center py-8">
              <a
                href="mailto: l02aezups@mozmail.com"
                target="_blank"
                class="
                  get-started
                  text-white
                  font-bold
                  px-6
                  py-4
                  rounded
                  outline-none
                  focus:outline-none
                  mr-1
                  mb-2
                  bg-emerald-500
                  active:bg-emerald-600
                  uppercase
                  text-sm
                  shadow
                  hover:shadow-lg
                  ease-linear
                  transition-all
                  duration-150
                "
                >Email Us</a
              >
            </div>
          </h5>
        </div>
      </div>

      <!-- div with class = full  -->
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6"></div>
      </div>
      <!-- <hr class="my-6 border-blueGray-300" /> -->
      <div
        class="flex flex-wrap items-center md:justify-between justify-center"
      >
        <div class="w-full md:w-4/12 px-4 mx-auto text-center">
          <div class="text-sm text-blueGray-500 font-semibold py-1">
            AlphaWave {{ year }}
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
