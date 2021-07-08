<template>
  <div class="col-3 mb-3">
    <button @click="clear">C</button>
  </div>
</template>

<script>
export default {
  methods: {
    clear: function() {
      this.$store.commit("clear");
    },
  },
};
</script>

<style scoped>
button {
  background-color: Red;
  color: white;
}

button:hover {
  background-color: #dd0000;
}

button:active {
  background-color: #dd0000;
}
</style>
