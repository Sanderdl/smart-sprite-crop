<template>
  <div class="con-contrainer">
    <div class="title">Constraints</div>
    <div class="constraint-box">
      <button
        @click="toggleConstraint('right')"
        class="right"
        v-bind:class="{ selected: constraints.right }"
      >
        <i class="material-icons ">chevron_right</i>
      </button>
      <button
        @click="toggleConstraint('left')"
        class="left"
        v-bind:class="{ selected: constraints.left }"
      >
        <i class="material-icons">chevron_left</i>
      </button>
      <button
        @click="toggleConstraint('top')"
        class="top"
        v-bind:class="{ selected: constraints.top }"
      >
        <i class="material-icons">expand_less</i>
      </button>
      <button
        @click="toggleConstraint('bottom')"
        class="bottom"
        v-bind:class="{ selected: constraints.bottom }"
      >
        <i class="material-icons">expand_more</i>
      </button>
      <div class="img-container">
        <img src="~@/assets/walk_preview.png" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'constraints',
  computed: mapGetters(['constraints']),
  methods: {
    toggleConstraint(constraint) {
      this.$store.dispatch('toggleConstraint', constraint)
    }
  }
}
</script>

<style scoped lang=scss>
@import '../../_config.scss';

.con-contrainer {
  width: 100%;
  margin: 1.5rem;
}

.title {
  margin: 0 auto;
  width: 100%;
  text-align: center;
  margin-bottom: 1rem;
}

.constraint-box {
  padding: 1rem;
  border: solid 4px $color-border-light;
  width: 100%;
  margin-bottom: 1rem;
  position: relative;
}

.inner-box {
  padding: 1rem;
  margin: -4px;
}

.right {
  top: -4px;
  bottom: -4px;
  right: -4px;
  width: 8px;
  position: absolute;
  z-index: 50;
}

.left {
  @extend .right;
  left: -4px;
  text-align: left;
}

.top {
  top: -4px;
  left: 0;
  right: 0;
  height: 8px;
  width: 100%;
  position: absolute;
}

.bottom {
  bottom: -4px;
  left: 0;
  right: 0;
  height: 8px;
  width: 100%;
  position: absolute;
}

.rotate {
  transform: rotate(-90);
}

.img-container {
  padding-left: 30%;
}

button {
  border-style: none;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: darkgrey;
}

button:focus {
  outline: none;
}

.selected {
  background-color: $color-primary;

  i {
    color: $color-primary;
  }
}

.selected:hover {
  background-color: rgb(79, 214, 0);

  i {
    color: rgb(79, 214, 0);
  }
}

.top {
  i {
    transform: translateY(-16px);
  }
}

.left {
  i {
    transform: translateX(-16px);
  }
}
</style>
