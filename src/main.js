import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import mixin from "./plugins/app.mixin"

Vue.mixin(mixin);

Vue.config.productionTip = false

new Vue({
  data: {
    dialog: false,
      resolve: null,
      reject: null,
      message: null,
      title: null,
      dialogOptions: {
        color: "primary",
        width: 400,
        noconfirm: false,
      },
  },
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')