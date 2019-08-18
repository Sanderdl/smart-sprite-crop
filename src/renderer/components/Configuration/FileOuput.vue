<template>
  <div class="con-contrainer">
    <div class="title">Output file location</div>
    <form>
      <label> &nbsp;</label>
      <div class="color-box">
        <select name="title" v-on:change="onOutputChange">
          <option value="overwrite" :selected="'top-left' === outputStrategy"
            >Overwrite original</option
          >
          <option value="prefix" :selected="'top-right' === outputStrategy"
            >Save with prefix</option
          >
          <option
            value="spritesheet"
            :selected="'bottom-left' === outputStrategy"
            >Spritesheet</option
          >
        </select>
      </div>
      <label>Sprite-prefix</label>
      <div class="color-box">
        <input type="text" v-on:change="onPrefixChange" />
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'file-output',
  computed: mapGetters(['prefix', 'outputStrategy']),
  methods: {
    onOutputChange(e) {
      this.$store.dispatch('setOutputStrategy', e.target.value)
    },
    onPrefixChange(e) {
      this.$store.dispatch('setPrefix', e.target.value)
    }
  }
}
</script>

<style scoped lang=scss>
@import '../../_config.scss';

.con-contrainer {
  width: 100%;
  height: 100%;
  padding: 0.7rem 1.5rem;
}

.title {
  margin: 0 auto;
  width: 100%;
  text-align: center;
  margin-bottom: 1.5rem;
}

.color-box {
  display: flex;
  margin-bottom: 1.5rem;
  padding: 0.5rem 0;
}

label {
  font-size: 0.85rem;
}

select {
  width: 100%;
  height: 100%;

  background: transparent;
  padding: 5px;
  line-height: 1;
  border: 2px solid $color-border-light;
  outline: 0;
  border-radius: 0;
  appearance: none;
}

input[type='text'] {
  width: 100%;
  height: 30px;
  padding: 5px;
  border: 2px solid $color-border-light;
}
</style>