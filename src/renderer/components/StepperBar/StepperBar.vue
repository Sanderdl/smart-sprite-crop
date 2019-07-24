<template>
  <div class="stepper-bar shadow-md">
    <step action="Select sprites" icon="collections"> </step>
    <div class="line"></div>
    <step action="Configure options" icon="settings"></step>
    <div class="line"></div>
    <step action="Crop sprites!" icon="crop"></step>
  </div>
</template>

<script>
import Step from './Step'

export default {
  name: 'stepper-bar',
  components: { Step }
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
