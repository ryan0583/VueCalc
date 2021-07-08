<template>
  <div id="app" class="ml-3">
    <div>

      <div>
        <div>
          <Calculation/>
        </div>

        <div class="line-2">
          <RunningTotal/>
          <CancelButton/>
        </div>
        <ButtonRow :values="['7', '8', '9', '/']"></ButtonRow>
        <ButtonRow :values="['4', '5', '6', 'x']"></ButtonRow>
        <ButtonRow :values="['1', '2', '3', '-']"></ButtonRow>
        <ButtonRow :values="['.', '0', '=', '+']"></ButtonRow>
      </div>

    </div>

  </div>
</template>

<script>
import Calculation from "./components/Calculation.vue";
import RunningTotal from "./components/RunningTotal.vue";
import CancelButton from "./components/CancelButton.vue";
import ButtonRow from "./components/ButtonRow.vue";

export default {
  name: "app",
  components: {
    Calculation,
    RunningTotal,
    CancelButton,
    ButtonRow,
  },
};
</script>

<style>
#app {
  display: flex;
  justify-content: center;
}

.line-2 {
  display: flex;
  justify-content: flex-start;
}

button {
  height: 60px;
  width: 70px;
  font-size: 24px;
  border: none;
  border-width: 0px;
  border-radius: 50%;
  box-shadow: 0 9px #999;
  text-decoration: none;
  cursor: pointer;
  outline: none;
}

button:active {
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>
