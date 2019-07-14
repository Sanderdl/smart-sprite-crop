<template>
  <div class="wrapper">
    <div class="container">
      <div class="icon-block">
        <img src="~@/assets/baseline-folder-24px.svg" />
        <p class="amount">0</p>
      </div>
      <div class="instructions">
        Drag &amp; drop sprites/folders or select a folder
      </div>
      <div class="checkbox">
        <checkbox />
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from '../controles/Checkbox'

export default {
  name: 'select-sprites',
  components: { Checkbox }
}
</script>

<style scoped lang=scss>
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

img {
  width: 100%;
}

.instructions {
  text-align: center;
  font-size: 1.3rem;
}

.checkbox {
  margin-left: 1rem;
}
</style>
