<template>
  <div class="step-container">
    <div class="step-circle" v-bind:class="{ complete: completed }">
      <div>
        <i v-if="!completed" class="material-icons">{{ icon }}</i>
        <i v-else class="material-icons check">check</i>
      </div>
    </div>
    <div class="action">{{ action }}</div>
  </div>
</template>

<script>
export default {
  name: 'Step',
  props: {
    action: {
      required: true
    },
    icon: {
      required: false
    },
    completed: {
      required: true
    }
  }
}
</script>

<style scoped lang=scss>
@import '../../_config.scss';

.step-container {
  padding-top: 0.8rem;
  position: relative;
  max-width: 58px;

  .step-circle {
    height: 50px;
    width: 50px;
    box-sizing: content-box;
    border: 4px solid $color-border-light;
    border-radius: 100%;
  }

  .complete {
    border: 4px solid $color-primary;
  }

  .check {
    color: $color-primary;
  }

  .action {
    text-align: center;
  }
}

i {
  width: 100%;
  padding: 0.5rem;
  font-size: 2rem;
  text-align: center;
}
</style>
