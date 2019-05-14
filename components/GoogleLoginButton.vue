<template>
  <Button class="google-login-btn" :disabled="disabled" @click="onClick">
    GOOGLE SIGN IN
  </Button>
</template>


<script lang="ts">
import { Component, Emit, Prop, Vue, } from 'nuxt-property-decorator';
import Button from '~/components/Button.vue';
import config from '~/config';

declare global {
  interface Window {
    gapi: any;
    googleJsLoaded(): void;
  }
}

@Component({ 
  components: { Button, }, 
  })
export default class GoogleLoginButton extends Vue {
  disabled: boolean = true;

  authObj: any = {
    client_id: config.googleConfig.googleSecrets.clientId,
    scope: 'https://www.googleapis.com/auth/drive',
    ux_mode: 'redirect',
    //immediate: false,
  };

  onClick(event): void {
    console.debug('Google login click');
    window.gapi.auth2.authorize(this.authObj, this.handleAuthResult);
  }

  googleJsLoaded(): void {
    console.debug('Google js loaded');
    window.gapi.load('auth2', this.authJsLoaded);
    //gapi.load('picker', {'callback': onPickerApiLoad});
  }

  authJsLoaded(): void {
    //console.log('auth init', window.gapi.auth2.init(this.authObj));
    console.debug('Google auth js loaded', window.gapi.auth2);
    this.disabled = false;
  }

  handleAuthResult(authResult): void {
    if (authResult && !authResult.error) {
      this.$emit('authSuccess', authResult);
      //createPicker();
    }
    else if (authResult && authResult.error) {
      this.$emit('authError', authResult);
    }
    else {
      this.$emit('authError', undefined);
    }
  }

  mounted(): void {
    if (config.googleConfig.googleAccountsUrl === undefined) {
      console.error('config.googleConfig.googleAccountsUrl is not defined');
      return;
    }

    const loginScript = document.createElement('script');
    loginScript.setAttribute('src', config.googleConfig.googleAccountsUrl + '?onload=googleJsLoaded');
    loginScript.setAttribute('async', 'true');
    loginScript.setAttribute('defer', 'defer');
    document.head.appendChild(loginScript);
    window.gapi = window.gapi || {};
    window.googleJsLoaded = this.googleJsLoaded;
    console.debug('GoogleLoginButton mounted');
  }
}
</script>
