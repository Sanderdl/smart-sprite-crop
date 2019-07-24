<template>
  <div>
    <p>Config options</p>
    <button @click="clearSelection">Back</button>
  </div>
</template>

<script>
export default {
  name: 'config-options',
  methods: {
    clearSelection() {
      this.$router.replace('/')
    }
  }
}
</script>

<style>
</style>
