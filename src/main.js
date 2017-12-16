// 1.1 导入第三包
import Vue from 'vue';
import VueRouter from 'vue-router';

//1.2启动vue插件
Vue.use(VueRouter);

// 2.1 导入根组件
import AppComponent from './component/App.vue';

//2.2导入路由配置
import RouterConfig from './router';//写一个目录，会自动找index.js

//3.导入配置后的axios与api，注入到Vue的原型当中，这样所有的组件就可以通过this调用了
import axios from './axios_config.js';
import api from './js/api_config.js';
Vue.prototype.$http=axios;
Vue.prototype.$api=api;
// 渲染根组件, 启动应用程序
new Vue({
    el: '#app',
    render: c => c(AppComponent),
    router:new VueRouter(RouterConfig)
});
     