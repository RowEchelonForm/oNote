<template>
  <button v-bind:disabled="disabled ? true : false" class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'Button',
  data: function () {
    return {
      count: 0
    }
  }
}
</script>

<style lang="scss">
.btn {
  position: relative;
  padding: 1em 2em;
  background-color: $color-primary;
  color: $color-text-primary;
  border-radius: 2em;
  border: none;
  box-shadow: 0 0 3px 1px rgb(211, 211, 211);
  cursor: pointer;
  opacity: 0.9;
}
.btn::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  border-radius: 2em;
  box-shadow: 0 0 3px 1px rgb(179, 179, 179);
  opacity: 0;
}
.btn:hover {
  opacity: 1;
}
.btn:hover::after {
  opacity: 1;
}
</style>
