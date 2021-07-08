<template>
  <div class="button-row">
    <Button v-for="value in values" :btnText=value></Button>
  </div>
</template>

<script>
import Button from "./Button.vue";

export default {
  props: {
    values: Array,
  },
  components: {
    Button,
  },
};
</script>

<style>
.button-row {
  display: flex;
}
</style>
