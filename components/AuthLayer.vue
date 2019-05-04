<template>
  <div v-if="this.authInfo.type === getAuthInfoTypeEnum().None" class="auth-layer">
    <GoogleLoginButton @authSuccess="this.handleAuthSuccess" @authError="handleAuthError" />
  </div>
</template>


<script lang="ts">
import { Component, Prop, Vue, } from 'nuxt-property-decorator';
import { AuthInfo, AuthType } from '~/types';
import GoogleLoginButton from './GoogleLoginButton.vue';

@Component({ components: { GoogleLoginButton, }, })
export default class AuthLayer extends Vue {
  @Prop({ default: function(): AuthInfo { return { type: AuthType.None, authObject: undefined } } })
  authInfo!: AuthInfo;
  
  handleAuthSuccess(googleAuthResult): void {
    console.debug('Auth success event', googleAuthResult);
    this.$router.push('/pickgooglefolders');
  }

  handleAuthError(googleAuthResult): void {
    console.debug('Auth error event', googleAuthResult);
    if (googleAuthResult && googleAuthResult.error === 'idpiframe_initialization_failed') {
      window.alert('Login failed. If third party cookies are disabled, Google login won\'t work. ' + 
        'Please enable third party cookies for this website, since Google login does not work without third party cookies.');
    }
    else {
      window.alert('Login failed');
    }
  }

  created() {
    console.debug('Auth layer authInfo type:', AuthType[this.authInfo.type]);
  }

  // Simply returns AuthType enum; needed because this enum is used in the template
  getAuthInfoTypeEnum() { return AuthType; }
}
</script>


<style lang="scss">
.auth-layer {
  margin: 0.5em 0 0.5em 0;
}
</style>
