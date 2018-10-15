<template>
  <div class="col-3 mb-3">
    <button class="mb-3" @click="buttonClicked">{{ btnText }}</button>
  </div>
</template>

<script>

export default {
  props: {
    btnText: String,
  },
  methods: {
    buttonClicked: function() {
      if (this.btnText === ".")
      {
        this.decimalClicked();
      }
      else if(isNaN(this.btnText))
      {
          this.operatorClicked();
      }
      else
      {
          this.numberClicked();
      }
    },

    operatorClicked: function() {
      let operator = this.btnText;
      if (operator === 'x')
      {
        operator = '*';
      }
      this.$store.dispatch("performOperation", operator);
    },

    decimalClicked: function() {
      this.$store.dispatch("addDecimal");
    },

    numberClicked: function() {
    	this.$store.dispatch("addNumber", this.btnText);
    },
  }
}
</script>

<style scoped>
button
{
  background-color: LightBlue;
  color: black;
}

button:hover
{
	background-color: #8bb6c4;
}

button:active
{
  background-color: #8bb6c4;
}
</style>
