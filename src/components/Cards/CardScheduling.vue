<template>
  <div
    class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0"
  >
    <div class="rounded-t bg-white mb-0 px-6 py-6">
      <div class="text-center flex justify-between">
        <h6 class="text-blueGray-700 text-xl font-bold">Scheduling</h6>
        <button
          class="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
          type="button"
          @click="showSchedulingPopup()"
        >
          <strong class="text-md font-bold py-0">+</strong>
          <div class="text-md inline-block inline">Create New</div>
        </button>
      </div>
    </div>
    <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
      <h6
        class="flex text-blueGray-400 h-full text-sm mt-3 mb-6 font-bold uppercase"
      >
        Scheduled Operations
      </h6>

      <div class="flex justify-center" v-if="storeLoaded">
        <div
          v-if="show_scheduling"
          class="content-center flex flex-col justify-center self-center items-center sm:w-full md:w-7/12 px-4 lg:px-10 bg-white rounded border shadow text-center text-blueGray-500 m-auto pt-2 pb-6"
        >
          <div class="sm:hidden md:visible w-1/3"></div>
          <div
            v-if="show_scheduling"
            class="justify-center flex-auto px-4 lg:px-10 bg-white rounded text-center text-blueGray-500 m-auto pt-2 pb-4"
          >
            <h2
              class="flex text-blueGray-400 h-full text-center justify-center text-sm mt-3 mb-6 font-bold uppercase"
            >
              Creating New Schedule:
            </h2>
            Select device:
            <br />
            <button
              :if="this.$store.state.shadowResponse[0]"
              :class="
                this.device_number === 0 ? selected_theme : not_selected_theme
              "
              type="button"
              @click="this.device_number = 0"
            >
              <!-- {{ this.getName() }} -->
              CAPSTONE DEVICE
            </button>
            <button
              v-if="this.$store.state.email == 'robertkrivowns@gmail.com'"
              :if="this.$store.state.shadowResponse[0]"
              class="uppercase"
              :class="
                this.device_number === 1 ? selected_theme : not_selected_theme
              "
              type="button"
              @click="device_number = 1"
            >
              {{ this.$store.state.temporaryOtherDeviceName }}
            </button>
          </div>
          Select days:
          <div
            v-if="show_scheduling"
            class="flex-auto px-4 lg:px-10 bg-white rounded w-full text-center m-auto pt-1"
          >
            <button
              :class="m ? selected_theme : not_selected_theme"
              type="button"
              @click="m = !m"
            >
              Mon
            </button>
            <button
              :class="t ? selected_theme : not_selected_theme"
              type="button"
              @click="t = !t"
            >
              Tue
            </button>
            <button
              :class="w ? selected_theme : not_selected_theme"
              type="button"
              @click="w = !w"
            >
              Wed
            </button>
            <button
              :class="th ? selected_theme : not_selected_theme"
              type="button"
              @click="th = !th"
            >
              Thu
            </button>
            <button
              :class="f ? selected_theme : not_selected_theme"
              type="button"
              @click="f = !f"
            >
              Fri
            </button>
            <button
              :class="sat ? selected_theme : not_selected_theme"
              type="button"
              @click="sat = !sat"
            >
              Sat
            </button>
            <button
              :class="sun ? selected_theme : not_selected_theme"
              type="button"
              @click="sun = !sun"
            >
              Sun
            </button>
          </div>
          <div
            v-if="show_scheduling"
            class="flex-inline px-4 lg:px-10 bg-white rounded w-full text-center text-blueGray-500 m-auto pt-2 pb-2"
          >
            Open at time:
            <br />
            <VueTimepicker format="hh:mm" v-model="open_data" />
            <span class="md:px-2 sm:px-0"></span>
            <button
              :class="am_pm ? selected_theme : not_selected_theme"
              type="button"
              @click="am_pm = !am_pm"
            >
              AM
            </button>
            <button
              :class="!am_pm ? selected_theme : not_selected_theme"
              type="button"
              @click="am_pm = !am_pm"
            >
              PM
            </button>
          </div>
          <div
            v-if="show_scheduling"
            class="flex-auto px-4 lg:px-10 bg-white rounded w-full text-center text-blueGray-500 m-auto pt-2 pb-2"
          >
            Close at time:
            <br />
            <VueTimepicker format="hh:mm" v-model="close_data" />
            <span class="md:px-2 sm:px-0"></span>
            <button
              :class="am_pm_close ? selected_theme : not_selected_theme"
              type="button"
              @click="am_pm_close = !am_pm_close"
            >
              AM
            </button>
            <button
              :class="!am_pm_close ? selected_theme : not_selected_theme"
              type="button"
              @click="am_pm_close = !am_pm_close"
            >
              PM
            </button>
          </div>
          <div class="pt-6">
            <button
              :class="
                ((this.open_data.hh && this.open_data.mm) ||
                  (this.close_data.hh && this.close_data.mm)) &&
                (this.m ||
                  this.t ||
                  this.w ||
                  this.th ||
                  this.f ||
                  this.sat ||
                  this.sun)
                  ? submit_button
                  : submit_button_disabled
              "
              :disabled="
                !(
                  ((this.open_data.hh && this.open_data.mm) ||
                    (this.close_data.hh && this.close_data.mm)) &&
                  (this.m ||
                    this.t ||
                    this.w ||
                    this.th ||
                    this.f ||
                    this.sat ||
                    this.sun)
                )
              "
              @click="submitSchedule()"
            >
              CREATE SCHEDULE
            </button>
          </div>
        </div>
      </div>
      <div
        v-if="scheduling_data_from_aws.length > 0"
        class="content-center flex flex-col justify-left self-left items-left sm:w-full md:w-7/12 px-4 lg:px-10 bg-white rounded border shadow text-center text-blueGray-500 m-auto pt-2 pb-6"
      >
        <div v-if="closedfromAWS.length>0" class="text-left font-semibold pt-2 pb-1">
          Scheduled to close at:
        </div>
        <div
          v-for="(item, index) in closedfromAWS"
          :key="item.Name"
          class="border-1 shadow rounded py-2"
          :class="item.Name.startsWith('close') ? redbg : greenbg"
        >
          {{ cronToHumanString(item.Name, item.ScheduleExpression) }}
          <span href="javascript:void(0);">
            <i
              class="fas fa-trash text-red-500 fa-md xl:fa-3x select-none pointer-events-auto cursor-pointer"
              @click="deleteSchedule(index)"
              href="javascript:void(0);"
            ></i
          ></span>
          <br />
        </div>
        <div v-if="openfromAWS.length>0" class="text-left font-semibold pt-2 pb-1">
          Scheduled to open at:
        </div>
        <div
          v-for="(item, index) in openfromAWS"
          :key="item.Name"
          class="border-1 shadow rounded py-2"
          :class="item.Name.startsWith('close') ? redbg : greenbg"
        >
          {{ cronToHumanString(item.Name, item.ScheduleExpression) }}
          <span href="javascript:void(0);">
            <i
              class="fas fa-trash text-red-500 fa-md xl:fa-3x select-none pointer-events-auto cursor-pointer"
              @click="deleteSchedule(index + closedfromAWS.length)"
              href="javascript:void(0);"
            ></i
          ></span>
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueTimepicker from "@/components/Dropdowns/VueTimepicker.vue";
import "vue3-timepicker/dist/VueTimepicker.css";
import axios from "axios";
import cronstrue from "cronstrue";
export default {
  beforeRouteEnter: async function (to, from, next) {
    try {
      await this.$store.dispatch("longRuningHttpCall");

      next();
    } catch (exception) {
      next(exception);
    }
  },
  name: "CardScheduling",
  components: {
    VueTimepicker,
  },
  data() {
    return {
      show_scheduling: false, //change to false
      selected_theme:
        "bg-emerald-400 text-white hover:border-gray-300 active:bg-emerald-500 font-bold text-xs px-4 py-2 rounded shadow mr-1 ease-linear transition-all duration-150",
      not_selected_theme:
        "bg-gray-100 text-gray-300 hover:border-gray-300 active:bg-gray-200 font-bold text-xs px-4 py-2 rounded shadow mr-1 ease-linear transition-all duration-150",
      submit_button:
        "px-4 py-2 bg-emerald-500 text-white hover:border-gray-300 active:bg-emerald-600 font-bold text-m rounded shadow mr-1 ease-linear transition-all duration-150",
      submit_button_disabled:
        "px-4 py-2 bg-blueGray-100 text-blueGray-300 hover:border-gray-300 active:bg-gray-200 font-bold text-m rounded shadow mr-1 ease-linear transition-all duration-150",
      am_pm: true, // true is AM
      am_pm_close: true,
      device_number: 0,
      m: true,
      t: true,
      w: true,
      th: true,
      f: true,
      sat: false,
      sun: false,
      greenbg: "bg-red-100",
      redbg: "bg-lightBlue-100",
      yourData: {
        hh: "03",
        mm: "05",
        ss: "00",
        a: "am",
      },
      options: [
        { value: 1, name: "1" },
        { value: 20, name: "20KG" },
      ],
      open_data: {
        hh: null,
        mm: null,
        ss: "00",
        a: "am",
      },
      close_data: {
        hh: null,
        mm: null,
        ss: "00",
        a: "am",
      },
      dev1_name: "",
      scheduling_data_from_aws: {},
    };
  },
  methods: {
    showSchedulingPopup: function () {
      if (this.show_scheduling == false) {
        this.show_scheduling = true;
      } else if (this.show_scheduling == true) {
        this.show_scheduling = false;
      }
    },
    add_colon: function () {
      var input = document.getElementById("myinputschedule");
      var str = input.value;
      str = str.replace(":", "");
      str = str.toUpperCase();
      if (str.length > 2) {
        str = str.replace(/.{2}/, "$&:");
      } else if (str.length > 3) {
        str = str.replace(/.{3}/, "$&:");
      }
      //Add hyphen at pos.8
      input.value = str; //Set the new text
      this.device_code = str; // add to local vars
    },
    logtime: function () {
    },
    submitSchedule: function () {
      this.show_scheduling = false;
      var parameters = "";
      var cronString = "";
      var daysofweek = [];
      var hour = this.open_data.hh;
      var alldays = "";
      if (this.open_data.hh != null) {
        cronString = "";
        hour = parseInt(this.open_data.hh);
        if (!this.am_pm) {
          hour = hour + 12;
        }
        cronString = cronString + this.open_data.mm + " " + hour + " ? * ";
        daysofweek = [];
        if (this.m) {
          daysofweek.push("MON");
        }
        if (this.t) {
          daysofweek.push("TUE");
        }
        if (this.w) {
          daysofweek.push("WED");
        }
        if (this.th) {
          daysofweek.push("THU");
        }
        if (this.f) {
          daysofweek.push("FRI");
        }
        if (this.sat) {
          daysofweek.push("SAT");
        }
        if (this.sun) {
          daysofweek.push("SUN");
        }
        alldays = daysofweek.join(",");
        cronString = cronString + alldays + " *";
        parameters = parameters + "&open_time=" + cronString;
      }
      if (this.open_data.hh == null) {
        parameters = "";
      }
      if (this.close_data.hh != null) {
        cronString = "";
        hour = parseInt(this.close_data.hh);
        if (!this.am_pm_close) {
          hour = hour + 12;
        }
        cronString = cronString + this.close_data.mm + " " + hour + " ? * ";
        daysofweek = [];
        if (this.m) {
          daysofweek.push("MON");
        }
        if (this.t) {
          daysofweek.push("TUE");
        }
        if (this.w) {
          daysofweek.push("WED");
        }
        if (this.th) {
          daysofweek.push("THU");
        }
        if (this.f) {
          daysofweek.push("FRI");
        }
        if (this.sat) {
          daysofweek.push("SAT");
        }
        if (this.sun) {
          daysofweek.push("SUN");
        }
        alldays = daysofweek.join(",");
        cronString = cronString + alldays + " *";
        parameters = parameters + "&close_time=" + cronString;
      }
      axios
        .get(
          "https://yl4ewemfl3.execute-api.us-west-2.amazonaws.com/default/CreateSchedulingStepFunction?email=" +
            this.$store.state.email +
            parameters
        )
        .then((response) => {
          this.scheduling_data_from_aws = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getName: async function () {
      return await this.$store.getters.getDeviceName;
    },
    incrementIndex(key) {
      return key + 1;
    },
    cronToHumanString: function (openclose, string) {
      string = string.trim("cron");
      string = string.trim("(");
      string = string.trim(")");
      string = cronstrue.toString(string);
      string = string.replace(", only in", " ");
      string = string.replace("AM,", "AM on");
      string = string.replace("PM,", "PM on");
      string = string.replace(" *)", " ");
      string = string.replace("only on ", " ");
      string = string.replace("At", "");

      if (openclose.startsWith("open")) {
        string = "" + string;
      }
      if (openclose.startsWith("close")) {
        string = "" + string;
      }
      return string;
    },
    deleteSchedule: function (index) {
      console.log(
        "https://yl4ewemfl3.execute-api.us-west-2.amazonaws.com/default/CreateSchedulingStepFunction?email=" +
          this.$store.state.email +
          "&delete_index=" +
          index
      );
      axios
        .get(
          "https://yl4ewemfl3.execute-api.us-west-2.amazonaws.com/default/CreateSchedulingStepFunction?email=" +
            this.$store.state.email +
            "&delete_index=" +
            index
        )
        .then((response) => {
          // console.log(response.data);
          this.scheduling_data_from_aws = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    // get the window state from AWS and update the vue model

    axios
      .get(
        "https://yl4ewemfl3.execute-api.us-west-2.amazonaws.com/default/CreateSchedulingStepFunction?email=" +
          this.$store.state.email
      )
      .then((response) => {
        console.log(response.data);
        this.scheduling_data_from_aws = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    storeLoaded() {
      return this.$store.state.ready_to_load_scheduling === 1;
    },
    closedfromAWS() {
      return this.scheduling_data_from_aws.filter((data) =>
        data.Name.startsWith("close")
      );
    },
    openfromAWS() {
      return this.scheduling_data_from_aws.filter((data) =>
        data.Name.startsWith("open")
      );
    },
  },
};
</script>
