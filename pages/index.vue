<template>
  <section :class="'theme-' + theme.value" @changeTheme="changeTheme($event)">
    <section class="container">
      <div>
        <logo />
        <h1 class="title">
          oNote
        </h1>
        <h2 class="subtitle">
          Note app with Google Drive integration
        </h2>

        <Button class="test-class" @click="changeTheme()">Cycle themes</Button>
      </div>
    </section>
  </section>
</template>

<script lang="ts">
import { Component, Emit, Mutation, State, Vue } from 'nuxt-property-decorator';
import { mapMutations } from 'vuex';
import { Theme } from '~/types';
import Logo from '~/components/Logo.vue';
import Button from '~/components/Button.vue';

@Component({
  components: {
    Button,
    Logo
  }
})
export default class extends Vue {
  // Why is there "!" character?
  // See: http://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-7.html#definite-assignment-assertions
  @State theme!: Theme;

  @Mutation setTheme;

  @Emit()
  changeTheme() {
    if (this.theme.value === 'light') {
      this.setTheme({ value: 'dark' });
    } else if (this.theme.value === 'dark') {
      this.setTheme({ value: 'black' });
    } else if (this.theme.value === 'black') {
      this.setTheme({ value: 'light' });
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
  transition: background-color ease-in-out 100ms;
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
