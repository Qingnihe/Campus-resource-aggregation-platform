import ElementPlus, { dayjs }  from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import MainPage from './components/MainPage.vue';
import Login from './components/Login.vue';
import router from './route/index'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'dayjs/locale/zh-cn'
dayjs.locale(dayjs.Ls['zh-cn'])

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.component('MainPage',MainPage).component('Login',Login)
app.use(ElementPlus,{locale:zhCn});
app.use(router);
app.mount('#app');


