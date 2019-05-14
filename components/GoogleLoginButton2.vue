<template>
  <div>
    <div title="Social Login">
      <Button @click="$auth.loginWith('google')">Login with Google</Button>
    </div>
  </div>
</template>


<script lang="ts">
import Button from '~/components/Button.vue';
import { Component, Vue, } from 'nuxt-property-decorator';

@Component({
  components: { Button },
  middleware: 'auth'
})
export default class GoogleLoginButton2 extends Vue {
  
  username: string = '';
  password: string = '';
  error: string | null = null;

    get redirect(): string {
      return (
        this.$route.query.redirect &&
        decodeURIComponent(this.$route.query.redirect.toString())
      )
    }
    
    get isCallback(): boolean {
      return Boolean(this.$route.query.callback)
    }

  async login() {
    this.error = null
    
    return this.$auth
      .loginWith('local', {
        data: {
          username: this.username,
          password: this.password
        }
      })
      .catch(e => {
        this.error = e + ''
      })
  }
}
</script>
