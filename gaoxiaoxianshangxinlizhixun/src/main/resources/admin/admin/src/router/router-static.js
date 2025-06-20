import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import forum from '@/views/modules/forum/list'
    import jiangzhuo from '@/views/modules/jiangzhuo/list'
    import news from '@/views/modules/news/list'
    import xinliyisheng from '@/views/modules/xinliyisheng/list'
    import xinliyishengChat from '@/views/modules/xinliyishengChat/list'
    import xinliyishengCollection from '@/views/modules/xinliyishengCollection/list'
    import xinliyishengLiuyan from '@/views/modules/xinliyishengLiuyan/list'
    import xinliyishengYuyue from '@/views/modules/xinliyishengYuyue/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryJiangzhuo from '@/views/modules/dictionaryJiangzhuo/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryXinliyisheng from '@/views/modules/dictionaryXinliyisheng/list'
    import dictionaryXinliyishengChat from '@/views/modules/dictionaryXinliyishengChat/list'
    import dictionaryXinliyishengCollection from '@/views/modules/dictionaryXinliyishengCollection/list'
    import dictionaryXinliyishengYuyueYesno from '@/views/modules/dictionaryXinliyishengYuyueYesno/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryJiangzhuo',
        name: '讲座类型',
        component: dictionaryJiangzhuo
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryXinliyisheng',
        name: '心理医生类型',
        component: dictionaryXinliyisheng
    }
    ,{
        path: '/dictionaryXinliyishengChat',
        name: '数据类型',
        component: dictionaryXinliyishengChat
    }
    ,{
        path: '/dictionaryXinliyishengCollection',
        name: '收藏表类型',
        component: dictionaryXinliyishengCollection
    }
    ,{
        path: '/dictionaryXinliyishengYuyueYesno',
        name: '预约状态',
        component: dictionaryXinliyishengYuyueYesno
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/forum',
        name: '情感树洞',
        component: forum
      }
    ,{
        path: '/jiangzhuo',
        name: '讲座信息',
        component: jiangzhuo
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/xinliyisheng',
        name: '心理医生',
        component: xinliyisheng
      }
    ,{
        path: '/xinliyishengChat',
        name: '心理医生咨询',
        component: xinliyishengChat
      }
    ,{
        path: '/xinliyishengCollection',
        name: '心理医生收藏',
        component: xinliyishengCollection
      }
    ,{
        path: '/xinliyishengLiuyan',
        name: '心理医生留言',
        component: xinliyishengLiuyan
      }
    ,{
        path: '/xinliyishengYuyue',
        name: '心理医生报名',
        component: xinliyishengYuyue
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
