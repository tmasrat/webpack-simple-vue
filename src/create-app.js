import Vue from "vue"
import App from "./Hello.vue"
import { createStore } from "./store"
import {createRouter} from "./router";

export function createApp(data) {
  const store = createStore();
  const router = createRouter();

  const app = new Vue({
    el: "#app",
    store,
    router,
    render: h => h(App, {
      props: {
        testData: data
      }
    })
  });
  // console.log(router)
  return { app, store, App, router }
}

