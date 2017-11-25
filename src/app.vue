<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="Live 'n Tokyo" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="Live 'n Tokyo" sliding></f7-navbar>
            <f7-list>
              <f7-list-item @click="logout">Logout</f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>
        <!-- iOS Theme Navbar -->
        <f7-navbar v-if="$theme.ios">
          <f7-nav-left>
            <f7-link icon="icon-bars" open-panel="left"></f7-link>
          </f7-nav-left>
          <f7-nav-center sliding>Dashboard</f7-nav-center>
        </f7-navbar>
        <!-- Pages -->
        <f7-pages>
          <f7-page name="main">
            <!-- Material Theme Navbar -->
            <f7-navbar v-if="$theme.material">
              <f7-nav-left>
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-left>
              <f7-nav-center sliding>Dashboard</f7-nav-center>
            </f7-navbar>
            <!-- Page Content -->

          <template v-if="job_seeker">
            <f7-block v-if="!quiz_answered">
              <f7-button big fill @click="startQuiz">Start Quiz</f7-button>
            </f7-block>
            <f7-block v-if="quiz_answered">
              <f7-button big fill @click="seeMatchings">See matchings</f7-button>
            </f7-block>
          </template>

          <f7-list>
            <f7-list-item v-if="job_seeker && quiz_answered" center link="/quiz/">
              Retry quiz
            </f7-list-item>
            <f7-list-item v-if="job_seeker" center link="/contact/company/">
              Company contacts
            </f7-list-item>
            <f7-list-item v-if="employer" center link="/contact/job-seeker/">
              Job Seeker contacts
            </f7-list-item>
          </f7-list>

          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

    <!-- Login Screen -->
    <f7-login-screen id="login-screen">
      <f7-view>
        <f7-pages>
          <f7-page login-screen>
            <f7-login-screen-title>Live 'n Tokyo</f7-login-screen-title>
            <f7-block inner>
              <f7-button fill round big @click="onLoginButtonClick">Login with Facebook</f7-button>
            </f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-login-screen>

  </div>
</template>

<script>
export default {
  data: function () {
    return {
      job_seeker: true,
      employer: false,
      quiz_answered: false
    };
  },

  methods: {
    startQuiz: function () {
      this.route('/quiz/');
    },

    seeMatchings: function () {
      this.route('/matchings/');
    },

    logout: function () {
      window.Dom7(document).trigger('app:logout');
    },

    onLoginButtonClick: function () {
      window.f7.closeModal();
      this.route('/sign-up/user-type/');
    },

    route: function (url) {
      window.f7.mainView.router.load({
        url: url
      });
    }
  }
}
</script>
