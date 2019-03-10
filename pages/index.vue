<template>
  <section :class="'theme-' + theme" v-on:changeTheme="changeTheme($event)">
    <section class="container" >
      <div>
        <logo />
        <h1 class="title">
          oNote
        </h1>
        <h2 class="subtitle">
          Note app with Google Drive integration
        </h2>

        <Button class="test-class" v-on:click="changeTheme()">Cycle themes</Button>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue'
import Button from '~/components/Button.vue'

export default {
  components: {
    Logo,
    Button
  },
  data () {
    return {
      theme: 'light'
    }
  },
  methods: {
    changeTheme: function (): void {
      if (this.theme === 'light') {
        this.theme = 'dark';
      }
      else if (this.theme === 'dark') {
        this.theme = 'black';
      }
      else if (this.theme === 'black') {
        this.theme = 'light';
      }
      
    }
  }
}
</script>

<style lang="scss">
.container {
  @include themify($themes) {
    background-color: themed('background');  
  }
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
