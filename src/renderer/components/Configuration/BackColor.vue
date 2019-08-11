<template>
  <div class="con-contrainer">
    <div class="title">Background color</div>
    <form>
      <label>Color selection</label>
      <div class="color-box">
        <div class="radio-col">
          <radio-button
            v-bind:name="'backcolor'"
            v-bind:value="'select'"
            v-bind:checked="backgroundStrategy"
          />
        </div>
        <div class="input-col">
          <input
            type="color"
            v-on:change="onColorChange"
            v-bind:value="backgroundColor"
          />
        </div>
      </div>
      <label>Auto detect from sprite</label>
      <div class="color-box">
        <div class="radio-col">
          <radio-button
            v-bind:name="'backcolor'"
            v-bind:value="'auto'"
            v-bind:checked="backgroundStrategy"
          />
        </div>
        <div class="input-col">
          <select name="title" v-on:change="onAutoChange">
            <option value="top-left" :selected="'top-left' === autoStrategy"
              >Top-Left</option
            >
            <option value="top-right" :selected="'top-right' === autoStrategy"
              >Top-Right</option
            >
            <option
              value="bottom-left"
              :selected="'bottom-left' === autoStrategy"
              >Bottom-Left</option
            >
            <option
              value="bottom-right"
              :selected="'bottom-right' === autoStrategy"
              >Bottom-Right</option
            >
          </select>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import RadioButton from '../controles/RadioButton'
import { mapGetters } from 'vuex'

export default {
  name: 'back-color',
  components: { RadioButton },
  computed: mapGetters([
    'backgroundStrategy',
    'backgroundColor',
    'autoStrategy'
  ]),
  methods: {
    onColorChange(e) {
      this.$store.dispatch('setbackgroundColor', e.target.value)
    },
    onAutoChange(e) {
      this.$store.dispatch('setAutoStrategy', e.target.value)
    }
  }
}
</script>

<style scoped lang=scss>
@import '../../_config.scss';

.con-contrainer {
  width: 100%;
  height: 100%;
  padding: 0.7rem 1.5rem;
}

.title {
  margin: 0 auto;
  width: 100%;
  text-align: center;
  margin-bottom: 1.5rem;
}

.color-box {
  display: flex;
  margin-bottom: 1.5rem;
}

.radio-col {
  padding: 0.7rem;
}

.input-col {
  flex: 1;
  padding: 0.5rem;
}

input[type='color'] {
  width: 100%;
  height: 100%;
}

label {
  margin-left: 2.5rem;
  font-size: 0.85rem;
}

select {
  width: 100%;
  height: 100%;

  background: transparent;
  padding: 5px;
  line-height: 1;
  border: 2px solid $color-border-light;
  outline: 0;
  border-radius: 0;
  appearance: none;
}
</style>
