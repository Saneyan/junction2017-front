<template>
  <!-- App -->
  <div id="app">

    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar v-if="$theme.ios" title="Prework.fi" sliding></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-navbar v-if="$theme.material" title="Prework.fi" sliding></f7-navbar>
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
        </f7-pages>
      </f7-view>
    </f7-views>

    <!-- Login Screen -->
    <f7-login-screen id="login-screen">
      <f7-view>
        <f7-pages>
          <f7-page login-screen>
            <f7-login-screen-title><img class="login-logo" :src="logo" /></f7-login-screen-title>
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
import store from './store/store'
import { getUser, loginWithFacebook } from './api'
import { deleteSession, saveAccount } from './actions'
import { init } from './utils/init'

export default {
  data: function () {
    return {
      logo: require('../preworkfi.png')
    }
  },

  mounted: function () {
    setTimeout(() => {
      init();
    }, 100);
  },

  methods: {
    logout: function () {
      store.dispatch(deleteSession());
      window.f7.closePanel();
      window.f7.loginScreen();
    },

    onLoginButtonClick: function () {
      window.f7.closeModal();
      loginWithFacebook();
      const user = getUser();
      if (!user) {
        window.f7.mainView.router.load({ url: '/sign-up/user-type/' });
      } else {
        store.dispatch(saveAccount(user));
        window.f7.mainView.router.load({ url: '/dashboard/' });
      }
    },
  }
}
</script>
