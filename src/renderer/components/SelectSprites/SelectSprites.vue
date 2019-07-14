<template>
  <div class="wrapper">
    <div class="container">
      <div class="icon-block">
        <i class="material-icons">folder</i>
        <p class="amount">0</p>
      </div>
      <div class="instructions">
        Drag &amp; drop sprites/folders or select a folder
      </div>
      <div class="checkbox">
        <checkbox
          v-on:checked="onChecked"
          v-bind:checked="includeSubfolders"
          text="Include subfolders"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from '../controles/Checkbox'

export default {
  name: 'select-sprites',
  components: { Checkbox },
  data: () => {
    return {
      includeSubfolders: true
    }
  },
  methods: {
    onChecked() {
      this.includeSubfolders = !this.includeSubfolders
    }
  }
}
</script>

<style scoped lang=scss>
@import '../../_config.scss';

.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  div {
    padding-bottom: 1rem;
  }
}

.container {
  max-width: 250px;
}

.icon-block {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  position: relative;
  cursor: pointer;
  text-align: center;

  i:hover {
    opacity: 0.75;
  }
}

.amount {
  color: white;
  position: absolute;
  left: 0;
  right: 0;
  top: 40px;
  text-align: center;
  font-size: 1.2rem;
}

i {
  font-size: 6rem;
  color: $color-icon-light;
}

.instructions {
  text-align: center;
  font-size: 1.3rem;
}

.checkbox {
  margin-left: 1rem;
}
</style>
