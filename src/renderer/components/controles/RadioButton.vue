<template>
  <div class="container">
    <label>
      <input
        type="radio"
        v-bind:name="name"
        v-bind:value="value"
        v-bind:checked="value === checked"
        v-on:change="onChange"
      />
      <span class="checkmark"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'radio-button',
  props: {
    name: {
      required: true
    },
    value: {
      required: true
    },
    checked: {
      required: true
    }
  },
  methods: {
    onChange() {
      this.$store.dispatch('setbackgroundStrategy', this.value)
    }
  }
}
</script>

<style scoped lang=scss>
@import '../../_config.scss';

input[type='radio'] {
  opacity: 0;
  cursor: pointer;
}

.container {
  position: relative;
  cursor: pointer;
  user-select: none;
}

.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: transparent;
  border: 4px solid $color-icon-light;
  border-radius: 50%;
}

.checkmark:after {
  content: '';
  position: absolute;
  display: none;
}

.container:hover input ~ .checkmark::after {
  display: block;
  top: 3px;
  left: 3px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: $color-icon-light;
}

.container input:checked ~ .checkmark {
  border: 4px solid $color-primary;
}

.container input:checked ~ .checkmark::after {
  display: block;
  top: 3px;
  left: 3px;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background: $color-primary;
}
</style>
