import Vue from "vue"
import App from "./index.vue"
import VirtualList from '../../src/index'

Vue.config.productionTip = false

Vue.use(VirtualList)

new Vue({
    render: h => h(App)
}).$mount("#app")