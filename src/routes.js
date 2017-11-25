export default [
  {
      path: '/about/',
      component: require('./pages/about.vue')
  },
  {
      path: '/form/',
      component: require('./pages/form.vue')
  },
  {
      path: '/dynamic-route/blog/:blogId/post/:postId/',
      component: require('./pages/dynamic-route.vue')
  },
  {
      path: '/quiz/',
      component: require('./pages/quiz.vue')
  },
  {
      path: '/quiz/completed/',
      component: require('./pages/quiz_completed.vue')
  },
  {
      path: '/sign-up/',
      component: require('./pages/sign_up.vue')
  }
]