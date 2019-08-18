<template>
  <div id="app">
    <stepper-bar></stepper-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import StepperBar from './components/StepperBar/StepperBar'

export default {
  name: 'smart-sprite-crop',
  components: { StepperBar }
}
</script>

<style lang=scss>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

@import './_config.scss';

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  height: 100%;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
}

html {
  height: 90%;
  overflow-y: hidden;
}

body {
  height: 100%;
}

.shadow-md {
  box-shadow: 0px 3px 1px 0px rgba(0, 0, 0, 0.25);
}

i {
  color: $color-icon-light;
}

img {
  max-height: 100%;
  max-width: 100%;
}
</style>
