export default [
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
      path: '/contact/job_seeker/',
      component: require('./pages/contact/job_seeker.vue')
  },
  {
      path: '/contact/company/',
      component: require('./pages/contact/company.vue')
  },
  {
      path: '/matchings/',
      component: require('./pages/matchings.vue')
  }
]