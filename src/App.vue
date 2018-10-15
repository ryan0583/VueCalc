<template>
  <div id="app" class="container">
    <div class="row">

      <div class="col-1 col-sm-2 col-md-3 col-lg-4">
      </div>

      <div class="col-9 col-sm-8 col-md-6 col-lg-4">
        <div class="row">
          <Calculation/>
        </div>

        <div class="row">
          <RunningTotal/>
          <CancelButton/>
        </div>
        <ButtonRow :values="['7', '8', '9', '/']"></ButtonRow>
        <ButtonRow :values="['4', '5', '6', 'x']"></ButtonRow>
        <ButtonRow :values="['1', '2', '3', '-']"></ButtonRow>
        <ButtonRow :values="['.', '0', '=', '+']"></ButtonRow>
      </div>

      <div class="col-2 col-sm-2 col-md-3 col-lg-4">
      </div>

    </div>

  </div>
</template>

<script>
import Calculation from './components/Calculation.vue';
import RunningTotal from './components/RunningTotal.vue';
import CancelButton from './components/CancelButton.vue';
import ButtonRow from './components/ButtonRow.vue';

export default {
  name: 'app',
  components: {
    Calculation,
    RunningTotal,
    CancelButton,
    ButtonRow
  }
}
</script>

<style>
button
{
  width: 100%;
  height: 100%;
  font-size:24px;
  border: none;
  border-width: 0px;
  border-radius: 50%;
  box-shadow: 0 9px #999;
  text-decoration: none;
  cursor: pointer;
  outline: none;
}

button:active
{
  	box-shadow: 0 5px #666;
	  transform: translateY(4px);
}

input
{
  display:table-cell;
  width:100%;
  height:100%;
}
</style>
