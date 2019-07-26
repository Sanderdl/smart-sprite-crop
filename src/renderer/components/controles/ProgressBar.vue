<template>
  <div class="progress">
    <span class="number">{{ completed }}%</span>
    <div class="fill" v-bind:style="{ width: completed + '%' }"></div>
  </div>
</template>

<script>
export default {
  name: 'progress-bar',
  props: {
    completed: Number,
    required: true
  }
}
</script>

<style scoped lang=scss>
@import '../../_config.scss';

.progress {
  height: 1.5rem;
  background-color: #c4c4c4;
  position: relative;
}

.number {
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  color: white;
  font-weight: 900;
  text-align: center;
}

.fill {
  height: 100%;
  background-color: $color-primary;
}
</style>
