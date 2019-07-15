<template>
  <div class="wrapper">
    <div class="container">
      <div @click="folderClicked" class="icon-block">
        <i class="material-icons">folder</i>
        <p class="amount">{{ selectedAmount }}</p>
      </div>
      <div class="instructions">
        <p v-if="selectedAmount === 0">
          Drag &amp; drop sprites/folders or select a folder
        </p>
        <p v-else>{{ selectedPath }}</p>
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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'select-sprites',
  components: { Checkbox },
  data: () => {
    return {
      includeSubfolders: true
    }
  },
  computed: mapGetters(['selectedAmount', 'selectedPath']),
  methods: {
    ...mapActions(['setSelectedAmount', 'setSelectedPath', 'setFileList']),
    onChecked() {
      this.includeSubfolders = !this.includeSubfolders
    },
    folderClicked() {
      this.$electron.ipcRenderer.send(
        'open-file-dialog',
        this.includeSubfolders
      )
    }
  },
  created() {
    this.$electron.ipcRenderer.on('selected-folder', (event, result) => {
      this.$store.dispatch('setSelectedAmount', result.fileList.length)
      this.$store.dispatch('setSelectedPath', result.path)
      this.$store.dispatch('setFileList', result.fileList)
    })
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
