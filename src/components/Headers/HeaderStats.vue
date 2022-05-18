<template>
  <!-- Header -->
  <div class="relative bg-emerald-600 md:pt-32 pb-32 pt-12" :key="componentKey">
    <div class="px-4 md:px-10 mx-auto w-full">
      <div>
        <!-- Card stats -->
        <div class="flex flex-wrap">
          <div
            v-show="first_device_exists"
            class="w-full lg:w-6/12 xl:w-6/12 px-4"
          >
            <card-stats
              :statSubtitle="device1_name"
              statTitle=" "
              statArrow="up"
              :statPercent="window1_battery"
              statPercentColor="text-emerald-500"
              statDescripiron="battery remaining"
              statIconName="far fa-chart-bar"
              statIconColor="bg-red-500"
              :statTemperature="window1_temp"
              statTempColor="text-amber-300"
            />
          </div>
          <div
            v-show="second_device_exists"
            class="w-full lg:w-6/12 xl:w-6/12 px-4"
          >
            <card-stats
              :statSubtitle="this.$store.state.temporaryOtherDeviceName"
              statTitle=" "
              statArrow="down"
              statPercent="10.10"
              statPercentColor="text-red-500"
              statDescripiron="battery remaining"
              statIconName="fas fa-chart-pie"
              statIconColor="bg-orange-500"
              statTemperature="23.2"
              statTempColor="text-amber-300"
            />
          </div>
          <div class="w-full lg:w-6/12 xl:w-6/12 px-4">
            <button
              href="javascript:void(0);"
              class="justify-items-center text-center relative w-full min-w-0 break-words bg-white rounded shadow-lg"
            >
              <div class="flex-auto p-0" v-on:click="addNewDevice($event)">
                <div
                  v-if="add_device_response"
                  class="h-full w-full mt-10 absolute font-bold text-xl pr-6 text-red-500 items-center text-center"
                >
                  {{ this.add_device_response }}
                </div>
                <!-- add device: -->
                <div class="flex flex-wrap w-full pt-12 text-center">
                  <div
                    class="w-full pr-4 max-w-full h-full static text-center block"
                  >
                    <span
                      href="javascript:void(0);"
                      ref="btnDropdownRef2"
                      contenteditable="false"
                      disabled="true"
                      @input="update"
                      @focus="focus"
                      @blur="blur"
                      class="text-blueGray-400 w-full h-full font-bold uppercase text-md"
                    >
                      <span class="static text-2xl text-blueGray-400">+</span>
                      <div class="inline-block ml-4 text-center mt-4">
                        Add New Device
                      </div>
                      <div class="mb-6 bg-none"></div>
                    </span>
                    <div
                      ref="popoverDropdownRef2"
                      class="bg-none text-base z-50 float-center py-2 list-none text-center rounded min-w-48"
                      v-bind:class="{
                        hidden:
                          !newDeviceScreenPopoverShow &&
                          !newDeviceScreenPopoverShow2,
                        block: newDeviceScreenPopoverShow,
                      }"
                    >
                      <div
                        class="absolute shadow-none pt-12"
                        v-click-outside="remove_popup"
                      >
                        <!-- the above makes it float down from the button above -->
                        <form
                          class="absolute inset-x-0 px-2 py-4 inset-y-12 w-32 bg-white border rounded"
                          @submit.prevent="checkForm"
                        >
                          Enter device code:
                          <br />
                          <strong>{{ add_device_response }}</strong>
                          <input
                            type="text"
                            id="myinput"
                            class="pt-2 text-gray-300 text-center"
                            placeholder="BFZ-NPH-RQM"
                            v-on:input="add_hyphen()"
                            maxlength="11"
                            novalidate="true"
                          /><br />
                        </form>
                      </div>
                    </div>

                    <!--  toggle -->
                    <span
                      href="javascript:void(0);"
                      class="absolute font-semibold text-xl inline-block align-middle text-blueGray-700"
                    >
                    </span>
                  </div>
                </div>
                <p class="text-sm text-blueGray-400 mt-4">
                  <span class="mr-2"> </span>
                  <span class="whitespace-nowrap"></span>
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardStats from "@/components/Cards/CardStats.vue";
import axios from "axios";
import { createPopper } from "@popperjs/core";
import vClickOutside from "click-outside-vue3";

export default {
  components: {
    CardStats,
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      window1_state: "Closed",
      window1_temp: null,
      window2_state: "Open",
      newDeviceScreenPopoverShow: false,
      newDeviceScreenPopoverShow2: false, // allows to click on the form box without closing popup
      dropdownPopoverShow: false,
      first_device_exists: false,
      second_device_exists: false,
      device_code: null,
      errors: [],
      add_device_response: null,
      device1_name: null,
      window1_battery: null,
      window1_statetf: null,
      componentKey: 0,
    };
  },
  created() {
    this.getAWSState();
  },
  methods: {
    getAWSState: function () {
      // get the window state from AWS and update the vue model
      axios
        .get(
          "https://1i5oka4jj5.execute-api.us-west-2.amazonaws.com/readShadow?email=" +
            this.$store.state.email
        )
        .then((response) => {
          var device1 = response.data[0];
          if (device1 != null) {
            var name = Object.keys(device1)[0];
            this.device1_name = name;
            this.$store.state.device1_name = name.replace( //make it title case in store
              /\w\S*/g,
              function (txt) {
                return (
                  txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
                );
              }
            );
          }
          this.$store.state.shadowResponse = response.data;

          this.$store.state.device_name = name;
          // console.log(response.data[0].shadow);
          this.window1_battery = String(
            this.$store.state.shadowResponse[0].shadow.state.reported.Battery
          );
          //temperature sensor:
          this.window1_temp = String(
            this.$store.state.shadowResponse[0].shadow.state.reported.Temp
          );
          this.window1_statetf = Boolean(
            this.$store.state.shadowResponse[0].shadow.state.reported
              .WINDOW_OPEN
          );
          this.window2_state = "Open"; // just hardcoded for now

          if (
            response.data[0].shadow.state.reported.WINDOW_OPEN == 0 ||
            response.data[0].shadow.state.reported.WINDOW_OPEN == 1
          ) {
            this.first_device_exists = true;
            if (this.$store.state.email == "robertkrivowns@gmail.com") {
              this.second_device_exists = true;
            }
          }
          this.getWeather();
          this.$store.state.ready_to_load_scheduling = 1; // important to load all data before loading this component
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getWeather: function () {
      axios
        .get(
          "http://api.weatherapi.com/v1/current.json?key=822dce929fd1410088d30838220104&q=Calgary&aqi=no"
        )
        .then((response) => {
          // console.log(response);
          this.window1_temp = String(response.data.current.temp_c);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addNewDevice: function (event) {
      event.preventDefault();
      if (this.newDeviceScreenPopoverShow) {
        if (this.newDeviceScreenPopoverShow2) {
          this.newDeviceScreenPopoverShow = false;
          this.newDeviceScreenPopoverShow2 = false;
        } else {
          this.newDeviceScreenPopoverShow2 = true; //idea is to allow user to interact with dialog box but click anywhere outside of the box to close it
        }
      } else {
        this.newDeviceScreenPopoverShow = true;
        createPopper(
          this.$refs.btnDropdownRef2,
          this.$refs.popoverDropdownRef2,
          {
            placement: "bottom",
          }
        );
      }
    },
    remove_popup: function () {
      if (this.newDeviceScreenPopoverShow2 && this.newDeviceScreenPopoverShow) {
        this.newDeviceScreenPopoverShow = false;
        this.newDeviceScreenPopoverShow2 = false;
      }
    },
    add_hyphen: function () {
      var input = document.getElementById("myinput");
      var str = input.value;
      str = str.replace("-", "");
      str = str.toUpperCase();
      str = str.replace(/[^\D]/g, "");
      str = str.replace(/[\s]/g, ""); //Remove illegal characters
      if (str.length > 3) {
        str = str.replace(/.{3}/, "$&-");
      } //Add hyphen at pos.4
      if (str.length > 7) {
        if (str[7] != "-") {
          str = str.replace(/.{7}/, "$&-");
        }
      } //Add hyphen at pos.8
      input.value = str; //Set the new text
      this.device_code = str; // add to local vars
    },
    checkForm: function (e) {
      this.errors = [];
      var parameters =
        "email=" + this.$store.state.email + "&deviceCode=" + this.device_code;
      this.newDeviceScreenPopoverShow = true;
      this.newDeviceScreenPopoverShow2 = true;
      axios
        .get(
          "https://fqzua30105.execute-api.us-west-2.amazonaws.com/AddDevice?" +
            parameters
        )
        .then((response) => {
          this.add_device_response = response.data;
          if (response.data == "Sucessfully Added the New Device") {
            this.getAWSState();
            this.add_device_response = "";
          }
        })
        .catch((error) => {
          console.log(error);
        });

      e.preventDefault();

      console.log("Done!");
    },
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
  },
};
</script>

<style src="@vueform/toggle/themes/default.css"></style>
