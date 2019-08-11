<template>
  <div class="wrapper">
    <div
      :class="dragging ? 'dragging container' : 'container'"
      class="container shadow-md"
      @dragover="dragTrue"
      @dragleave="dragFalse"
      @dragend="dragTrue"
      @drop="filesDropped"
    >
      <div @click="folderClicked" class="icon-block">
        <i class="material-icons">folder</i>
      </div>
      <div class="instructions">
        <p>
          Drag &amp; drop sprites/folders or select a folder
        </p>
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
import { mapGetters } from 'vuex'

export default {
  name: 'select-sprites',
  components: { Checkbox },
  computed: mapGetters([
    'spriteCount',
    'selectedPath',
    'includeSubfolders',
    'steps'
  ]),
  data() {
    return {
      dragging: false
    }
  },
  watch: {
    spriteCount: function() {
      this.$router.push('config')
      this.$store.dispatch('toggleCompleteStep', 1)
    }
  },
  methods: {
    onChecked() {
      this.$store.dispatch('toggleIncludeSubFolders')
    },
    folderClicked() {
      this.$electron.ipcRenderer.send(
        'open-file-dialog',
        this.includeSubfolders
      )
    },
    dragTrue(e) {
      this.dragging = true
      e.preventDefault()
    },
    dragFalse(e) {
      this.dragging = false
      e.preventDefault()
    },
    filesDropped(e) {
      e.preventDefault()
      let files = []
      for (let f of e.dataTransfer.files) {
        files.push(f.path)
      }
      this.dragging = false
      this.$electron.ipcRenderer.send('files-dropped', {
        files: files,
        includeSubfolders: this.includeSubfolders
      })
    }
  },
  created() {
    if (this.steps[0].complete) {
      this.$router.push('config')
    }
    this.$electron.ipcRenderer.on('selected-folder', (event, result) => {
      this.$store.dispatch('setSpriteCount', result.fileList.length)
      this.$store.dispatch('setFolderCount', result.folderCount)
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
  border: 2px dashed $color-border-light;
  padding: 50px;
  box-sizing: content-box;
  background-color: $color-bg-light;
}

.dragging {
  border: 3px dashed $color-primary;
  background-color: rgb(170, 253, 170);
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
