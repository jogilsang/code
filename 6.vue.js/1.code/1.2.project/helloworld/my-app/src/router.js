// router-view : 라우트와 일치한느 컴포넌트를 렌더닝합니다.
// router-link : 라우트 링크를 생성합니다.

import Vue from 'vue'
import VueRouter from 'vue-router'

// 라우트 전용 컴포넌트 읽어들이기
import Home from '@/views/Home.vue'
import Product from '@/views/Product.vue'
import User from '@/views/User.vue'

// 플러그인 등록
Vue.use(VueRouter)

const router = new VueRouter({
  // URL의 경로와 연결할 컴포넌트 맵핑하기
  routes: [{
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'product',
      path: '/product/:id',
      component: Product,
      props: route => ({
        id: Number(route.params.id)
      })
    }, // 매개변수를 props로 컴포넌트에 전달하기
    {
      name: 'user',
      path: '/user',
      component: User,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/a',
      redirect: '/b'
    },
    {
      path: '/c',
      redirect: {
        name: 'home'
      }
    }
  ]
})

// this.$route.params.id
// this.$route.query

// 생성한 VueRouter 인스턴스 익스포트하기
export default router
