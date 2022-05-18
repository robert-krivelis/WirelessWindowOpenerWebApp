// Main.js is the entry point for the app. Contains routing information, imports, etc  
import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";

// oauth
import gAuthPlugin from 'vue3-google-oauth2';

// styles
import "@fortawesome/fontawesome-free/css/all.min.css"; 
import "@/assets/styles/tailwind.css";

// mounting point for the whole app
import App from "@/App.vue";

// layouts
import Admin from "@/layouts/Admin.vue"; // This is where the user controls the window
import Auth from "@/layouts/Auth.vue"; // Required for login screen

// views for Admin layout

import Dashboard from "@/views/admin/Dashboard.vue"; //dashbaord
import Scheduling from "@/views/admin/Scheduling.vue"; //Scheduling will be changed to scheduling


// views for Auth layout

import Login from "@/views/auth/Login.vue"; // Required to login
import Register from "@/views/auth/Register.vue"; // Required to make new account

// home page view

import Index from "@/views/Index.vue"; // This is the main/home/landing page

// privacy policy
import PrivacyPolicy from "@/views/PrivacyPolicy.vue";


// routes:
const routes = [
  {
    path: "/admin",
    redirect: "/admin/dashboard",
    component: Admin, 
    children: [
      {
        path: "/admin/dashboard",
        component: Dashboard,
      },
      {
        path: "/admin/scheduling",
        component: Scheduling,
      },
    ],
  },
  {
    path: "/auth",
    redirect: "/auth/login",
    component: Auth, // for auth header
    children: [
      {
        path: "/auth/login",
        component: Login,
      },
      {
        path: "/auth/register",
        component: Register,
      },
    ],
  },
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/PrivacyPolicy",
    component: PrivacyPolicy,
  },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

// router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// create the Vue App, attach the router to it, and attach auth.

const app = createApp(App)
app.use(router)

app.use(gAuthPlugin, {
  clientId: process.env.VUE_APP_gauthClientId, //gAuthID stores as env variable
  scope: "profile email",
  prompt: "consent",
  fetch_basic_profile: true,
})

import store from "./store";
import './registerServiceWorker'
app.use(store);
app.mount("#app")
