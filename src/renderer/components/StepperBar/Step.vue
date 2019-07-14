<template>
  <div class="step-container">
    <div class="step-circle">
      <div>
        <img v-if="icon === 'crop'" src="~@/assets/baseline-crop-24px.svg" />
        <img
          v-if="icon === 'config'"
          src="~@/assets/baseline-settings-20px.svg"
        />
        <img
          v-if="icon === 'sprite'"
          src="~@/assets/baseline-insert_photo-24px.svg"
        />
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
    cursor: pointer;
  }

  .action {
    text-align: center;
  }
}

img {
  width: 100%;
  padding: 0.5rem;
  color: red;
}
</style>
