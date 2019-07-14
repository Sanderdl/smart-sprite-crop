<template>
  <div class="container">
    <div @click="toggleChecked" class="box" v-bind:class="{ checked: checked }">
      <i class="material-icons">done</i>
    </div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  props: {
    checked: {
      required: true
    },
    text: {
      required: false
    }
  },
  methods: {
    toggleChecked() {
      this.$emit('checked')
    }
  }
}
</script>

<style scoped lang=scss>
@import '../../_config.scss';

.container {
  height: 40px;
}

.box {
  width: 35px;
  height: 35px;
  border: solid 4px $color-primary;
  border-radius: 6px;
  float: left;
  margin-right: 0.6rem;
  cursor: pointer;
  color: white;
  i {
    font-size: 1.6rem;
  }
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
