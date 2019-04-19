<template>
  <Button class="google-login-btn" :disabled="disabled" @click="onClick">
    GOOGLE SIGN IN
  </Button>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Button from '~/components/Button.vue';
import config from '~/config';

declare global {
  interface Window {
    gapi: any;
    googleJsLoaded: any;
  }
}

@Component({
  components: { Button }
})
export default class GoogleLoginButton extends Vue {
  disabled = true;
  oauthToken = null;

  onClick(event): void {
    console.log('google login click');
    console.log(window.gapi);
    const authObj = {
      client_id: config.google.googleSecrets.clientId,
      scope: ['https://www.googleapis.com/auth/drive'],
      immediate: false
    };
    window.gapi.auth.authorize(authObj, this.handleAuthResult);
  }

  googleJsLoaded() {
    console.log('google js loaded');
    window.gapi.load('auth', { callback: this.authJsLoaded });
    //gapi.load('picker', {'callback': onPickerApiLoad});
  }

  authJsLoaded() {
    console.log('auth js loaded');
    this.disabled = false;
  }

  handleAuthResult(authResult) {
    console.log('handleAuthResult called', authResult);
    if (authResult && !authResult.error) {
      this.oauthToken = authResult.access_token;
      console.log('login ok');
      //createPicker();
    }
  }

  mounted() {
    window.gapi = window.gapi || {};
    console.log('mounted');
    const loginScript = document.createElement('script');
    loginScript.setAttribute(
      'src',
      'https://apis.google.com/js/api.js?onload=googleJsLoaded'
    );
    loginScript.setAttribute('async', 'true');
    loginScript.setAttribute('defer', 'defer');
    document.head.appendChild(loginScript);
    window.googleJsLoaded = this.googleJsLoaded;
  }
}
</script>
