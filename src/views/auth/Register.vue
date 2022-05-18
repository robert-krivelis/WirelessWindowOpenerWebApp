<template>
  <div class="container mx-auto px-4 h-full">
    <div class="flex content-center items-center justify-center h-full">
      <div class="w-full lg:w-6/12 px-4">
        <div
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"
        >
          <div class="rounded-t mb-0 px-6 py-6">
            <div class="text-center mb-3">
              <h6 class="text-blueGray-500 text-sm font-bold">Sign up with</h6>
            </div>
            <div class="btn-wrapper text-center">
              <button
                class="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                type="button"
                @click="googleSignIn"
              >
                <img alt="..." class="w-5 mr-1" :src="google" />
                Google
              </button>
            </div>
            <hr class="mt-6 border-b-1 border-blueGray-300" />
          </div>
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <div class="text-blueGray-400 text-center mb-3 font-bold">
              <small>Or sign up with credentials</small>
            </div>
            <form>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>

              <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-blueGray-600">
                    I agree with the
                    <router-link to="/privacypolicy" class="text-emerald-500">
                      Privacy Policy
                    </router-link>
                  </span>
                </label>
              </div>

              <div class="text-center mt-6">
                <button
                  class="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import google from "@/assets/img/google.svg";
import { inject, toRefs } from "vue"; 
import { useStore } from "vuex";

export default {
  data() {
    return {
      google,
      user: {}
    };
  },
  methods: {
    async googleSignIn() {
      try {
        const googleUser = await this.$gAuth.signIn();
        if (!googleUser) {
          return null;
        }
        const first = googleUser.getBasicProfile().getGivenName();
        const last = googleUser.getBasicProfile().getFamilyName();
        const pic =  googleUser.getBasicProfile().getImageUrl();
        const email = googleUser.getBasicProfile().getEmail()
        this.$store.commit('addUserEmail', email);
        this.$store.commit('addUserName', first.concat(" ").concat(last));
        this.$store.commit('addPic', pic);
        this.$store.dispatch('fakelogin', true);
        this.$router.push("/admin/dashboard");
      } catch (error) {
        console.log(error);
        console.error(error);
      }
    },
    setup(props) {
      // setup returns the auth token, login function, and boolean isSignIn
      // props are the first optional argument of setup. Props are "properties", and are immutable.
      const Vue3GoogleOauth = inject("Vue3GoogleOauth");
      const handleClickLogin = () => {};
      const { isSignIn } = toRefs(props); //toRefs converts a reactive object to a plain object
      const store = useStore();
      return {
        Vue3GoogleOauth,
        handleClickLogin,
        isSignIn,
        store,
      };
    },
  },
};
</script>
