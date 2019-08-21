
import Home from '../pages/Home/Home.vue'
import Category from '../pages/Category/Category.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'
import Topic from '../pages/Topic/Topic.vue'
import Usercenter from '../pages/Usercenter/Usercenter.vue'
import SearchPage from '../pages/SearchPage/SearchPage.vue'
import PhoneLogin from '../pages/Usercenter/PhoneLogin/PhoneLogin.vue'
import EmailLogin from '../pages/Usercenter/EmailLogin/EmailLogin.vue'
import FastLogin from '../pages/Usercenter/FastLogin/FastLogin.vue'

export default[
  {
    path:'/home',
    component:Home,
    meta:{
      showFooter:true
    }
  },
   {
    path:'/category',
    component:Category,
    meta:{
      showFooter:true
    }
  }, 
  {
    path:'/shopCart',
    component:ShopCart,
    meta:{
      showFooter:true
    }
  },
   {
    path:'/topic',
    component:Topic,
    meta:{
      showFooter:true
    }
  },
   {
    path:'/usercenter',
    component:Usercenter,
    meta:{
      showFooter:false
    },
 
  },
  {
    path:'/phonelogin',
    component:PhoneLogin,
    meta:{
      showFooter:false
    },
  },
  {
    path:'/emaillogin',
    component:EmailLogin,
    meta:{
      showFooter:false
    },
  },
  {
    path:'/fastlogin',
    component:FastLogin,
    meta:{
      showFooter:false
    },
  },
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/searchpage',
    component:SearchPage,
    meta:{
      showFooter:false
    }

  }
]

