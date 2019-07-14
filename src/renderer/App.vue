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

<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

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

body,
html {
  height: 80vh;
}

.shadow-md {
  box-shadow: -1px 3px 6px 0px rgba(0, 0, 0, 0.25);
}
</style>
