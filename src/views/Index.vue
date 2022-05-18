<template>
  <div>
    <index-navbar />
    <section
      class="header relative pt-16 items-center flex h-screen max-h-860-px"
    >
      <div class="container mx-auto items-center flex flex-wrap">
        <div class="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
          <div class="pt-32 sm:pt-0">
            <h2
              class="font-semibold text-4xl text-blueGray-600"
              @click="signUp()"
            >
              AlphaWave - Make your windows intelligent.
            </h2>
            <p class="mt-4 text-lg leading-relaxed text-blueGray-500">
              Automate your windows by getting started using the buttons below.
            </p>
            <div class="mt-12">
              <button
                @click="toRegister"
                class="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-emerald-500 active:bg-emerald-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Sign Up
              </button>
              <button
                @click="toLogin"
                class="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>

      <img
        class="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860-px"
        :src="patternVue"
        alt="..."
      />
    </section>

    <section class="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
      <div
        class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
            class="text-blueGray-100 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div class="container mx-auto">
        <div
          class="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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
              class="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div class="container mx-auto">
          <div class="flex flex-wrap items-center">
            <div
              class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32"
            >
              <div
                class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-emerald-500"
              >
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    class="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      class="text-emerald-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 class="text-xl font-bold text-white">
                    Control your window from anywhere
                  </h4>
                  <p class="text-md font-light mt-2 text-white">
                    Having full control over your windows has never been easier.
                    Control your windows from your phone, desktop, or any
                    internet capable device.
                  </p>
                </blockquote>
              </div>
            </div>

            <div class="w-full md:w-6/12 px-4">
              <div class="flex flex-wrap">
                <div class="w-full md:w-6/12 px-4">
                  <div class="relative flex flex-col mt-4">
                    <div class="px-4 py-5 flex-auto">
                      <div
                        class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                      >
                        <i class="fas fa-sitemap"></i>
                      </div>
                      <h6 class="text-xl mb-1 font-semibold">Automation</h6>
                      <p class="mb-4 text-blueGray-500">
                        Automate your window opening and closing
                      </p>
                    </div>
                  </div>
                  <div class="relative flex flex-col min-w-0">
                    <div class="px-4 py-5 flex-auto">
                      <div
                        class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                      >
                        <i class="fas fa-drafting-compass"></i>
                      </div>
                      <h6 class="text-xl mb-1 font-semibold">Alerts</h6>
                      <p class="mb-4 text-blueGray-500">
                        Know when your windows have been left open during cold
                        weather
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-6/12 px-4">
                  <div class="relative flex flex-col min-w-0 mt-4">
                    <div class="px-4 py-5 flex-auto">
                      <div
                        class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                      >
                        <i class="fas fa-newspaper"></i>
                      </div>
                      <h6 class="text-xl mb-1 font-semibold">Alexa Support</h6>
                      <p class="mb-4 text-blueGray-500">
                        Control your window with Amazon Alexa.
                      </p>
                    </div>
                  </div>
                  <div class="relative flex flex-col min-w-0">
                    <div class="px-4 py-5 flex-auto">
                      <div
                        class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white"
                      >
                        <i class="fas fa-file-alt"></i>
                      </div>
                      <h6 class="text-xl mb-1 font-semibold">Solar power</h6>
                      <p class="mb-4 text-blueGray-500">
                        Don't worry about changing batteries.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer-component />
  </div>
</template>


<script>
import IndexNavbar from "@/components/Navbars/IndexNavbar.vue";
import FooterComponent from "@/components/Footers/Footer.vue";
import patternVue from "@/assets/img/pattern_vue.png";
import componentBtn from "@/assets/img/component-btn.png";
import componentInfoCard from "@/assets/img/component-info-card.png";
import componentInfo2 from "@/assets/img/component-info-2.png";
import componentMenu from "@/assets/img/component-menu.png";
import componentBtnPink from "@/assets/img/component-btn-pink.png";
import login from "@/assets/img/login.jpg";
import landing from "@/assets/img/landing.jpg";

export default {
  data() {
    return {
      patternVue,
      componentBtn,
      componentInfoCard,
      componentInfo2,
      componentMenu,
      componentBtnPink,
      login,
      landing,
    };
  },
  components: {
    IndexNavbar,
    FooterComponent,
  },
  methods: {
    toLogin: function () {
      this.$router.push("/auth/login");
    },
    toRegister: function () {
      this.$router.push("/auth/register");
    },
  },
};
</script>
