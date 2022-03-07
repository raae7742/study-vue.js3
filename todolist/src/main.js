import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

//font-awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheck, faRefresh, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from  '@fortawesome/vue-fontawesome'

library.add(faCheck, faRefresh, faTrashAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')