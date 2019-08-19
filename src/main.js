import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import config from '@/config'

import iView from 'iview'
import i18n from '@/locale'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import './index.less'
Vue.use(ElementUI);

// 实际打包时应该不引入mock
/* eslint-disable */
if (process.env.NODE_ENV !== 'production') require('@/mock')

Vue.use(iView, {
    i18n: (key, value) => i18n.t(key, value)
})

/**
 * @description 生产环境关掉提示
 */
Vue.config.productionTip = false

/**
 * @description 全局注册应用配置
 */
Vue.prototype.$config = config

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
