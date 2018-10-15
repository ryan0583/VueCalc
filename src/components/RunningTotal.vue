<template>
  <div class="col-9">
    <input :value="value" readonly>
  </div>
</template>

<script>

export default {
  computed: {
    value: function() {
      return this.$store.state.runningTotal;
    }
  }
}
</script>

<style scoped>
input {
  font-size:16px;
  border: none;
}
</style>
