<template>
  <div class="container">
    <div class="box checked"></div>
    <div class="text">Include subfolders</div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    checked: {
      required: true
    }
  }
}
</script>

<style scoped lang=scss>
@import '../../_config.scss';

.container {
  cursor: pointer;
  height: 40px;
}

.box {
  width: 35px;
  height: 35px;
  border: solid 4px $color-primary;
  border-radius: 6px;
  float: left;
  margin-right: 0.6rem;
}

.checked {
  background-color: $color-primary;
}

.text {
  margin-top: 4px;
  float: left;
  font-size: 1.3rem;
}
</style>
