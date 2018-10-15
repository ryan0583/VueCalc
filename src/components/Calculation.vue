<template>
  <div class="col-12">
    <input :value="value" readonly>
  </div>
</template>

<script>

export default {
  computed: {
    value: function() {
      return this.$store.state.calculation;
    }
  }
}
</script>

<style scoped>
input {
  font-size:24px;
  border-top: none;
  border-right: none;
  border-bottom: none;
  border-left:10px solid green;
}
</style>
