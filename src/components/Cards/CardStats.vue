<template>
  <div
    class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 shadow-lg"
  >
    <div class="flex-auto p-4">
      <div class="flex flex-wrap w-full">
        <div class="w-full pr-4 max-w-full flex-grow flex-1">
          <!-- device name -->
          <span
            contenteditable="true"
            max="12"
            @input="updatename"
            @focus="focus"
            @blur="blur"
            class="text-blueGray-400 pr-4 w-full text-right items-end uppercase font-bold text-xs"
          >
            {{ statSubtitle }}
          </span>

          <i
            class="fas fa-pencil-alt text-blueGray-400 fa-sm xl:fa-3x select-none"
          ></i>

          <!--  toggle -->
          <span
            href="javascript:void(0);"
            class="font-semibold text-xl block text-blueGray-700 pt-2 cursor-not-allowed select-none"
            contenteditable="false"
          >
            <!-- this above controls the block with the toggle and the text -->
            <span v-show="value"> Open </span> 
            <span v-show="!value"> Closed </span> 
            <span class="px-1"></span> 
            <Toggle
              contenteditable="false"
              :classes="{
                container:
                  'cursor-not-allowed inline-block rounded-full outline-none',
                toggle:
                  'flex w-12 h-5 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none',
              }"
              v-model="value"
              @change="handleToggle($event, statSubtitle)"
            />
          </span>
        </div>
      </div>
      <p class="text-sm text-blueGray-400 mt-4">
        <span class="mr-2" :class="[statPercentColor]">
          <i
            :class="[
              statArrow === 'up'
                ? `fas fa-battery-three-quarters`
                : `fas fa-battery-quarter`,
            ]"
          ></i>
          {{ statPercent }}%
        </span>
        <span class="whitespace-nowrap">{{ statDescripiron }}</span>
        <br />
        <span class="mr-2" :class="[statTempColor]">
          <i :class="[statArrow === 'up' ? `far fa-sun` : `far fa-sun`]"></i>
          {{ statTemperature }}°C
        </span>
        <span class="mr-2"> degrees </span>
      </p>
    </div>
  </div>
</template>

<script>
import Toggle from "@vueform/toggle";
import pencilgray from "@/assets/img/pencil-gr.png";
import axios from "axios"; //for interacting with AWS api gateway
import { useStore } from "vuex";
import { inject, toRefs } from "vue";
export default {
  name: "card-stats",
  components: {
    Toggle,
  },
  props: {
    statSubtitle: {
      type: String,
      default: "Device 1",
    },
    statTitle: {
      type: String,
      default: "Device 1 Open",
    },
    statArrow: {
      // could change this to change the image of the battery depending on the remaining battery level :)
      default: "up",
      validator: function (value) {
        // The value must match one of these strings
        return ["up", "down"].indexOf(value) !== -1;
      },
    },
    statPercent: {
      type: String,
      default: "3.48",
    },
    statPercentColor: {
      // can be any of the text color utilities
      // from tailwindcss
      type: String,
      default: "text-emerald-500",
    },
    statTempColor: {
      // can be any of the text color utilities
      // from tailwindcss
      type: String,
      default: "text-yellow-300",
    },
    statDescripiron: {
      type: String,
      default: "Since last month",
    },
    statTemperature: {
      type: String,
      default: "21.1",
    },
    statIconName: {
      type: String,
      default: "far fa-chart-bar",
    },
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: {
      type: String,
      default: "bg-red-500",
    },
    statToggleValue: {
      type: String,
      default: "Open",
    },
  },
  data: function () {
    return {
      value: true,
      user: "",
      pencilgray,
      window1_state: this.statToggleValue,
    };
  },
  methods: {
    async updatename(e) {
      //updates name of devices
      var str = e.target.innerText;
      if (str.includes("\n")) {
        str = str.replace("\n", "");
        e.target.innerText = str;
        var parameters =
          "oldDeviceName=" +
          this.statSubtitle +
          "&email=" +
          this.$store.state.email +
          "&newDeviceName=" +
          str;

        axios
          .get(
            "https://61hqrv2g68.execute-api.us-west-2.amazonaws.com/default/RenameDevice?" +
              parameters
          )
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },

    async handleToggle(event, deviceName) {
      var WINDOW_STATE;
      if (this.value == false) {
        WINDOW_STATE = 0;
        this.$store.state.shadowResponse[0].shadow.state.reported.WINDOW_OPEN = false;
      } else if (this.value == true) {
        WINDOW_STATE = 1;
        this.$store.state.shadowResponse[0].shadow.state.reported.WINDOW_OPEN = true;
      }
      var parameters =
        "WINDOW_STATE=" +
        String(WINDOW_STATE) +
        "&email=" +
        this.$store.state.email +
        "&deviceName=" +
        deviceName;
      axios
        .get(
          "https://00qwazed68.execute-api.us-west-2.amazonaws.com/writeShadow?" +
            parameters
        )
        .then((response) => {
          if (response.data.startsWith("device not found")) {
            console.log("device not found");
          }
        })
        .catch((error) => {
          console.log(error);
        });

    },
    updateValue() {
    },
  },
  watch: {
    value() {
      this.updateValue();
    },
  },
  setup(props) {
    const { isSignIn } = toRefs(props);
    const Vue3GoogleOauth = inject("Vue3GoogleOauth");
    const handleClickLogin = () => {};
    const store = useStore();
    return {
      Vue3GoogleOauth,
      handleClickLogin,
      isSignIn,
      store,
      props,
    };
  },
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>
// style for the toggle
