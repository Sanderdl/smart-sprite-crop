<template>
  <div class="wrapper">
    <div class="center row selection shadow-md border">
      <div class="box">
        <div class="box">
          <i class="material-icons">collections</i>&nbsp;
          {{ spriteCount }} sprite(s)
        </div>
      </div>
      <div class="box">
        <div class="box">
          <i class="material-icons">folder</i>&nbsp; {{ folderCount }} folder(s)
        </div>
      </div>
      <div class="box">
        <Button :onClick="clearSelection">Clear sprites</Button>
      </div>
    </div>
    <div class="center row config">
      <div class="shadow-md box border"></div>
      <div class="shadow-md box border"></div>
      <div class="shadow-md box border"></div>
    </div>
    <div class="row"><ProgressBar :completed="20" /></div>
    <div class="button row box">
      <Button :onClick="cropSprites" important>Crop!</Button>
    </div>
  </div>
</template>

<script>
import Button from '../controles/Button'
import ProgressBar from '../controles/ProgressBar'
import { mapGetters } from 'vuex'

export default {
  name: 'config-options',
  components: { Button, ProgressBar },
  computed: mapGetters(['spriteCount', 'folderCount']),
  methods: {
    clearSelection() {
      console.log('clear selection')
      this.$router.replace('/')
    },
    cropSprites() {
      console.log('crop sprites')
    }
  }
}
</script>

<style scoped lang=scss>
@import '../../_config.scss';

$box-size: 15.5rem;

.wrapper {
  padding-top: 3%;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
}

.center {
  display: flex;
  justify-content: space-between;
}

.row {
  margin-bottom: 1.5rem;
}

.selection {
  height: $box-size/3;
  font-size: 1.2rem;
}

.border {
  border: 1px solid $color-border-light;
}

.box {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: $box-size;
}

.config {
  height: $box-size;
}
</style>
