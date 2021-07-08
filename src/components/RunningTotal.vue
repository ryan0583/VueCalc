<template>
  <div>
    <input :value="value" readonly>
  </div>
</template>

<script>
export default {
  computed: {
    value: function() {
      return this.$store.state.runningTotal;
    },
  },
};
</script>

<style scoped>
input {
  width: 223px;
  font-size: 16px;
  border: none;
}
</style>
