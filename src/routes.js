export default [
  {
      path: '/message/',
      component: require('./pages/message.vue')
  },
  {
      path: '/contract/',
      component: require('./pages/contact/contract.vue')
  },
  {
      path: '/dashboard/',
      component: require('./pages/dashboard.vue')
  },
  {
      path: '/quiz/',
      component: require('./pages/quiz/quiz.vue')
  },
  {
      path: '/quiz/completed/',
      component: require('./pages/quiz/completed.vue')
  },
  {
      path: '/sign-up/job-seeker-form/',
      component: require('./pages/sign_up/job_seeker_form.vue')
  },
  {
      path: '/sign-up/employer-form/',
      component: require('./pages/sign_up/employer_form.vue')
  },
  {
      path: '/sign-up/user-type/',
      component: require('./pages/sign_up/user_type.vue')
  },
  {
      path: '/sign-up/completed/',
      component: require('./pages/sign_up/completed.vue')
  },
  {
      path: '/contact/job-seeker/',
      component: require('./pages/contact/job_seeker.vue')
  },
  {
      path: '/contact/company/',
      component: require('./pages/contact/company.vue')
  },
  {
      path: '/matching/company/',
      component: require('./pages/matching/company.vue')
  },
  {
      path: '/matching/job-seeker/',
      component: require('./pages/matching/job_seeker.vue')
  }

]
