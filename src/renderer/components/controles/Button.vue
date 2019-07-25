<template>
  <button
    @click="onClick"
    v-bind:class="{ bigtext: important }"
    class="button-style"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'e-button',
  props: {
    onClick: {
      type: Function,
      required: true
    },
    important: {
      type: Boolean,
      required: false
    }
  }
}
</script>

<style scoped lang=scss>
@import '../../_config.scss';

.button-style {
  background-color: $color-primary;
  min-width: 100px;
  padding: 0.5rem 1.75rem;
  border-radius: 0.5rem;
  color: white;
  font-size: 1rem;
  border: none;
  box-shadow: 0px 4px 0px darkgreen;
}

.bigtext {
  font-size: 1.5rem;
  font-weight: 900;
}

.button-style:hover {
  background-color: rgb(79, 214, 0);
  cursor: pointer;
}

.button-style:focus {
  outline: none;
  background-color: $color-primary;
  box-shadow: 0px 4px 0px $color-primary;
}
</style>
