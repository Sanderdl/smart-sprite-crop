<template>
  <div class="stepper-bar shadow-md">
    <template v-for="(step, index) in steps">
      <step
        v-bind:action="step.action"
        v-bind:icon="step.icon"
        v-bind:completed="step.complete"
      >
      </step>
      <div v-if="index < steps.length - 1" class="line"></div>
    </template>
  </div>
</template>

<script>
import Step from './Step'
import { mapGetters } from 'vuex'

export default {
  name: 'stepper-bar',
  components: { Step },
  computed: mapGetters(['steps'])
}
</script>

<style lang='scss' scoped>
@import '../../_config.scss';

.stepper-bar {
  height: 120px;
  background-color: $color-bg-light;
  z-index: 10;
  border: 1px solid $color-border-light;
  display: flex;
  justify-content: center;
  align-content: center;
  padding-left: 10rem;
  padding-right: 10rem;
}
.line {
  height: 6px;
  background-color: $color-border-light;
  flex: 1;
  margin-top: 40px;
}
</style>
