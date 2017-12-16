//导入被路由的组件
import HomeComponent from '../component/home/Home.Vue';
import LoginComponent from '../component/login/Login.Vue';

//对外导出路由配置对象
export default {
    routes:[
        //首页
        {name:'h',path:'/home',component:HomeComponent},
        {name:'l',path:'/login',component:LoginComponent},
    ]
}