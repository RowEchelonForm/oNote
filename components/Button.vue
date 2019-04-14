<template>
  <a :disabled="disabled ? true : false" class="btn" @click="onClick">
    <slot></slot>
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component
export default class Button extends Vue {
  test = 0;

  onClick(event): void {
    this.test += 1;
    this.$emit('click', event);
  }

  @Prop(Boolean) disabled = false;
}
</script>

<style lang="scss">
.btn {
  @include themify($themes) {
    color: themed('background');
    background-color: themed('primary');
    box-shadow: 0 0 3px 1px themed('shade');
  }
  display: inline-block;
  position: relative;
  padding: 1em 2em;
  border-radius: 2em;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 100ms;
}

.btn::after,
.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 2em;
  opacity: 0;
  transition: opacity 100ms;
}
.btn::after {
  @include themify($themes) {
    box-shadow: 0 0 3px 1px themed('shadeDarker');
  }
}
.btn::before {
  @include themify($themes) {
    box-shadow: 0 0 0 0.2em themed('shadeColoredPrimary');
  }
}

.btn:hover {
  @include themify($themes) {
    background-color: themed('primaryDarker');
  }
}

.btn:active {
  @include themify($themes) {
    background-color: themed('primaryDarkest');
  }
}

.btn:disabled {
  @include themify($themes) {
    background-color: themed('primaryLighter');
  }
}

.btn:hover::after,
.btn:active::before,
.btn:focus::before {
  opacity: 1;
}
</style>
